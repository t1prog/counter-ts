import Background from "#components/background/Background";
import Counter from "#components/counter/Counter";
import Toggle from "#components/theme/Toggle";
import styles from "./app.module.scss";
import clsx from "clsx";
import { Container } from "react-bootstrap";

const App = () => {
    return (
        <Background>
            <Container fluid={"sm"} className={styles.container}>
                <div
                    className={clsx(styles.flexCenter, "flex-column", "gap-3")}
                >
                    <Toggle />
                    <a
                        className={clsx(styles.title, "z-1")}
                        href="https://github.com/t1prog/counter-ts"
                        target="_blank"
                    >
                        <span>COUNTER-TS</span>
                    </a>
                    <Counter />
                </div>
            </Container>
        </Background>
    );
};

export default App;
