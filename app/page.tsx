"use server";

import { ChannelStats, Search, VideoInfo } from "@/containers";
import { getVideos } from "./actions";
import {
  Pagination,
  Tabs,
  SearchChannel,
  ChannelFound,
  Grid,
  Centered,
} from "@/components";
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
  if (!JSON.parse(auth ?? false)) {
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
                {/* ? truthy : falsy */}
                {channel ? (
                  <Centered>
                    <Pagination
                      simple
                      total={maxItems}
                      current={Number(page)}
                    />
                    <Grid>
                      {videos &&
                        videos.map((videoInfo) => (
                          <VideoInfo key={videoInfo.name} {...videoInfo} />
                        ))}
                    </Grid>
                  </Centered>
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
                {channel ? (
                  <Centered>
                    <Grid colsLg={4}>
                      <ChannelStats channelStats={channelStats} />
                    </Grid>
                  </Centered>
                ) : (
                  <SearchChannel></SearchChannel>
                )}
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Page;
