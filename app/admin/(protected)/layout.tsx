import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";
import Sidebar from "@/components/admin/layout/Sidebar";

interface Props {
  children: ReactNode;
}

export default async function AdminLayout({
  children,
}: Props) {

  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/admin/login");
  }

  return (
    <div className="flex min-h-screen bg-[#090909]">

      <Sidebar
        user={{
          email: user.email ?? "",
          name:
            user.user_metadata?.name ??
            "Administrador",
        }}
      />

      <main className="flex-1 p-10">

        {children}

      </main>

    </div>
  );

}