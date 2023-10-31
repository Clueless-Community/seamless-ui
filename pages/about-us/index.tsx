import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import teamMembers from "../../database/teamMembers";
import Card from "./card";

const Home = () => (
  <div className="index-bg">
    <Navbar />
    <div className="green-gradient absolute left-[10%] top-[20%] scale-110"></div>
    <div className="relative sm:p-10">
      <div className="hidden mx-10 xl:mx-24 lg:block">
        <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mt-24">
          About <br /> Community.
        </h1>
        <p className="text-white ml-12 lg:w-1/2 text-lg mt-8 tracking-wider">
          Clueless is a student community which focuses on building developer
          tools with the power of open-source. We believe in the vision “Learn
          and Grow” and encourage & guide enthusiasts to dive deep into the
          world of open-source.
        </p>
        <div>
          <img
            className="lg:w-1/2 xl:w-[600px] p-20 absolute top-56 xl:top-8 lg:right-0 xl:right-20 lg:top-28"
            src="About/right.png"
            alt=""
          />
          {/* Blur Effect */}
          <div
            className="hidden md:block right-40 absolute shrink-0 w-[200px] h-[200px]"
            style={{
              background: "rgba(126, 231, 135, 0.5)",
              filter: "blur(180px)",
            }}
          />
        </div>
        <div>
          <img
            className="w-36 top-72 ml-2 hidden absolute lg:block"
            src="About/greenLine.png"
            alt=""
          />
          {/* Blur Effect */}
          <div
            className="hidden md:block -left-60 top-[600px] absolute shrink-0 w-[200px] h-[200px]"
            style={{
              background: "rgba(126, 231, 135, 0.5)",
              filter: "blur(180px)",
            }}
          />
        </div>

        <div className="mt-96 bg-[#272D36] flex relative border rounded-[32px]">
          <div className="flex items-center 2xl:gap-20 py-10">
            <img src="/About/vision.svg" className="-ml-20 h-52" alt="vision" />
            <div className="flex cursor-default flex-col lg:px-8 xl:px-20">
              <h1 className="text-[40px] text-[#F9F9F9] font-black tracking-wider">
                Our Vision
              </h1>
              <p className="text-[#D4D4D4] text-xl tracking-wider">
                We believe in the motto 'Learn & Grow'. Our sole focus is to
                build some developer tools which will be built by developers and
                serve for developers.
              </p>
            </div>
          </div>
          <div className="bg-[#7EE787] w-5 p-7 rounded-r-[30px]"></div>
        </div>
      </div>
      <div className="lg:hidden mx-3">
        <h1 className="text-5xl px-2 md:text-7xl font-bold text-white mt-24">
          About <br className="hidden" /> Community.
        </h1>
        <div>
          {/* Blur Effect */}
          <div
            className="block absolute shrink-0 top-80 left-20 w-[200px] h-[200px]"
            style={{
              background: "rgba(126, 231, 135, 0.4)",
              filter: "blur(182px)",
            }}
          />
          <img
            className="w-96 my-8 px-2 sm:mx-auto lg:mx-0"
            src="About/right.png"
            alt=""
          />
        </div>
        <p className="text-white font-normal text-[20px] px-3 tracking-wider">
          Clueless in a virtual open-source community built with the motive of
          “Learn and Grow”. We, as a community, encourage and guide enthusiasts
          to dive into the world of open-source. We provide the best resources
          available on the internet, write blogs that helps other to explore
          their domain more deeply, organize events, GitHub repositories,
          organize hackathons, and more couniting activities
        </p>
        <img
          className="w-5 my-3 ml-6 lg:hidden"
          src="About/greenLineMobile.png"
          alt=""
        />
        <div className=" bg-[#272D36] flex flex-col-reverse relative border rounded-[19px]">
          <div className="flex flex-col-reverse text-center items-center 2xl:gap-20 py-4">
            <img
              src="/About/vision.svg"
              className="h-48 sm:h-56 sm:-mb-20 -mb-16"
              alt="vision"
            />
            <div className="flex cursor-default flex-col px-8 xl:px-20">
              <h1 className="text-[36px] text-[#F9F9F9] font-black tracking-wider pb-8">
                Our Vision
              </h1>
              <p className="text-[#D4D4D4] text-xl tracking-wider text-start pb-20">
                Internet is flooded with so many resources that can make one
                confused and clueless. So we provide the best, filtered, and
                curated resources like YouTube videos, GitHub repositories,
                websites, cheatsheets, etc!{" "}
              </p>
            </div>
          </div>
          <div className="bg-[#7EE787] p-5 rounded-t-[19px]"></div>
        </div>
      </div>
    </div>
    <div className="mb-12 pb-48 sm:pb-0 mt-16 relative sm:mt-20 lg:mt-10">
      <div className="flex items-center flex-col-reverse justify-center">
        <div className="relative">
          <h1 className="text-white text-3xl sm:text-5xl mt-[90px] sm:mt-[100px] lg:mt-44  text-center font-bold">
            Maintainers
          </h1>
          <div>
            <div className="w-5 h-5 absolute -left-48 top-60 rounded-sm bg-[#AAEBB0]"></div>
            <div className="w-5 h-5 absolute rounded-sm right-20 top-[870px] bg-[#4F855A]"></div>
            <div className="w-5 h-5 absolute rounded-sm right-40 -bottom-96 bg-[#AAEBB0]"></div>
            <div className="w-5 h-5 absolute rounded-sm left-[220px] -bottom-16 bg-[#7EE787]"></div>
            <div className="w-5 h-5 absolute rounded-sm -left-96 top-[550px] bg-[#4F855A]"></div>
            <div className="w-3 h-3 absolute rounded-sm -left-96 top-80 bg-[#4F855A]"></div>
            <div className="w-3 h-3 absolute rounded-sm -left-20 top-[600px] bg-[#4F855A]"></div>
          </div>
        </div>
        <div className="-ml-40 sm:-ml-52 lg:-ml-96 flex">
          <div className="relative">
            <div className="h-5 w-5 lg:h-6 lg:w-6 rounded-full border-4 lg:border-[3.5px] border-[#7EE787]"></div>
            <div className="mx-auto h-8 lg:h-20 w-[0.2rem] bg-[#7EE787]"></div>
            <div className="absolute left-[0.55rem] lg:left-[0.65rem] h-5 w-5 rounded-bl-2xl lg:rounded-bl-full border-l-[0.2rem] border-b-[0.2rem] border-[#7EE787]"></div>
            <div className="absolute -bottom-5 left-7 h-[0.2rem] w-20 lg:w-40 bg-[#7EE787]"></div>
            <div className="absolute left-[6.5rem] lg:left-[11.7rem] -bottom-[2.3rem] h-5 w-5 rotate-180 rounded-bl-2xl lg:rounded-bl-full border-l-[0.2rem] border-b-[0.2rem] border-[#7EE787]"></div>
            <div className="absolute left-[7.53rem] lg:left-[12.75rem] -bottom-16 lg:-bottom-[117px] mx-auto h-8 lg:h-20 w-[0.2rem] bg-[#7EE787]"></div>
            <div className="absolute -bottom-[5.2rem] lg:-bottom-[8.7rem] left-28 lg:left-[194px] h-5 lg:h-6 lg:w-6 lg:border-[3.5px] w-5 rounded-full border-4 border-[#7EE787]"></div>
            {/* Blur Effect */}
            <div
              className="hidden md:block left-60 top-20 absolute shrink-0 w-[200px] h-[200px]"
              style={{
                background: "rgba(126, 231, 135, 0.3)",
                filter: "blur(182px)",
              }}
            />
          </div>
        </div>
      </div>
      <div className="pb-28 grid xl:grid-cols-3 grid-cols-2 lg:grid-cols-3 gap-y-24 mt-20 sm:gap-x-0 gap-x-10 px-5 lg:px-40 place-items-center">
        {teamMembers.map((item, index) => {
          return (
            <div key={index} className={`${index === 0}`}>
              <Card
                name={item.name}
                photo_url={item.photo_url}
                designation={item.designation}
                linkedin_url={item.linkedin_url}
                github_url={item.github_url}
                twitter_url={item.twitter_url}
              />
            </div>
          );
        })}
      </div>
      <div className="lg:mt-40 sm:mt-72 mt-40 sm:mb-52 mb-96 lg:mb-20 px-5 lg:px-0">
        <div className="flex px-32 w-full flex-wrap relative gap-4 justify-between items-center">
          <img
            src="/About/Bottom/flutter.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:top-32 top-36 lg:top-0 sm:left-[45%] left-[40%] lg:left-0"
            alt="flutter"
          />
          <img
            src="/About/Bottom/kubernetes.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[25%] left-[15%] top-60 sm:-top-28 lg:top-0 lg:left-0"
            alt="kubernetes"
          />
          <img
            src="/About/Bottom/redux.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[25%] left-[15%] top-16 lg:top-0 lg:left-0"
            alt="Redux"
          />
          <img
            src="/About/Bottom/ether.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:top-0 top-[400px] sm:left-[10%] left-[12%] lg:left-0"
            alt="ether"
          />
          <img
            src="/About/Bottom/github.svg"
            className="lg:h-24 h-16 xl:h-32 lg:relative absolute sm:left-[45%] left-[37%] lg:left-0"
            alt="Github"
          />
          <img
            src="/About/Bottom/react.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[82%] left-[66%] sm:top-0 top-[400px] lg:left-0"
            alt="react"
          />
          <img
            src="/About/Bottom/vscode.svg"
            className="h-12 lg:relative absolute xl:h-16 left-[66%] lg:left-0 top-16 lg:top-0"
            alt="vs code"
          />
          <img
            src="/About/Bottom/d3.svg"
            className="h-12 lg:relative absolute xl:h-16 left-[65%] lg:left-0 sm:-top-28 top-60 lg:top-0"
            alt="d3js"
          />
          <img
            src="/About/Bottom/polygon.svg"
            className="h-12 lg:relative absolute xl:h-16 sm:left-[45%] left-[40%] lg:left-0 sm:-top-40 top-80 lg:top-0"
            alt="polygon"
          />
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
