import type React from "react";
import { Container } from "react-bootstrap";
import style from "./counter.module.scss";

const CounterContainer: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <Container fluid="sm" className={style.container}>
            {children}
        </Container>
    );
};

export default CounterContainer;
