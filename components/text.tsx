type TextProps = {
  text: number | string;
};

const Text = ({ text }: TextProps) => {
  return <p className=" text-lg text-gray-100">{text} </p>;
};

export default Text;
