import Navbar from "../components/Navbar";

export default function TurniriLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#020013]">
      <Navbar />
      {children}
    </div>
  );
}
