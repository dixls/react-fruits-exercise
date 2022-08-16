import React from "react";

const choice = (items) => items[Math.floor(Math.random() * items.length)];

const remove = (items, item) => {
    const idx = items.indexOf(item);
    if(idx) items.splice(idx, 1);
};

export {choice, remove};