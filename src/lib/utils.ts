import toastColorBadge from "@/components/TaostColorBadge";
import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTextColor(hex: string): "black" | "white" {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "black" : "white";
}

export function copyDataToClipboard(data: string, colorHex?: string) {
  navigator.clipboard.writeText(data).then(
    () => {
      toast("Color copied to clipboard!", {
        style: {
          width: "auto",
          maxWidth: "300px",
          color: colorHex || "#09090b",
        },
        icon: toastColorBadge(colorHex),
      });
    },
    (error) => {
      console.error("Failed to copy color data: ", error);
    },
  );
}
