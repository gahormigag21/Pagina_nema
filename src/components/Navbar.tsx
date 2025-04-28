import Link from "next/link";
import { getServerSession } from "next-auth";
import LogoutButton from "./LogoutButton"; // Import the new Client Component

async function Navbar() {
    const session = await getServerSession();
    console.log(session);

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-white text-lg font-bold">
                    Nema
                </Link>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="text-white hover:text-gray-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard" className="text-white hover:text-gray-300">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/login" className="text-white hover:text-gray-300">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link href="/register" className="text-white hover:text-gray-300">
                            Registro
                        </Link>
                    </li>
                    <li>
                        <LogoutButton /> {/* Use the Client Component for Logout */}
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Navbar;