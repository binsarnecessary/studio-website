export default function Logo({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Studio Web"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="96" fill="#f6f4ef" stroke="#1f2430" strokeWidth="3" />
      <text
        x="100"
        y="90"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="36"
        fontWeight="600"
        letterSpacing="4"
        fill="#1f2430"
      >
        STUDIO
      </text>
      <line x1="52" y1="114" x2="76" y2="114" stroke="#1f2430" strokeWidth="2" />
      <line x1="124" y1="114" x2="148" y2="114" stroke="#1f2430" strokeWidth="2" />
      <text
        x="100"
        y="126"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="30"
        fontWeight="600"
        letterSpacing="3"
        fill="#1f2430"
      >
        WEB
      </text>
      <text
        x="100"
        y="152"
        textAnchor="middle"
        fontFamily="'Inter', system-ui, sans-serif"
        fontSize="8"
        fontWeight="500"
        letterSpacing="0.6"
        fill="#1f2430"
      >
        WEBSITE • DESIGN • SOLUTION
      </text>
    </svg>
  );
}
