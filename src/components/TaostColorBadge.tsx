import { JSX } from "react";

const toastColorBadge = (color?: string): JSX.Element => (
  <div
    className="w-4.5 h-4.5 rounded-full"
    style={{ backgroundColor: color || "transparent" }}
  />
);

export default toastColorBadge;
