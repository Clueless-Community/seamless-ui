/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
type cardProps = {
  name: string;
  photo_url: string;
  designation: string;
  linkedin_url: string;
  github_url: string;
  twitter_url: string;
};
const Card: React.FC<cardProps> = ({
  name,
  photo_url,
  designation,
  linkedin_url,
  github_url,
  twitter_url,
}) => {
  return (
    <div className="relative border-4 border-green-400 rounded-full">
      <img
        src={photo_url}
        className="sm:h-48 h-30 w-30 grayscale sm:w-48 object-cover rounded-full"
        alt=""
      />
      <div className="absolute hidden sm:block top-40 left-4 rounded-full">
        <div className="flex flex-col rounded-t-[12px] justify-center py-[7px] text-center bg-gray-800 w-40">
          <h1 className="text-white text-[15px]">{name}</h1>
          <h1 className="text-[12px] text-gray-400">{designation}</h1>
        </div>
        <div className="flex bg-green-400 rounded-b-[12px] justify-center gap-x-4 pt-[5px] pb-[9px]">
          <Link
            href={github_url}
            className="text-black text-lg"
            target="_blank"
          >
            <AiFillGithub />
          </Link>
          <Link
            href={linkedin_url}
            className="text-black text-lg"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            href={twitter_url}
            className="text-black text-lg"
            target="_blank"
          >
            <AiOutlineTwitter />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
