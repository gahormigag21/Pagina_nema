import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";

import getSession from "@/utils/getSession";
import SessionOptions from "./sessionOptions";

async  function  Navbar02Page () {

  const session = await getSession();

  return (
    <div className="lg:fixed top-0 z-90 w-full">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Logo />

            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />
          </div>

          <div className="flex items-center gap-3">
            < SessionOptions />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar02Page;
