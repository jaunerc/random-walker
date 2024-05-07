import p5 from "p5";
import {WalkerColor} from "./WalkerColor.ts";

export interface Walker {
    x: number
    y: number
    color: WalkerColor
    updatePosition: (p: p5) => void
    draw: (p: p5) => void
}