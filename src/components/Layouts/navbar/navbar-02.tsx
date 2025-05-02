import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import SessionOptions from "./sessionOptions";
import getSession from "@/utils/getSession";
import DarkModeButton from "./darkModeButton"; 

async function Navbar02Page() {
  const session = await getSession(); // Fetch session data

  return (
    <div className="lg:fixed top-0 z-90 w-full">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo />
            {/* Desktop Menu */}
            <NavMenu className="hidden lg:block" />
          </div>
          <div className="flex items-center gap-3">
            <SessionOptions session={session} /> {/* Pass session as prop */}
            <DarkModeButton /> {/* Placeholder for dark mode toggle */}
            {/* Mobile Menu */}
            <div className="lg:hidden">
              <NavigationSheet aria-describedby={"Productos y Servicios Nema Ingenieria"}/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar02Page;
