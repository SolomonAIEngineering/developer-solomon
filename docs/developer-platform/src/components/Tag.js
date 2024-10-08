"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = Tag;
const clsx_1 = __importDefault(require("clsx"));
const variantStyles = {
  small: "",
  medium: "rounded-lg px-1.5 ring-1 ring-inset",
};
const colorStyles = {
  blue: {
    small: "text-blue-500 dark:text-blue-400",
    medium:
      "ring-blue-300 dark:ring-blue-400/30 bg-blue-400/10 text-blue-500 dark:text-blue-400",
  },
  sky: {
    small: "text-sky-500",
    medium:
      "ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400",
  },
  amber: {
    small: "text-amber-500",
    medium:
      "ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400",
  },
  rose: {
    small: "text-red-500 dark:text-rose-500",
    medium:
      "ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400",
  },
  zinc: {
    small: "text-zinc-400 dark:text-zinc-500",
    medium:
      "ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400",
  },
};
const valueColorMap = {
  GET: "blue",
  POST: "sky",
  PUT: "amber",
  DELETE: "rose",
};
function Tag({
  children,
  variant = "medium",
  color = valueColorMap[children] ?? "blue",
}) {
  return (
    <span
      className={(0, clsx_1.default)(
        "font-mono text-[0.625rem] font-semibold leading-6",
        variantStyles[variant],
        colorStyles[color][variant],
      )}
    >
      {children}
    </span>
  );
}
