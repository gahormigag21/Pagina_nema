"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [error, setError] = useState<string | null>(null);
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
        router.push("/dashboard"); // Redirect to dashboard
      } else {
        setError("Credenciales inválidas"); // Show error message
      }
    } catch (error) {
      setError("Error:"+error); // Show error message
    }
  };

  return (
    <div>
      <h1>Pagina de inicio de sesión</h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-96 mx-auto mt-10">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Inserte su email"
          name="email"
          className="bg-zinc-100 px-4 py-2 block mb-2"
        />
        <input
          type="password"
          placeholder="Inserte su contraseña"
          name="password"
          className="bg-zinc-100 px-4 py-2 block mb-2"
        />
        <button type="submit" className="bg-indigo-500 px-4 py-2">
          Iniciar sesión
        </button>
        <p>
          ¿No tienes cuenta? <a href="/register">Regístrate</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;