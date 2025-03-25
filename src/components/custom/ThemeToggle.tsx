"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import * as Tooltip from "@radix-ui/react-tooltip";
import {TooltipArrow, TooltipPortal} from "@radix-ui/react-tooltip";

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    // Ensure component only renders on client
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevent hydration mismatch

    // Cycle through themes (light → dark → system)
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        <Tooltip.Provider>
            <Tooltip.Root>
                <Tooltip.Trigger asChild>
                    <Button
                        className="relative p-2 rounded-lg hover:cursor-pointer"
                        onClick={toggleTheme}
                        variant="soft"
                    >
                        {/* Show SunIcon if dark mode is active, otherwise show MoonIcon */}
                        {theme === "light" ? (
                            <MoonIcon className="h-6 w-6 transition-all" />
                        ) : (
                            <SunIcon className="h-6 w-6 transition-all" />
                        )}
                    </Button>
                </Tooltip.Trigger>
                <TooltipPortal>
                    <Tooltip.Content className="tooltip-content">
                        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
                        <Tooltip.Arrow className="tooltip-arrow" />
                    </Tooltip.Content>
                </TooltipPortal>
            </Tooltip.Root>
        </Tooltip.Provider>
    );
}
