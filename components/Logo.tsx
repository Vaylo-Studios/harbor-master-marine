import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/shark-mark.png"
      alt="Harbor Master Marine"
      width={957}
      height={390}
      className={`object-contain w-auto ${className}`}
    />
  );
}

export function LogoFull({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-full.png"
      alt="Harbor Master Marine, Marine Electrical Repair"
      width={1065}
      height={969}
      className={`object-contain w-auto ${className}`}
    />
  );
}
