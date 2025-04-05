export default function Title({ color }: { color?: string }) {
  return (
    <div className="flex flex-row">
      <p
        className="text-[1.6rem] text-shadow-zinc-950 font-extrabold inline font-stretch-105% relative mr-3.5"
        style={{ lineHeight: "1.75rem", color: color || "#09090b" }}
      >
        PANTONE
        <span className="font-bold text-sm absolute right-[-9.5px] top-[0.5px]">
          &reg;
        </span>
      </p>
      <p
        className={`text-[1.6rem] font-bold inline opacity-75`}
        style={{ lineHeight: "1.75rem", color: color || "#09090b" }}
      >
        Colors
      </p>
    </div>
  );
}
