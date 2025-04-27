export default function Title({ color }: { color?: string }) {
  return (
    <div className="flex flex-row items-center">
      <img
        src="/pantone-colors-icon.png"
        alt="PANTONE Colors Icon"
        className="w-8 h-8 mr-3"
      />
      <p
        className="text-[1.6rem] text-zinc-950 font-extrabold inline font-stretch-105% relative mr-3.5 selection:bg-zinc-200 selection:text-zinc-600"
        style={{ lineHeight: "1.75rem", color: color || "#09090b" }}
      >
        PANTONE
        <span className="font-bold text-sm absolute right-[-9.5px] top-[0.5px]">
          &reg;
        </span>
      </p>
      <p
        className={`text-[1.6rem] font-bold inline opacity-75 selection:bg-zinc-200 selection:text-zinc-600`}
        style={{ lineHeight: "1.75rem", color: color || "#09090b" }}
      >
        Colors
      </p>
    </div>
  );
}
