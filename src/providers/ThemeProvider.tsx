import { useState, useEffect } from "react";
import { ThemeContext, type Theme } from "#context/ThemeContext";
import { storageGet, storageSet } from "#utils/localStorage";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setThemeState] = useState<Theme>(
        storageGet("theme", "light"),
    );

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setThemeState(newTheme);
        storageSet("theme", newTheme);
    };

    useEffect(() => {
        storageSet("theme", theme);
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
