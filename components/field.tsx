import BaseInput, { InputProps, PasswordProps } from "antd/es/input";

const Field = ({ ...props }: InputProps) => {
  return <BaseInput {...props} />;
};

const PasswordField = ({ ...props }: PasswordProps) => {
  return <BaseInput.Password {...props} />;
};

export { Field, PasswordField };
