"use client";
import {useSession} from "next-auth/react";

export default function DashboardPage() {
    const { data: session, status } = useSession();

    return (
        <div>
            <h1>Dashboard</h1>
            {session ? (
                <div>
                    <p>Bienvenido, {session.user?.name}</p>
                    <p>Email: {session.user?.email}</p>
                    <p>Estado de la sesión: {status}</p>
                </div>
            ) : (
                <>
                    <p>No estás autenticado</p>
                    {status === "loading" && <p>Cargando...</p>}
                </>
                
            )}
        </div>
    );
}