import { ThemeProvider } from "#providers/ThemeProvider";

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};
