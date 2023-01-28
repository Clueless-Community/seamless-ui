/*
  This file contains a modified version of code from benchmark-action/github-action-benchmark.

  Copyright (c) 2019 rhysd - MIT License https://raw.githubusercontent.com/benchmark-action/github-action-benchmark/master/LICENSE.txt
*/

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import styles from "./styles.module.css";

const BENCH_DATA_URL =
  "https://raw.githubusercontent.com/swc-project/raw-data/gh-pages/benchmark-data.json";

const getOptions = (dataset) => ({
  scales: {
    x: {
      title: {
        display: true,
        text: "commit",
      },
    },
    y: {
      title: {
        display: true,
        text: dataset.length > 0 ? dataset[0].bench.unit : "",
      },
      beginAtZero: true,
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        afterTitle: (items) => {
          const { dataIndex } = items[0];
          const data = dataset[dataIndex];
          return (
            "\n" +
            data.commit.message +
            "\n\n" +
            data.commit.timestamp +
            " committed by @" +
            data.commit.committer.username +
            "\n"
          );
        },
        label: (item) => {
          let label = item.label;
          const { range, unit } = dataset[item.dataIndex].bench;
          label += " " + unit;
          if (range) {
            label += " (" + range + ")";
          }
          return label;
        },
        afterLabel: (item) => {
          const { extra } = dataset[item.dataIndex].bench;
          return extra ? "\n" + extra : "";
        },
      },
    },
  },
  onClick: (_mouseEvent, activeElems) => {
    if (activeElems.length !== 0) {
      const index = activeElems[0].index;
      const url = dataset[index].commit.url;
      window.open(url, "_blank");
    }
  },
});

export default function Benchmark() {
  const [testCase, setTestCase] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [dataMap] = useState(new Map());

  useEffect(() => {
    fetch(BENCH_DATA_URL)
      .then((res) => res.json())
      .then((data) => {
        for (const entry of data.entries.Benchmark) {
          const { commit, date, benches } = entry;
          for (const bench of benches) {
            const result = { commit, date: new Date(date), bench };
            const arr = dataMap.get(bench.name);
            if (arr) {
              arr.push(result);
            } else {
              dataMap.set(bench.name, [result]);
            }
          }
        }
        setLastUpdated(new Date(data.lastUpdate));
        setTestCase(dataMap.keys().next().value);
      });
  }, []);

  const testCaseResults = dataMap.get(testCase);

  const selectHandler = (e) => {
    const value = e.target.value;
    if (dataMap.has(value)) {
      setTestCase(value);
    }
  };

  return testCaseResults ? (
    <>
      <div className={styles.top}>
        Last updated: {lastUpdated?.toLocaleString()}
        <select onChange={selectHandler}>
          {Array.from(dataMap.keys()).map((key) => (
            <option key={key} value={key}>
              {key}
            </option>
          ))}
        </select>
      </div>
      <Line
        data={{
          labels: testCaseResults.map((result) => result.commit.id.slice(0, 7)),
          datasets: [
            {
              label: testCase,
              data: testCaseResults.map((result) => result.bench.value),
              borderColor: "#dea584",
              backgroundColor: "#dea58460",
            },
          ],
        }}
        options={getOptions(testCaseResults)}
      />
    </>
  ) : (
    <>Loading...</>
  );
}
