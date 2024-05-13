import p5 from "p5";
import {Walker} from "./Walker.ts";
import {RandomWalker} from "./RandomWalker.ts";
import {WalkerColors} from "./WalkerColor.ts";
import {WalkerSelection} from "./WalkerSelection.ts";
import {InMouseDirectionWalker} from "./InMouseDirectionWalker.ts";
import {GaussianWalker} from "./GaussianWalker.ts";

export const Sketch = (p: p5) => {
    let walkerSelection: HTMLSelectElement
    let clearButton: HTMLButtonElement
    let walkers: Walker[] = []

    p.setup = () => {
        p.createCanvas(600, 600)
        p.background(220)
        queryElementsFromDom()
        registerOnClearButtonClickEventHandler()
    }

    p.draw = () => {
        walkers.forEach(walker => {
            walker.draw(p)
            walker.updatePosition(p)
        })
    }

    p.mousePressed = () => {
        walkers.push(
            createWalkerOnSelection(mapSelectionToWalkerSelection(walkerSelection.value), p))
    }

    function queryElementsFromDom(): void {
        walkerSelection = document.querySelector<HTMLSelectElement>('#walker-selection')!
        clearButton = document.querySelector<HTMLButtonElement>('#clear-button')!
    }

    function registerOnClearButtonClickEventHandler(): void {
        clearButton.onclick = () => {
            walkers = []
            p.background(220)
        }
    }

    function mapSelectionToWalkerSelection(value: string): WalkerSelection {
        switch (value) {
            case 'Random':
                return 'random'
            case 'In-Mouse Direction':
                return 'in-mouse-direction'
            case 'Gaussian':
                return 'gaussian'
            default:
                throw `could not map the selection ${value} to a WalkerSelection type`
        }
    }

    function createWalkerOnSelection(selection: WalkerSelection, p: p5): Walker {
        const color = WalkerColors[WalkerColors.length * p.random() | 0]
        switch (selection) {
            case "random":
                return new RandomWalker(p.mouseX, p.mouseY, color)
            case "in-mouse-direction":
                return new InMouseDirectionWalker(p.mouseX, p.mouseY, color)
            case 'gaussian':
                return new GaussianWalker(p.mouseX, p.mouseY, color)
        }
    }
}
