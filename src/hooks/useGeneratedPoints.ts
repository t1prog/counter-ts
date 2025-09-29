import { useMemo } from "react";
import { generatePoints, type Point } from "#utils/generatePoints";

type Size = { w: number; h: number };

const useGeneratedPoints = (
    size: Size | null,
    minDistance: number,
    count: number,
    margin: number,
): Point[] => {
    return useMemo(() => {
        if (!size) return [];
        return generatePoints(size.w, size.h, minDistance, count, margin);
    }, [size, minDistance, count, margin]);
};

export default useGeneratedPoints;
