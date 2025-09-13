import * as React from "react";
import { cn } from "@shared/utils/cn";

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm outline-none placeholder:text-slate-400 focus:border-slate-300 focus:ring-2 focus:ring-slate-200",
        className
      )}
      {...props}
    />
  )
);

TextInput.displayName = "TextInput";

export { TextInput };