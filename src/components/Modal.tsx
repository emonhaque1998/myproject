"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import ClientArea from "./frontend/auth/ClientArea";

type Props = { children: ReactNode };

export default function Modal() {
  const [modalIsOpen, setIsOpen] = useState(true);
  const router = useRouter();

  function closeModal() {
    router.back();
  }

  return (
    <div>
      <ClientArea closeModal={closeModal} />
    </div>
  );
}
