import p5 from "p5";
import {Walker} from "./Walker.ts";
import {RandomWalker} from "./RandomWalker.ts";

export const Sketch = (p: p5) => {
    const walker: Walker = new RandomWalker(250, 250)

    p.setup = () => {
        p.createCanvas(600, 600)
        p.background(220)
    }

    p.draw = () => {
        draw(walker)
        walker.updatePosition(p)
    }

    function draw(walker: Walker): void {
        p.stroke('purple')
        p.strokeWeight(3)
        p.point(walker.x, walker.y)
    }
}