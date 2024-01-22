import Card from "@/components/card";

const ChannelStats = ({ channelStats }: any) => {
  const { channelCreationDate, totalVisits, totalUploadedVideos, channelTags } =
    channelStats;

  return (
    <>
      <Card flex="flex" justify="justify-center" padding="p-5">
        {channelCreationDate}
      </Card>
      <Card flex="flex" justify="justify-center" padding="p-5">
        <div>{totalVisits}</div>
      </Card>
      <Card flex="flex" justify="justify-center " padding="p-5">
        <div className="text-center ">
          TAGS
          {channelTags.map((value: any, index: any) => (
            <div key={index}>{value}</div>
          ))}
        </div>
      </Card>
      <Card
        flex="flex"
        justify="justify-center "
        padding="p-5"
        align="items-center"
      >
        <div>{totalUploadedVideos}</div>
      </Card>
    </>
  );
};

export default ChannelStats;
