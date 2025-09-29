import { memo, useMemo } from "react";
import styles from "./background.module.scss";
import StarIcon from "#svg/star.min.svg?react";
import type { Point } from "#utils/generatePoints";

export interface BackgroundStarProps {
    point: Point;
}

const BackgroundStar = ({ point }: BackgroundStarProps) => {
    const { size, rotation, opacity, shouldTwinkle, seed } = useMemo(() => {
        const baseSize = 20 + Math.random() * 100;
        const rotation = Math.random() * 360;
        const opacity = Math.max(0.3, Math.min(1, baseSize / 120));
        const shouldTwinkle = baseSize < 60;

        const seed = Math.random();

        return {
            size: baseSize,
            rotation,
            opacity,
            shouldTwinkle,

            seed,
        };
    }, []);

    const classNames = [styles.star, shouldTwinkle ? styles.twinkle : ""]
        .filter(Boolean)
        .join(" ");

    return (
        <StarIcon
            className={classNames}
            fill="none"
            style={
                {
                    left: `${point.x}px`,
                    top: `${point.y}px`,
                    width: `${size}px`,
                    height: `${size}px`,
                    transform: `rotate(${rotation}deg)`,
                    opacity: opacity,
                    willChange: "transform, opacity",
                    "--seed": seed,
                } as React.CSSProperties
            }
        />
    );
};

export default memo(BackgroundStar);
