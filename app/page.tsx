"use server";

import { ChannelStats, Search, VideoInfo } from "@/containers";
import { getVideos } from "./actions";
import { Pagination, Tabs, SearchChannel, ChannelFound } from "@/components";
import { redirect } from "next/navigation";
// import SearchChannel from "@/components/searchChannel";

type PageParams = {
  searchParams: {
    page: string;
    channel: string;
    auth: string;
  };
};

const Page = async (props: PageParams) => {
  const {
    searchParams: { page, channel, auth },
  } = props;
  if (auth && !JSON.parse(auth)) {
    redirect("/login");
  }
  // DATA FETCHING

  const { videos, maxItems, channelStats } = await getVideos({ channel, page });

  return (
    <div>
      <Search />
      <ChannelFound text={channel}></ChannelFound>
      <Tabs
        centered
        items={[
          {
            key: "1",
            label: "Video List",
            children: (
              <>
                {channel ? (
                  <main className="container mx-auto py-32 px-8">
                    <div className="grid lg:grid-cols-5  md:grid-cols-2 grid-cols-1 gap-6 ">
                      {videos &&
                        videos.map((videoInfo) => (
                          <VideoInfo key={videoInfo.name} {...videoInfo} />
                        ))}
                    </div>
                    <Pagination
                      simple
                      total={maxItems}
                      current={Number(page)}
                    />
                  </main>
                ) : (
                  <SearchChannel></SearchChannel>
                )}
              </>
            ),
          },
          {
            key: "2",
            label: "Channel Stats",
            children: (
              <>
                <ChannelStats channelStats={channelStats} />
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Page;
