import dynamic from "next/dynamic";

const Benchmark = dynamic(() => import("./benchmark"));

export default Benchmark;
