"use client";

import { signOut } from "next-auth/react";

function LogoutButton() {
    return (
        <button
            onClick={() => {
                signOut({ callbackUrl: "/" });
            }}
            className="text-white hover:text-gray-300"
        >
            Logout
        </button>
    );
}

export default LogoutButton;
