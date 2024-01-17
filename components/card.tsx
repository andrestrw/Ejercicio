type CardProps = {
  children: JSX.Element[];
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="shadow-lg rounded-lg border border-white">{children}</div>
  );
};

export default Card;
