import { Card, Row, Col, Stack } from "react-bootstrap";
import Toggle from "#components/theme/Toggle";
import CounterContainer from "./CounterContainer";
import Background from "#components/background/Background";

const Counter = () => {
    return (
        <Background>
            <CounterContainer>
                <Toggle />
                <Card style={{ width: "18rem" }}>
                    <Card.Header>
                        <Card.Title>
                            <Row>
                                <Col>
                                    <Stack className="">
                                        <div>just react.</div>
                                        <div>just counter.</div>
                                    </Stack>
                                </Col>
                                <Col className="d-flex align-items-center ">
                                    <div>ts version.</div>
                                </Col>
                            </Row>
                        </Card.Title>
                    </Card.Header>
                    <Card.Body></Card.Body>
                </Card>
            </CounterContainer>
        </Background>
    );
};

export default Counter;
