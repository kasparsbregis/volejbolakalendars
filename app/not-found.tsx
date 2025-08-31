import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020013] text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#BEF992] mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Lapa nav atrasta</h2>
        <p className="text-gray-300 mb-8">Lapa, kuru meklējat, neeksistē</p>
        <Link
          href="/"
          className="inline-block bg-[#BEF992] text-[#2B1F31] px-6 py-3 rounded-md font-semibold hover:bg-[#a9dd81] transition-colors duration-200"
        >
          Uz Sākumu
        </Link>
      </div>
    </div>
  );
}
