import { Color } from "@/types/Color";
import ColorCard from "./ColorCard";

type Props = {
  colors: Color[];
};

export default function ColorList({ colors }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 justify-center">
      {colors.map((color) => (
        <ColorCard key={color.code} color={color} />
      ))}
    </div>
  );
}
