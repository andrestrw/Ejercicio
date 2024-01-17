import BaseButton, { ButtonProps } from "antd/es/button";

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <BaseButton {...props} style={{ backgroundColor: "red" }}>
      {children}
    </BaseButton>
  );
};

export default Button;
