'use server'

import { redirect } from "next/navigation";
import crypto from 'crypto';

import { VIDEOS, CHANNEL_STATS } from "./mock";


const MAX_VIDEO_PER_PAGE = 10 as const;
const CREDENTIALS = {
  USERNAME: 'CEO',
  PASSWORD: '123456',} as const;
  
  export async function login({ username, password }: any) {
    if (username === CREDENTIALS.USERNAME && password === CREDENTIALS.PASSWORD) {redirect('/?auth=true');
}
}

const generateHashMd5 = (name: string) => {
    const md5hash = crypto.createHash('md5');
    md5hash.update(name);
    return md5hash.digest('hex');
  };

  function createVideoChunks(videos: (typeof VIDEOS)) {
    const result = [];
    for (let i = 0; i < videos.length; i += MAX_VIDEO_PER_PAGE) {const chunk = videos.slice(i, i + MAX_VIDEO_PER_PAGE); result.push(chunk);  }
    return result;
  }


  const postprocessVideoInfo = (videos: (typeof VIDEOS) = []) => {
    return videos.map((video, index) => {
      return {
        ...video, image: video.image.replace('*', `${index}`),  
           hashmd5: generateHashMd5(video.name),
    };
  });
};


export async function getVideos({ page }: any) {
    const chunks = createVideoChunks(VIDEOS);
    const initialPage = (page && page > 1) ? page - 1 : 0;

    return {
      videos: postprocessVideoInfo(chunks[initialPage]),
      channelStats: CHANNEL_STATS,
      page,
      maxItems: VIDEOS.length,
    };
  }
  