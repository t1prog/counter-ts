import { Card, Row, Col, Stack } from "react-bootstrap";
import Toggle from "#components/theme/Toggle";
import CounterContainer from "./CounterContainer";
import Background from "#components/background/Background";

const Counter = () => {
    return (
        <Background>
            <CounterContainer>
                <Toggle />
            </CounterContainer>
        </Background>
    );
};

export default Counter;
