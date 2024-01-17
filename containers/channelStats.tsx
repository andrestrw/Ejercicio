const ChannelStats = ({ channelStats }: any) => {
  return (
    <div>
      <pre>{JSON.stringify(channelStats, null, 2)}</pre>
    </div>
  );
};

export default ChannelStats;
