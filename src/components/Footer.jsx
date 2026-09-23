export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-10 py-6">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col text-center md:text-left">
          <p className="font-[Montserrat] text-xs font-bold text-on-surface uppercase tracking-wider">Caterpillar Field Safety & Compliance Standard</p>
          <p className="text-[13px] text-on-surface-variant mt-1">Mandatory operator pre-shift inspection guidelines compliant with ISO 5010 and OSHA 1926.602 standards.</p>
        </div>
        <div className="font-[Montserrat] text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center md:text-right">
          &copy; 2024 Caterpillar Inc. All rights reserved. Heavy Equipment Operations.
        </div>
      </div>
    </footer>
  )
}
