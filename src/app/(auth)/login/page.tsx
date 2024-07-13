import ClientAreaStatic from "@/components/frontend/auth/ClientAreaStatic";

export default function login() {
  return (
    <>
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-screen">
        <div className="w-full flex justify-center items-center h-screen">
          <div className="w-1/2 bg-white rounded-xl bg-opacity-60">
            <ClientAreaStatic />
          </div>
        </div>
      </div>
    </>
  );
}
