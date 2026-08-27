export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" rx="12" fill="var(--color-brass)" />
      <circle cx="24" cy="16" r="1.6" fill="white" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="24"
          y1="16"
          x2="24"
          y2="9"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          transform={`rotate(${deg} 24 16)`}
        />
      ))}
      <path
        d="M24 12v25M17 15h14M15 28c0 5 4 9 9 9s9-4 9-9"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
