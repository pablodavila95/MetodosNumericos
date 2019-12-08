function giveEndRk2() {
    let h = parseFloat(document.getElementById("hrk2").value);
    let xf = parseFloat(document.getElementById("xfrk2").value);
    let x0 = parseFloat(document.getElementById("xrk2").value);


    let container = document.getElementById("xfrk2c");
    let answer = (h*xf)+x0;

    if (isNaN(answer)) {
        answer = "0";
    }

    container.innerHTML = " Termina en x(" + answer.toString() + ")";
}

function rk2Execute() {
    let h = parseFloat(document.getElementById("hrk2").value);
    let y0 = parseFloat(document.getElementById("yrk2").value);
    let x0 = parseFloat(document.getElementById("xrk2").value);
    let xf = parseFloat(document.getElementById("xfrk2").value);


    let dydxUnparsed = document.getElementById("dydxrk2").value;


    if (dydxUnparsed.includes("x") && dydxUnparsed.includes("y")) {
        dydxUnparsed = dydxUnparsed.replace(/\s+/g, '');
        let code = `return ${dydxUnparsed}`;
        let fpxy = new Function('x', 'y', code.toString());
        console.log("has both");

        return rk2Two(h, xf, y0, x0, fpxy);
    }
}

function rk2Two(h, xf, y0, x0, fpxy) {
    function rk2(y, x, dx, f) {
        let k1 = dx * f(x, y);
        let k2 = dx * f(x + k1, y + dx);
        return y + ((k1 + k2) / 2.0);
    }

    while (0 < xf + 1) {
        console.log("y(" + x0 + ") =  \t" + y0);
        y0 = rk2(y0, x0, h, fpxy);
        x0 = ((x0 * 10) + (h * 10)) / 10;
        xf -= 1;
    }

}
