"use client";

import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await axios.post("/api/auth/signup", data);
            console.log(response);
            const res = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            });
            if (res?.ok) {
                router.push("/dashboard");
            }
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.response?.data.error || "Ocurrió un error inesperado");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="grid gap-3">
                <Label htmlFor="name">Nombre</Label>
                <Input
                    type="text"
                    placeholder="Inserte su nombre"
                    name="name"
                    className="px-4 py-2 block rounded-md border focus:ring-2"
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                    type="email"
                    placeholder="Inserte su email"
                    name="email"
                    className="px-4 py-2 block rounded-md border focus:ring-2"
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="password">Contraseña</Label>
                <Input
                    type="password"
                    placeholder="Inserte su contraseña"
                    name="password"
                    className="px-4 py-2 block rounded-md border focus:ring-2"
                />
            </div>
            <div className="grid gap-3">
                <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                <Input
                    type="password"
                    placeholder="Confirme su contraseña"
                    name="confirmPassword"
                    className="px-4 py-2 block rounded-md border focus:ring-2"
                />
            </div>
            <Button type="submit" className="px-4 py-2 rounded-md">
                Registrar
            </Button>
            <div className="flex justify-end mt-4 text-sm">
                <a href="/login" className="hover:underline">
                    ¿Ya tienes cuenta? Inicia sesión
                </a>
            </div>
        </form>
    );
}
