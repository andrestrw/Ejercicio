"use client";

import Card from "@/components/card";
import Text from "@/components/text";
import Title from "@/components/title";
import "@/styles/globals.css";
import Image from "next/image";
import React from "react";

type VideoInfoProps = {
  name: string;
  date: string;
  visits: number;
  hashmd5: string;
  image: string;
};

const VideoInfo = ({ name, date, visits, hashmd5, image }: VideoInfoProps) => {
  return (
    <Card>
      <Image
        src={image}
        alt=""
        width={400}
        height={300}
        sizes="(width: 100%)"
        className="rounded-t-lg w-full"
      />
      <div className="p-5  ">
        <Title title={name}></Title>
        <p className=" text-lg  font-normal text-gray-100">Date: {date}</p>

        {/* ----------------- */}
        <Text text={`Visits: ${visits}`}></Text>
        <Text text={`Hashmd5: ${hashmd5}`}></Text>
      </div>
    </Card>
  );
};

export default VideoInfo;
