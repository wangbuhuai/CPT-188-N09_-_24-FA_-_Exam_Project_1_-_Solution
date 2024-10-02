// Created by Dayu Wang (dwang@stchas.edu) on 2024-10-01

// Last updated by Dayu Wang (dwang@stchas.edu) on 2024-10-01


function binaryToDecimal() {
    let decNum = 0;
    for (let k = 0; k < 16; k++) {
        const bit = parseInt(document.getElementById("bit-" + k.toString()).textContent);
        decNum += bit * Math.pow(2, k);
    }
    return decNum;
}

const buttons = document.getElementsByTagName("button");
const result = document.getElementById("result");

for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].getAttribute("id").startsWith("bit")) {
        buttons[i].addEventListener("click", () => {
            const bit = parseInt(buttons[i].textContent);
            buttons[i].textContent = (1 - bit).toString();
            result.textContent = binaryToDecimal().toString();
        });
    }
}

document.getElementById("left-rotate").addEventListener("click", ()=> {
    const bits = [];
    for (let k = 15; k >= 0; k--) {
        const bit = parseInt(document.getElementById("bit-" + k.toString()).textContent);
        bits.push(bit);
    }
    const temp = bits[0];
    for (let i = 1; i < 16; i++) {
        bits[i - 1] = bits[i];
    }
    bits[15] = temp;
    for (let k = 15; k >= 0; k--) {
        document.getElementById("bit-" + k.toString()).textContent = bits[15 - k].toString();
    }
    result.textContent = binaryToDecimal().toString();
});

document.getElementById("right-rotate").addEventListener("click", () => {
    const bits = [];
    for (let k = 15; k >= 0; k--) {
        const bit = parseInt(document.getElementById("bit-" + k.toString()).textContent);
        bits.push(bit);
    }
    const temp = bits[15];
    for (let i = 15; i >= 0; i--) {
        bits[i] = bits[i - 1];
    }
    bits[0] = temp;
    for (let k = 15; k >= 0; k--) {
        document.getElementById("bit-" + k.toString()).textContent = bits[15 - k].toString();
    }
    result.textContent = binaryToDecimal().toString();
});