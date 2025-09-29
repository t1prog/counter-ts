import "react";

declare module "react" {
    interface CSSProperties {
        "--seed"?: number;
    }
}
