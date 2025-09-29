import styles from "./background.module.scss";
import useGeneratedPoints from "#hooks/useGeneratedPoints";
import { useRef, useEffect, useState, useMemo } from "react";
import debounce from "#utils/debounce";
import clsx from "clsx";
import BackgroundStar from "./BackgroundStar";

type BackgroundProps = {
    children: React.ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [containerSize, setContainerSize] = useState<{
        w: number;
        h: number;
    } | null>(null);

    const updateSize = useMemo(
        () =>
            debounce(() => {
                const container = containerRef.current;
                if (container) {
                    setContainerSize({
                        w: container.offsetWidth,
                        h: container.offsetHeight,
                    });
                }
            }, 400),
        [],
    );

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        updateSize();

        const resizeObserver = new ResizeObserver(() => {
            updateSize();
        });

        resizeObserver.observe(container);

        return () => {
            resizeObserver.disconnect();
        };
    }, [updateSize]);

    // Как долго я это делал.. И ради чего?
    const points = useGeneratedPoints(containerSize, 200, 35, 40);

    return (
        <div ref={containerRef} className={clsx(styles.container)}>
            {points.map((point, index) => (
                <BackgroundStar key={index} point={point} />
            ))}
            {children}
        </div>
    );
};

export default Background;
