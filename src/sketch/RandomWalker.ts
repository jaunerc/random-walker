import {Walker} from "./Walker.ts";
import p5 from "p5";

export class RandomWalker implements Walker {
    private readonly possibleSteps = [-1, 0, 1];

    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }

    updatePosition(p: p5): void {
        this.x += p.random(this.possibleSteps)
        this.y += p.random(this.possibleSteps)
    }
}
