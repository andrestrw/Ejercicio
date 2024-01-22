import BaseInput, { InputProps, PasswordProps } from "antd/es/input";

const Field = ({ ...props }: InputProps) => {
  return <BaseInput {...props} className="w-60" />;
};

const PasswordField = ({ ...props }: PasswordProps) => {
  return <BaseInput.Password {...props} className="w-60" />;
};

export { Field, PasswordField };
