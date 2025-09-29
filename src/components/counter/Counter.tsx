import styles from "./counter.module.scss";
import PlusIcon from "#svg/plus.svg?react";
import MinusIcon from "#svg/minus.svg?react";
import { storageGet, storageSet } from "#utils/localStorage";
import clsx from "clsx";
import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState<number>(storageGet("count", 0));

    useEffect(() => {
        storageSet("count", count);
    }, [count]);

    const increment = () => setCount((prev) => prev + 1);

    const decrement = () => setCount((prev) => prev - 1);

    const reset = () => setCount(0);

    const formattedCount = (count: number): string => {
        if (count >= 0) {
            return String(count).padStart(4, "0");
        } else {
            return "-" + String(-count).padStart(4, "0");
        }
    };

    return (
        <div className={styles.container}>
            <div className="d-flex align-items-center justify-content-center">
                <div className={styles.count}>{formattedCount(count)}</div>
            </div>
            <div className={styles.btnContainer}>
                <button
                    className={clsx(styles.btn, "align-self-start")}
                    onClick={decrement}
                >
                    <MinusIcon fill="none" className={styles.btnImg} />
                </button>
                <button
                    className={clsx(styles.btn, "align-self-end")}
                    onClick={increment}
                >
                    <PlusIcon fill="none" className={styles.btnImg} />
                </button>
            </div>
            <button className={clsx(styles.btn, styles.reset)} onClick={reset}>
                <PlusIcon fill="none" className={styles.btnImg} />
            </button>
        </div>
    );
};

export default Counter;
