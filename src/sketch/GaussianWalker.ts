import {Walker} from "./Walker.ts";
import {WalkerColor} from "./WalkerColor.ts";
import p5 from "p5";

export class GaussianWalker implements Walker {
    private readonly possibleSteps = [-1, 0, 1];

    x: number;
    y: number;
    color: WalkerColor;

    constructor(x: number, y: number, color: WalkerColor) {
        this.x = x
        this.y = y
        this.color = color
    }

    updatePosition(p: p5): void {
        const stepSize = p.randomGaussian(10, 4)
        this.x += p.random(this.possibleSteps) * stepSize
        this.y += p.random(this.possibleSteps) * stepSize
    }

    draw(p: p5): void {
        p.stroke(this.color)
        p.strokeWeight(3)
        p.point(this.x, this.y)
    }

}