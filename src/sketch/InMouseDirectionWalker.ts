import {Walker} from "./Walker.ts";
import {WalkerColor} from "./WalkerColor.ts";
import p5 from "p5";

export class InMouseDirectionWalker implements Walker {
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
        const inMouseDirection = p.random() > 0.5
        if (inMouseDirection) {
            this.makeStepInDirectionToTheMousePosition(p.mouseX, p.mouseY)
        } else {
            this.x += p.random(this.possibleSteps)
            this.y += p.random(this.possibleSteps)
        }
    }

    makeStepInDirectionToTheMousePosition(mouseX: number, mouseY: number): void {
        if (this.x - mouseX >= 0) {
            this.x -= 1
        } else {
            this.x += 1
        }
        if (this.y - mouseY >= 0) {
            this.y -= 1
        } else {
            this.y += 1
        }
    }

    draw(p: p5): void {
        p.stroke(this.color)
        p.strokeWeight(3)
        p.point(this.x, this.y)
    }

}