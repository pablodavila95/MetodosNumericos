function eulerTwo(h, xi, xf, y0, fxy) {
    let temp = -0;

    while (xi < xf) {
        temp = y0;
        y0 = y0 + h * fxy(xi, y0);
        xi = xi + h;
    }
    console.log(xi,y0);
}

function eulerOne(h, xi, xf, y0, fx) {
    let temp = -0;

    while (xi < xf) {
        temp = y0;
        y0 = y0 + h * fx(xi);
        xi = xi + h;
    }
    console.log(y0);
}

function eulerExecute() {
    let h = parseFloat(document.getElementById("h").value);
    let y0 = parseFloat(document.getElementById("y0").value);
    let xi = parseFloat(document.getElementById("xi").value);
    let xf = parseFloat(document.getElementById("xf").value);


    let dydxUnparsed = document.getElementById("dydx").value;
    if (dydxUnparsed.includes("x") && !dydxUnparsed.includes("y")) {
        dydxUnparsed = dydxUnparsed.replace(/\s+/g, '');
        let code = `return ${dydxUnparsed}`;
        let fx = new Function("x", code);
        console.log("has only x");

        return eulerOne(h,xi,xf,y0,fx);

    } else if (dydxUnparsed.includes("y") && !dydxUnparsed.includes("x")) {
        dydxUnparsed = dydxUnparsed.replace(/\s+/g, '');
        let code = `return ${dydxUnparsed}`;
        let fy = new Function("y", code);
        console.log("has only y");

        return eulerOne(h,xi,xf,y0,fy);



    } else if (dydxUnparsed.includes("x") && dydxUnparsed.includes("y")) {
        dydxUnparsed = dydxUnparsed.replace(/\s+/g, '');
        let code = `return ${dydxUnparsed}`;
        let fxy = new Function('x','y', code.toString());
        console.log("has both");

        return eulerTwo(h,xi,xf,y0,fxy);

    }
}
