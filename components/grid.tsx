type GridProps = {
  children: JSX.Element[] | JSX.Element;
  colsLg?: number;
  colsMd?: number;
  gap?: number;
};

{
  /* <div className="grid lg:grid-cols-5  md:grid-cols-2 grid-cols-1 gap-6 "></div> */
}

const Grid = ({ children, colsLg = 5, colsMd = 2, gap = 6 }: GridProps) => {
  return (
    <div
      className={`grid lg:grid-cols-${colsLg}  md:grid-cols-${colsMd} grid-cols-1 gap-6 `}
    >
      {children}
    </div>
  );
};

export default Grid;
