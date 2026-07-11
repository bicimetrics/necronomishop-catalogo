import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

interface Props {
  children: ReactNode;
}

export default async function AdminLayout({
  children,
}: Props) {

  const supabase =
    await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {

    redirect("/admin/login");

  }

  return <>{children}</>;

}