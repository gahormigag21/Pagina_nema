"use client";

import { Button } from "@/components/ui/button";
import { SunIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { NavUser } from "../dropdownUser";

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
        <NavUser user={session.user} />
      )}
      
    </>
  );
}

export default SessionOptions;
