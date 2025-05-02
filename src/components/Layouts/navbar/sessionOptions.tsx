"use client";

import { Button } from "@/components/ui/button";
import { SunIcon } from "lucide-react";
import { useRouter } from "next/navigation";

function SessionOptions({ session }: { session: any }) {
  const router = useRouter();
  console.log("Session Options", session);

  return (
    <>
      {!session ? (
        <>
          <Button
            variant="outline"
            className="hidden sm:inline-flex"
            onClick={() => router.push("/register")}
          >
            Registrarse
          </Button>
          <Button onClick={() => router.push("/login")}>Iniciar Sesión</Button>
        </>
      ) : (
        <Button onClick={() => router.push("/profile")}>Perfil</Button>
      )}
      <Button size="icon" variant="outline">
        <SunIcon />
      </Button>
    </>
  );
}

export default SessionOptions;
