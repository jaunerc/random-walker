import './style.css'
import p5 from "p5";
import {Sketch} from "./sketch/Sketch.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <h1>Random Walker</h1>
    <p>This is an app that shows different types of random walkers implemented with p5 and inspired by the book <a href="https://natureofcode.com/">Nature of Code</a>.</p>
    <div id="canvas"></div>
    <select id="walker-selection">
        <option>Random</option>
        <option>In-Mouse Direction</option>
        <option>Gaussian</option>
    </select>
`

new p5(Sketch, document.querySelector<HTMLDivElement>('#canvas')!)
