import p5 from "p5";
import {Walker} from "./Walker.ts";
import {RandomWalker} from "./RandomWalker.ts";
import {WalkerColors} from "./WalkerColor.ts";

export const Sketch = (p: p5) => {
    let walkerSelection: HTMLSelectElement
    const walkers: Walker[] = []

    p.setup = () => {
        p.createCanvas(600, 600)
        p.background(220)
        querySelectElementFromDom()
    }

    p.draw = () => {
        walkers.forEach(walker => {
            walker.draw(p)
            walker.updatePosition(p)
        })
    }

    p.mousePressed = () => {
        const color = WalkerColors[WalkerColors.length * p.random() | 0]
        const walker = new RandomWalker(p.mouseX, p.mouseY, color)
        walkers.push(walker)
    }

    function querySelectElementFromDom(): void {
        walkerSelection = document.querySelector<HTMLSelectElement>('#walker-selection')!
    }
}
