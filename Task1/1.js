"use strict";
const num = Number.parseFloat(prompt("Введите температуру по Фаренгейту:"));
printTemperature(num);

function printTemperature(num) {
    alert(`Цельсий: ${((num - 32)/1.8).toFixed(0)}, Фаренгейт: ${num}.`);
}