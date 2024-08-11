import { auth, signOut } from "@/auth";
import LeftSideBar from "@/components/admin/layouts/LeftSideBar";

export default async function Dashboard() {
  const session = await auth();
  return (
    <>
      <LeftSideBar />
    </>
  );
}
