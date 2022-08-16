import React from "react";
import fruits from "./food";
import { choice, remove } from "./helpers";

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please`);
console.log(`Here you go: ${fruit}`);
remove(fruits, fruit);
console.log(`Delicious! May I have another`);
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);

