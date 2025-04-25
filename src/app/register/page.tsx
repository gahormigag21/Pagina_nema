"use client";
import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


function RegisterPage() {

    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post("/api/auth/signup", data);
            console.log(response); // Manejar la respuesta del servidor
            const res = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            });
            if(res?.ok) {
                router.push("/dashboard"); // Redirigir a la página de dashboard
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.error || "Ocurrió un error inesperado"); // Mostrar el error del servidor
            }
        }
    };


    return (
        <div>
            <h1>Pagina de registro</h1>
            <form onSubmit={handleSubmit} className="flex flex-col w-96 mx-auto mt-10">
                {error && <p className="text-red-500">{error}</p>}
                <input
                    type="text"
                    placeholder="Inserte su nombre"
                    name="name"
                    className="bg-zinc-100 px-4 py-2 block mb-2"
                />
                <input
                    type="email"
                    placeholder="Inserte su email"
                    name="email"
                    className="bg-zinc-100 px-4 py-2 block mb-2"
                />
                <input
                    type="new-password"
                    placeholder="Inserte su contraseña"
                    name="password"
                    className="bg-zinc-100 px-4 py-2 block mb-2"
                />
                <input
                    type="new-password"
                    placeholder="Confirme su contraseña"
                    name="confirmPassword"
                    className="bg-zinc-100 px-4 py-2 block mb-2"
                />
                <button type="submit" className="bg-indigo-500 px-4 py-2">
                    Registrar
                </button>
                <p>
                    ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
                </p>
            </form>
        </div>
    );
}

export default RegisterPage;
