"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      if (res?.ok) {
        router.push("/dashboard");
      } else {
        setError("Credenciales inválidas");
      }
    } catch (error) {
      setError("Error:" + error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid gap-3">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          placeholder="Inserte su email"
          name="email"
          className="px-4 py-2 block rounded-md border focus:ring-2"
        />
      </div>
      <div className="grid gap-3 relative">
        <Label htmlFor="password">Password</Label>
        <a
          href="/forgot-password"
          className="ml-auto text-sm underline-offset-4 hover:underline absolute top-0 right-0"
        >
          ¿Olvidaste tu contraseña?
        </a>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Inserte su contraseña"
          name="password"
          className="px-4 py-2 block rounded-md border focus:ring-2 w-full"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-9 text-gray-500"
        >
          {showPassword ? <EyeIcon className="w-5 h-5" /> : <EyeOffIcon className="w-5 h-5" />}
        </button>
      </div>
      <Button type="submit" className="px-4 py-2 rounded-md">
        Iniciar sesión
      </Button>
      <div className="flex justify-end mt-4 text-sm">
        <a href="/register" className="hover:underline">
          ¿No tienes cuenta? Regístrate
        </a>
      </div>
    </form>
  );
}
