type CenteredProps = {
  children: JSX.Element[] | JSX.Element;
};

const Centered = ({ children }: CenteredProps) => {
  return <main className="container mx-auto py-12 px-8">{children}</main>;
};

export default Centered;
