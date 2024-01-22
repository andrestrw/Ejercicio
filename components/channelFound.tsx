type channelFoundProps = {
  text: string;
};

const channelFound = ({ text }: channelFoundProps) => {
  return (
    <div className="flex justify-center my-5 ">
      <div className="text-2xl font-bold md:text-3xl text-white">
        Channel: {text ? text.toUpperCase() : ""}
      </div>
    </div>
  );
};

export default channelFound;
