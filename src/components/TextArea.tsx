import React, { useId, forwardRef } from "react";

interface propI {
  label?: string;
  className?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement,propI>(function TextArea(
  { label, className = "", ...props }: propI,
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1 text-gray-200">{label}</label>}
      <textarea className={`px-4 py-2 rounded bg-gray-400 w-full ${className}`} {...props} id={id} ref={ref} />
    </div>
  );
});

export default TextArea;


