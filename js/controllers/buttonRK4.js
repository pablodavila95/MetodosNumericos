function giveEnd() {
    let h = parseFloat(document.getElementById("hRK4").value);
    let xf = parseFloat(document.getElementById("xfRK4").value);
    let x0 = parseFloat(document.getElementById("xRK4").value);


    let container = document.getElementById("xfRK");
    let answer = (h * xf) + x0;

    if (isNaN(answer)) {
        answer = "0";
    }

    container.innerHTML = " Termina en x(" + answer.toString() + ")";
}

function rk4Execute() {
    let h = parseFloat(document.getElementById("hRK4").value);
    let y0 = parseFloat(document.getElementById("yRK4").value);
    let x0 = parseFloat(document.getElementById("xRK4").value);
    let xf = parseFloat(document.getElementById("xfRK4").value);


    let dydxUnparsed = document.getElementById("dydxRK4").value;
    if (dydxUnparsed.includes("x") && dydxUnparsed.includes("y")) {
        dydxUnparsed = dydxUnparsed.replace(/\s+/g, '');
        let code = `return ${dydxUnparsed}`;
        let fpxy = new Function('x', 'y', code.toString());
        console.log("has both");

        return rk4Two(h, xf, y0, x0, fpxy);
    }
}


function rk4Two(h, xf, y0, x0, fpxy) {
    function rk4(y, x, dx, f) {
        let k1 = dx * f(x, y),
            k2 = dx * f(x + dx / 2.0, +y + k1 / 2.0),
            k3 = dx * f(x + dx / 2.0, +y + k2 / 2.0),
            k4 = dx * f(x + dx, +y + k3);

        return y + (k1 + 2.0 * k2 + 2.0 * k3 + k4) / 6.0;
    }

    while (0 < xf + 1) {
        console.log("y(" + x0 + ") =  \t" + y0);
        y0 = rk4(y0, x0, h, fpxy);

        x0 = ((x0 * 10) + (h * 10)) / 10;
        xf -= 1;
    }
}
