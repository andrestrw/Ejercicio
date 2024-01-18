import BaseButton, { ButtonProps } from "antd/es/button";

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <BaseButton
      {...props}
      style={{ backgroundColor: "white", color: "#1a237e" }}
      className="text-lg leading-3 "
    >
      {children}
    </BaseButton>
  );
};

export default Button;
