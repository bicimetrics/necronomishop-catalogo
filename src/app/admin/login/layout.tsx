import Sidebar from "@/src/components/admin/layout/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#090909]">

      <Sidebar />

      <main className="flex-1 p-10">

        {children}

      </main>

    </div>
  );
}