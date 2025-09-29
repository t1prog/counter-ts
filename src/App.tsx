import Counter from "#components/counter/Counter";
import { ThemeProvider } from "#context/ThemeContext";

function App() {
    return (
        <ThemeProvider>
            <Counter />
        </ThemeProvider>
    );
}

export default App;
