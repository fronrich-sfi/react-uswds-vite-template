import { OptionHTMLAttributes } from "react";

type Option = {
  label: string;
  value: OptionHTMLAttributes<HTMLOptionElement>["value"];
};

export default Option;
