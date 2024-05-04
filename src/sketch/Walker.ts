import p5 from "p5";

export interface Walker {
    x: number
    y: number
    updatePosition: (p: p5) => void
}