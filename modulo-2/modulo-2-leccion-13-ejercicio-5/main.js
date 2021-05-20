"use strict";

const pins = [2389, 2384, 2837, 5232, 8998];

const evenPass = pins.filter (pin => pin % 2 === 0);
console.log(evenPass);
//si el resto de pin / 2 es 0, entonces la condición es true