import React from "react";
import { useController, Control } from "react-hook-form";

interface FormRadioGroupProps {
  name: string;
  label: string;
  options: { value: string; label: string }[];
  control: Control<any>;
}

const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
  name,
  label,
  options,
  control,
}) => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-black">{label}</label>
      <div className="flex space-x-4">
        {options.map((option) => (
          <label key={option.value} className="inline-flex items-center">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              onBlur={onBlur}
              className="form-radio text-black"
            />
            <span className="ml-2">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
};

export default FormRadioGroup;
