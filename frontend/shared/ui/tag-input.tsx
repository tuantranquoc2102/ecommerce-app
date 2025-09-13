// import * as React from "react";
// import { X, Plus } from "lucide-react";
// import { cn } from "@shared/utils/cn";
// import { TextInput } from "./text-input";
// import { Button } from "./button";

// export interface TagInputProps {
//   value: string[];
//   onChange: (tags: string[]) => void;
//   placeholder?: string;
// }

// export function TagInput({ value, onChange, placeholder }: TagInputProps) {
//   const [text, setText] = React.useState("");

//   const add = () => {
//     const t = text.trim();
//     if (!t) return;
//     if (!value.includes(t)) onChange([...value, t]);
//     setText("");
//   };

//   return (
//     <div>
//       <div className="flex gap-2">
//         <TextInput
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           placeholder={placeholder}
//         />
//         <Button type="button" className="gap-1" onClick={add}>
//           <Plus className="h-4 w-4" /> Add
//         </Button>
//       </div>
//       {!!value.length && (
//         <div className="mt-2 flex flex-wrap gap-2">
//           {value.map((t) => (
//             <span
//               key={t}
//               className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs"
//             >
//               {t}
//               <button
//                 className="text-slate-500 hover:text-slate-700"
//                 onClick={() => onChange(value.filter((x) => x !== t))}
//               >
//                 <X className="h-3.5 w-3.5" />
//               </button>
//             </span>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

import * as React from "react";
import { X, Plus } from "lucide-react";
import { TextInput } from "./text-input";
import { Button } from "./button";
import { cn } from "@shared/utils/cn";

export interface TagInputProps {
  /** Controlled value */
  value?: string[];
  /** Uncontrolled default value */
  defaultValue?: string[];
  onChange?: (tags: string[]) => void;
  placeholder?: string;
  className?: string;
}

export function TagInput({
  value,
  defaultValue = [],
  onChange,
  placeholder,
  className,
}: TagInputProps) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState<string[]>(defaultValue);
  const [text, setText] = React.useState("");

  const tags = isControlled ? (value as string[]) : internal;

  const update = (next: string[]) => {
    if (!isControlled) setInternal(next);
    onChange?.(next);
  };

  const add = (raw?: string) => {
    const t = (raw ?? text).trim();
    if (!t) return;
    if (tags.includes(t)) return;
    update([...tags, t]);
    setText("");
  };

  const remove = (t: string) => {
    update(tags.filter((x) => x !== t));
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      add();
    } else if (e.key === "Backspace" && !text) {
      // xoá tag cuối khi input trống
      remove(tags[tags.length - 1]);
    }
  };

  return (
    <div className={cn(className)}>
      <div className="flex gap-2">
        <TextInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={placeholder}
        />
        <Button type="button" className="gap-1" onClick={() => add()}>
          <Plus className="h-4 w-4" /> Add
        </Button>
      </div>

      {!!(tags?.length ?? 0) && (
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-xs"
            >
              {t}
              <button
                type="button"
                className="text-slate-500 hover:text-slate-700"
                onClick={() => remove(t)}
                aria-label={`Remove ${t}`}
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
}