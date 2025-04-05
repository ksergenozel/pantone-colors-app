import { Card, CardContent } from "@/components/ui/card";
import { copyDataToClipboard, getTextColor } from "@/lib/utils";
import type { Color } from "@/types/Color";
import { useState } from "react";

type Props = {
  color: Color;
};

export default function ColorCard({ color }: Props) {
  const textColor = getTextColor(color.hex);

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className={
        "w-[208px] flex-col m-0 p-0 gap-0 rounded-none shadow-lg border-none hover:shadow-2xl hover:scale-105 transition-all duration-200 ease-in cursor-grab"
      }
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => copyDataToClipboard(JSON.stringify(color), color.hex)}
    >
      <div
        className="w-full h-[184px] p-3.5 flex flex-col justify-end items-start relative"
        style={{
          backgroundColor: color.hex,
          color: textColor,
          letterSpacing: "0.025em",
        }}
      >
        <div
          className={`transition-opacity duration-200 ease-in ${
            isHovered ? "opacity-25" : "opacity-0"
          }`}
        >
          <p className="text-[0.825rem] font-mono font-semibold absolute top-3.5 left-3.5">
            {color.collection}
          </p>
          <p className="text-[0.825rem] font-mono font-semibold">
            HEX: {color.hex}
          </p>
          <p className="text-[0.825rem] font-mono font-semibold">
            RGB: {color.r},{color.g},{color.b}
          </p>
          <p className="text-[0.825rem] font-mono font-semibold">
            CMYK: {color.c},{color.m},{color.y},{color.k}
          </p>
        </div>
      </div>

      <CardContent className="w-full flex-col justify-center items-start m-0 p-3.5">
        <p
          className="text-[1.6rem] text-zinc-950 font-extrabold inline font-stretch-105% relative"
          style={{ lineHeight: "1.75rem" }}
        >
          PANTONE
          <span className="font-bold text-sm absolute right-[-9.5px] top-[1.5px]">
            &reg;
          </span>
        </p>

        <p className="font-normal text-lg text-muted-foreground">
          {color.code}
        </p>

        <p
          className="text-lg font-semibold text-zinc-700/97.5 line-clamp-2 overflow-hidden break-word h-[2.7rem] mt-1"
          style={{ lineHeight: "1.35rem" }}
        >
          {color.name}
        </p>
      </CardContent>
    </Card>
  );
}
