import { Tabs, TabList, TabPanels, Tab, TabPanel, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "@chakra-ui/react";

interface Props {
    codeMetaData: { label: string; content: string }[];
    componentsArray: JSX.Element[];
    theme?: "dark" | "light"
    reload?: boolean
}

const ExampleComponent: React.FC<Props> = ({ codeMetaData, componentsArray, theme, reload }) => {
    const [tabIndex, setTabIndex] = useState<number>(0);
    const [reRender, setReRender] = useState<boolean>(false);
    const toast = useToast();


    return (
        <>
            {reload ? (
                <>
                    {/* Componet Reders Here */}
                    {reRender ? (
                        <div className={`flex my-8 justify-center border border-gray-600 rounded-xl py-16 items-center relative ${theme === 'light' ? 'bg-gray-400' : 'bg-gray-800'}  `}>
                            <Tooltip label="Reload" >
                                <button className="absolute cursor-pointer right-3 top-3" onClick={() => setReRender(!reRender)}>
                                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" />
                                    </svg>
                                </button>
                            </Tooltip>
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
                    ) : (
                        <div className={`flex my-8 justify-center border border-gray-600 rounded-xl py-16 items-center relative ${theme === 'light' ? 'bg-gray-400' : 'bg-gray-800'}  `}>
                            <div className="hidden">re-redner</div>
                            <Tooltip label="Reload">
                                <button className="absolute cursor-pointer right-3 top-3" onClick={() => setReRender(!reRender)}>
                                    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-5 w-5">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" />
                                    </svg>
                                </button>
                            </Tooltip>
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
                    )}
                </>
            ) : (
                <div className={`flex my-8 justify-center border border-gray-600 rounded-xl py-16 items-center relative ${theme === 'light' ? 'bg-gray-400' : 'bg-gray-800'}  `}>
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
            )}
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
                                <button className="btn-copy text-sm font-bold rounded-md flex items-center gap-1" onClick={() => {
                                    toast({
                                        title: 'Code Copied',
                                        description: "Code is copied to clipboard.",
                                        status: 'info',
                                        duration: 5000,
                                        isClosable: true,
                                        position: "bottom-right"
                                    })
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                                    </svg>

                                    COPY</button>
                            </CopyToClipboard>
                        </div>
                    </TabList>
                    <TabPanels>
                        {codeMetaData.map((data, index) => (
                            <>
                                <TabPanel p={0} key={index}>
                                    <SyntaxHighlighter
                                        customStyle={{ padding: "25px" }}
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

export default ExampleComponent;
