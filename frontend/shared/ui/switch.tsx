import * as React from "react";
import { cn } from "@shared/utils/cn";

export interface SwitchProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  /** Controlled state. If provided, component is controlled */
  checked?: boolean;
  /** Uncontrolled default value */
  defaultChecked?: boolean;
  /** Fires when value toggles */
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked = false,
      onCheckedChange,
      className,
      id,
      disabled,
      ...rest
    },
    ref
  ) => {
    const isControlled = checked !== undefined;
    const [internal, setInternal] = React.useState<boolean>(defaultChecked);
    const isOn = isControlled ? !!checked : internal;

    const toggle = () => {
      if (disabled) return;
      if (!isControlled) setInternal((v) => !v);
      onCheckedChange?.(!isOn);
    };

    return (
      <button
        ref={ref}
        id={id}
        type="button"
        role="switch"
        aria-checked={isOn}
        aria-disabled={disabled}
        onClick={toggle}
        disabled={disabled}
        className={cn(
          "inline-flex h-5 w-9 items-center rounded-full transition",
          isOn ? "bg-sky-600" : "bg-slate-300",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...rest}
      >
        <span
          className={cn(
            "mx-0.5 h-4 w-4 rounded-full bg-white transition",
            isOn ? "translate-x-4" : "translate-x-0"
          )}
        />
      </button>
    );
  }
);
Switch.displayName = "Switch";

export { Switch };
