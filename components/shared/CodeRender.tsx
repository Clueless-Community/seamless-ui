import { Tabs, TabList, TabPanels, Tab, TabPanel, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";

interface Props {
    codeMetaData: { label: string; content: string }[];
    componentsArray: JSX.Element[];
}

const CodeRender: React.FC<Props> = ({ codeMetaData, componentsArray }) => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const toast = useToast();

    return (
        <>
            {/* Componet Reders Here */}
            <div className="flex my-8 justify-center border rounded-xl py-20 items-center bg-gray-800">
                <Tabs
                    size="md"
                    variant="enclosed"
                    index={tabIndex}
                    defaultIndex={0}
                    colorScheme={"cyan"}
                    className=" rounded-xl">
                    <TabPanels>
                        {componentsArray?.map((component, index) => {
                            return (
                                <TabPanel p={0} key={index}>
                                    <>
                                        {component}
                                    </>
                                </TabPanel>
                            )
                        })}
                    </TabPanels>
                </Tabs>
            </div>
            {/* Sample Code Comes here */}
            <div className="bg-[#0e1629] backdrop-blur-2xl border-1 rounded-lg">
                <Tabs
                    onChange={(index) => setTabIndex(index)}
                    size="md"
                    variant="enclosed"
                    index={tabIndex}
                    defaultIndex={0}
                    colorScheme={"cyan"}
                    className=" rounded-xl"
                >
                    <TabList style={{ display: "relative" }}>
                        <div className=" flex justify-between w-full pr-5">
                            <div className=" flex">
                                {codeMetaData.map((data, index) => (
                                    <>
                                        <Tab key={index}>{data.label}</Tab>
                                    </>
                                ))}
                            </div>
                            <CopyToClipboard text={codeMetaData[tabIndex].content}>
                                <button onClick={() => {
                                    toast({
                                        title: 'Code Copied',
                                        description: "Code is copied to clipboard.",
                                        status: 'info',
                                        duration: 5000,
                                        isClosable: true,
                                        position : "bottom-right"
                                      })
                                }}>Copy</button>
                            </CopyToClipboard>
                        </div>
                    </TabList>
                    <TabPanels>
                        {codeMetaData.map((data, index) => (
                            <>
                                <TabPanel p={0} key={index}>
                                    <SyntaxHighlighter
                                        customStyle={{ padding: "25px"}}
                                        wrapLines={true}
                                        showLineNumbers
                                        language="javascript"
                                        style={atomOneDark}
                                    >
                                        {data.content}
                                    </SyntaxHighlighter>
                                </TabPanel>
                            </>
                        ))}
                    </TabPanels>
                </Tabs>
            </div>
        </>
    );
};

export default CodeRender;
