"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SunIcon, MoonIcon } from "lucide-react";

function DarkModeButton() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const htmlElement = document.documentElement;
        if (isDarkMode) {
            htmlElement.classList.add("dark");
        } else {
            htmlElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    return (
        <Button
            variant="outline"
            size="icon"
            className="hidden sm:inline-flex"
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label="Toggle dark mode"
        >
            {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </Button>
    );
}

export default DarkModeButton;