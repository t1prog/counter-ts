import { useTheme } from "#context/ThemeContext";
import MoonIcon from "#svg/moon.svg?react";
import SunIcon from "#svg/sun.svg?react";
import styles from "./toggle.module.scss";
import clsx from "clsx";
import { Col, Row } from "react-bootstrap";

const Toggle = () => {
    const { theme, toggleTheme } = useTheme();

    const toggleHandler = () => {
        toggleTheme();
    };

    return (
        <div
            className={clsx(styles.toggle, "d-grid position-relative")}
            onClick={toggleHandler}
            data-theme={theme}
        >
            <Row>
                <Col className="z-1">
                    <SunIcon
                        fill="none"
                        className={clsx(styles.img, {
                            [styles.img__active]: theme === "light",
                        })}
                    />
                </Col>
                <Col className="z-1">
                    <MoonIcon
                        fill="none"
                        className={clsx(styles.img, {
                            [styles.img__active]: theme === "dark",
                        })}
                    />
                </Col>
            </Row>
            <div
                className={clsx(styles.circel, {
                    [styles.circel__active]: theme === "dark",
                })}
            ></div>
        </div>
    );
};

export default Toggle;
