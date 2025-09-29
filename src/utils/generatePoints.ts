export interface Point {
    x: number;
    y: number;
}

const distance = (a: Point, b: Point): number => {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
};

/**
 * Генерирует до count точек в прямоугольной области с минимальным расстоянием между ними
 * Использует алгоритм Bridson.
 *
 * @param width — ширина области (без учёта margin)
 * @param height — высота области (без учёта margin)
 * @param minDistance — минимальное расстояние между точками
 * @param count — желаемое количество точек
 * @param margin — отступ от краёв области (точки не будут ближе margin к границам)
 * @param maxAttemptsPerActive — макс. попыток генерации вокруг активной точки (по умолчанию 30)
 * @returns Массив точек (может быть меньше count, если не удалось разместить больше)
 */
const generatePoints = (
    width: number,
    height: number,
    minDistance: number,
    count: number,
    margin: number = 0,
    maxAttemptsPerActive: number = 30,
): Point[] => {
    const usableWidth = width - 2 * margin;
    const usableHeight = height - 2 * margin;

    if (usableWidth <= 0 || usableHeight <= 0) {
        console.warn("Область слишком мала из-за margin.");
        return [];
    }

    const theoreticalMax =
        Math.floor(usableWidth / minDistance) *
        Math.floor(usableHeight / minDistance);
    if (theoreticalMax === 0) {
        console.warn(
            "minDistance слишком велик для заданной области и margin.",
        );
        return [];
    }
    const cellSize = minDistance / Math.sqrt(2);
    const gridWidth = Math.ceil(width / cellSize);
    const gridHeight = Math.ceil(height / cellSize);

    const grid: (Point | null)[][] = Array.from({ length: gridWidth }, () =>
        Array(gridHeight).fill(null),
    );

    const activeList: Point[] = [];
    const result: Point[] = [];

    const insertPoint = (p: Point) => {
        const col = Math.floor(p.x / cellSize);
        const row = Math.floor(p.y / cellSize);
        if (col >= 0 && col < gridWidth && row >= 0 && row < gridHeight) {
            grid[col][row] = p;
        }
        activeList.push(p);
        result.push(p);
    };

    const firstPoint: Point = {
        x: margin + Math.random() * usableWidth,
        y: margin + Math.random() * usableHeight,
    };
    insertPoint(firstPoint);

    while (activeList.length > 0 && result.length < count) {
        const randomIndex = Math.floor(Math.random() * activeList.length);
        const current = activeList[randomIndex];

        let found = false;
        for (let i = 0; i < maxAttemptsPerActive; i++) {
            const radius = minDistance + Math.random() * minDistance;
            const angle = Math.random() * 2 * Math.PI;
            const newX = current.x + radius * Math.cos(angle);
            const newY = current.y + radius * Math.sin(angle);

            if (
                newX < margin ||
                newX > width - margin ||
                newY < margin ||
                newY > height - margin
            ) {
                continue;
            }

            const col = Math.floor(newX / cellSize);
            const row = Math.floor(newY / cellSize);

            let tooClose = false;
            for (let dc = -1; dc <= 1 && !tooClose; dc++) {
                for (let dr = -1; dr <= 1 && !tooClose; dr++) {
                    const checkCol = col + dc;
                    const checkRow = row + dr;

                    if (
                        checkCol >= 0 &&
                        checkCol < gridWidth &&
                        checkRow >= 0 &&
                        checkRow < gridHeight
                    ) {
                        const neighbor = grid[checkCol][checkRow];
                        if (
                            neighbor &&
                            distance(neighbor, { x: newX, y: newY }) <
                                minDistance
                        ) {
                            tooClose = true;
                        }
                    }
                }
            }

            if (!tooClose) {
                insertPoint({ x: newX, y: newY });
                found = true;
                break;
            }
        }

        if (!found) {
            activeList.splice(randomIndex, 1);
        }
    }
    return result.slice(0, count);
};

export { generatePoints };
