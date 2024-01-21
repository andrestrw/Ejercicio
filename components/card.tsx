type CardProps = {
  children: JSX.Element[] | JSX.Element;
  flex?: string;
  justify?: string;
  padding?: string;
  align?: string;
};

const Card = ({
  flex = "",
  justify = "",
  padding = "",
  children,
  align = "",
}: CardProps) => {
  return (
    <div
      className={`shadow-lg rounded-lg border ${flex}  ${justify} ${align}  ${padding} border-white `}
    >
      {children}
    </div>
  );
};

export default Card;
