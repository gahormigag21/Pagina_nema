"use client";

import { Button } from "@/components/ui/button";
import { SunIcon } from "lucide-react";
import { useRouter } from "next/navigation";

async function SessionOptions() {
  const router = useRouter();

  return (
    <>
      <Button
        variant="outline"
        className="hidden sm:inline-flex"
        onClick={() => router.push("/register")}
      >
        Registrarse
      </Button>
      <Button onClick={() => router.push("/login")}>Iniciar Sesión</Button>
      <Button size="icon" variant="outline">
        <SunIcon />
      </Button>
    </>
  );
}
export default SessionOptions;
