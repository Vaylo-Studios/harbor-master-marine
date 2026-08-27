export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="1.6" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="24"
          y1="24"
          x2="24"
          y2="6.5"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          transform={`rotate(${deg} 24 24)`}
        />
      ))}
      <path
        d="M24 14.5v19M18 17h12M17 30c0 4 3 7 7 7s7-3 7-7"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
