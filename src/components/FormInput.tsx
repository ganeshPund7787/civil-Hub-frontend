import React from "react";

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}

const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  type = "text",
}) => {
  return (
    <FormField
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormMessage className="text-red-600" />
          <FormControl>
            <Input
              placeholder={placeholder}
              className="rounded-[5px] text-slate-300"
              autoFocus
              type={type}
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FormInput;
