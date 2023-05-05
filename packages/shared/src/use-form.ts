import { ChangeEvent, useState } from "react";

export const useForm = <V extends Record<string, string>>(
  initialValues?: V
) => {
  const [values, setValues] = useState<V | {}>(initialValues || {});

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  return {
    values: values as V,
    onChange,
  };
};
