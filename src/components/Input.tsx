import React, { useId, forwardRef } from "react";

interface propI {
  label?: string;
  type?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement,propI>(function Input(
  { label, type = "text", className = "", ...props }: propI,
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1 text-gray-200">{label}</label>}
      <input className={`px-4 py-2 rounded bg-gray-400 w-full ${className}`} type={type} {...props} id={id} ref={ref} />
    </div>
  );
});

export default Input;
