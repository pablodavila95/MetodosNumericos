function draw(f) {
    const canvas = document.getElementById("canvas");
    if (null == canvas || !canvas.getContext) return;
    //canvas.innerHTML = "";
    const axes = {}, ctx = canvas.getContext("2d");
    axes.x0 = .5 + .5 * canvas.width;  // x0 pixels from left to x=0
    axes.y0 = .5 + .5 * canvas.height; // y0 pixels from top to y=0
    axes.scale = 2;                 // 40 pixels from x=0 to x=1
    axes.doNegativeX = true;

    showAxes(ctx, axes);
    funGraph(ctx, axes, f, "rgb(11,153,11)", 1);
}

function showAxes(ctx, axes) {
    const x0 = axes.x0, w = ctx.canvas.width;
    const y0 = axes.y0, h = ctx.canvas.height;
    const xmin = axes.doNegativeX ? 0 : x0;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    ctx.moveTo(xmin, y0);
    ctx.lineTo(w, y0);  // X axis
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, h);  // Y axis
    ctx.stroke();
}

function funGraph(ctx, axes, func, color, thick) {
    let xx, yy, dx = 4, x0 = axes.x0, y0 = axes.y0, scale = axes.scale;
    const iMax = Math.round((ctx.canvas.width - x0) / dx);
    const iMin = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
    ctx.beginPath();
    ctx.lineWidth = thick;
    ctx.strokeStyle = color;

    for (let i = iMin; i <= iMax; i++) {
        xx = dx * i;
        yy = scale * func(xx / scale);
        if (i === iMin) ctx.moveTo(x0 + xx, y0 - yy);
        else ctx.lineTo(x0 + xx, y0 - yy);
    }
    ctx.stroke();
}


function showNewton() {
    let bool = document.getElementById("newtonShow").value;
    if (bool) {
        document.getElementById("derivativeNewton").style.display = 'inline';
    }
    if (bool === false) {
        document.getElementById("derivativeNewton").style.display = 'none';
    }
}

/*
##################################################
 */

function getDerivative() {
    let func = function (x) {
        let a = parseFloat(document.getElementById("d1").value);
        let b = parseFloat(document.getElementById("d2").value);
        let c = parseFloat(document.getElementById("d3").value);
        let d = parseFloat(document.getElementById("d4").value);
        let e = parseFloat(document.getElementById("d5").value);
        let f = parseFloat(document.getElementById("d6").value);

        return Math.pow(x, 5) * a + Math.pow(x, 4) * b + Math.pow(x, 3) * c + Math.pow(x, 2) * d + Math.pow(x, 1) * e + f;
    };
    return func;
}

function newtonrap(f, fp, x0, e) {
    let h = f(x0) / fp(x0);
    while (Math.abs(h) >= e) {
        h = f(x0) / fp(x0);
        x0 = x0 - h;
    }
    console.log("the number is " + x0);
    return x0;
}

function newtonExecute() {
    let power = parseInt(document.getElementById("power").value);
    let a = parseFloat(document.getElementById("left").value);
    let error = parseFloat(document.getElementById("error").value);

    switch (power) {
        case 1:
            let f1 = function (x) {
                let a1 = parseFloat(document.getElementById("input1").value);
                let z1 = parseFloat(document.getElementById("constant").value);
                return a1 * Math.pow(x, 1) + z1;
            };
            draw(f1);
            return newtonrap(f1, getDerivative(), a, error);

        case 2:

            let f2 = function () {
                let a2 = parseFloat(document.getElementById("input2").value);
                let b2 = parseFloat(document.getElementById("input1").value);
                let z2 = parseFloat(document.getElementById("constant").value);
                let code = `${a2} * Math.pow(x,2) + (${b2} * x) + ${z2}`;
                return new Function("x", code);
            };
            draw(f2);
            return newtonrap(f2, getDerivative(), a, error);
        case 3:

            let f3 = function (x) {
                let a3 = parseFloat(document.getElementById("input3").value);
                let b3 = parseFloat(document.getElementById("input2").value);
                let c3 = parseFloat(document.getElementById("input1").value);

                let z3 = parseFloat(document.getElementById("constant").value);
                return (a3 * Math.pow(x, 3)) + (b3 * Math.pow(x, 2)) + (c3 * x) + z3;
            };
            draw(f3);
            return newtonrap(f3, getDerivative(), a, error);
        case 4:
            let f4 = function (x) {
                let a4 = parseFloat(document.getElementById("input4").value);
                let b4 = parseFloat(document.getElementById("input3").value);
                let c4 = parseFloat(document.getElementById("input2").value);
                let d4 = parseFloat(document.getElementById("input1").value);
                let z4 = parseFloat(document.getElementById("constant").value);
                return (a4 * Math.pow(x, 4)) + (b4 * Math.pow(x, 3)) + (c4 * Math.pow(x, 2)) + (d4 * x) + z4;
            };
            draw(f4);
            return newtonrap(f4, getDerivative(), a, error);
        case 5:

            let f5 = function (x) {
                let a5 = parseFloat(document.getElementById("input5").value);
                let b5 = parseFloat(document.getElementById("input4").value);
                let c5 = parseFloat(document.getElementById("input3").value);
                let d5 = parseFloat(document.getElementById("input2").value);
                let e5 = parseFloat(document.getElementById("input1").value);
                let z5 = parseFloat(document.getElementById("constant").value);

                return (a5 * Math.pow(x, 5)) + (b5 * Math.pow(x, 4)) + (c5 * Math.pow(x, 3)) + (d5 * Math.pow(x, 2)) + (e5 * x) + z5;
            };
            draw(f5);
            return newtonrap(f5, getDerivative(), a, error);
    }
}
