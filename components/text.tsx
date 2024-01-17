type TextProps = {
  text: number | string;
};

const Text = ({ text }: TextProps) => {
  return <p className=" text-lg text-gray-100z">{text} </p>;
};

export default Text;
