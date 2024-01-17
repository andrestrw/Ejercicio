type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => {
  return (
    <h3 className="text-2xl font-bold md:text-3xl text-gray-100 mb-3">
      {title}
    </h3>
  );
};

export default Title;
