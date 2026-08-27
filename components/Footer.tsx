export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white/60 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="font-display text-white text-base tracking-wide">
            HARBOR MASTER MARINE
          </div>
          <p className="text-sm mt-2 max-w-sm">
            Full-service boat repair and maintenance, based in Dunedin,
            serving Pinellas County.
          </p>
        </div>
        <div className="text-sm space-y-1">
          <div>Dunedin, FL</div>
          <a href="tel:+17275550147" className="hover:text-white transition-colors block">
            (727) 555-0147
          </a>
          <a
            href="mailto:service@harbormastermarine.com"
            className="hover:text-white transition-colors block"
          >
            service@harbormastermarine.com
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-5 text-xs flex flex-col sm:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Harbor Master Marine. All rights reserved.</span>
          <span>Site by Vaylo Studios</span>
        </div>
      </div>
    </footer>
  );
}
