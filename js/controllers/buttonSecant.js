function secant(a, b, e, f) {
    let n = 0;
    let xm = 0;
    let x0 = 0;
    let c = 0;

    if (f(a) * f(b) < 0) {
        while (true) {
            x0 = ((a * f(b) - b * f(a)) / (f(b) - f(a)));
            c = f(a) * f(x0);
            a = b;
            b = x0;
            n += 1;
            if (c === 0) {
                break;
            }
            xm = ((a * f(b) - b * f(a)) / (f(b) - f(a)));
            if (Math.abs(xm - x0) < e) {
                break
            }
        }
        console.log("Root of the equation = " + x0);
        console.log("Number of iterations = " + n);
        return x0;

    } else {
        console.log("No se encuentra la raiz");
    }
}

function secantExecute() {
    let power = parseInt(document.getElementById("power").value);
    let a = parseFloat(document.getElementById("left").value);
    let b = parseFloat(document.getElementById("right").value);
    let error = parseFloat(document.getElementById("error").value);

    switch (power) {
        case 1:
            let f1 = function (x) {
                let a1 = parseFloat(document.getElementById("input1").value);
                let z1 = parseFloat(document.getElementById("constant").value);
                return a1 * Math.pow(x, 1) + z1;
            };
            return secant(a, b, error, f1);
        case 2:

            let f2 = function (x) {
                let a2 = parseFloat(document.getElementById("input2").value);
                let b2 = parseFloat(document.getElementById("input1").value);
                let z2 = parseFloat(document.getElementById("constant").value);
                return (a2 * Math.pow(x, 2)) + (b2 * x) + z2;
            };
            return secant(left, right, error, f2);
        case 3:

            let f3 = function (x) {
                let a3 = parseFloat(document.getElementById("input3").value);
                let b3 = parseFloat(document.getElementById("input2").value);
                let c3 = parseFloat(document.getElementById("input1").value);

                let z3 = parseFloat(document.getElementById("constant").value);
                return (a3 * Math.pow(x, 3)) + (b3 * Math.pow(x, 2)) + (c3 * x) + z3;
            };
            return secant(left, right, error, f3);
        case 4:
            let f4 = function (x) {
                let a4 = parseFloat(document.getElementById("input4").value);
                let b4 = parseFloat(document.getElementById("input3").value);
                let c4 = parseFloat(document.getElementById("input2").value);
                let d4 = parseFloat(document.getElementById("input1").value);
                let z4 = parseFloat(document.getElementById("constant").value);
                return (a4 * Math.pow(x, 4)) + (b4 * Math.pow(x, 3)) + (c4 * Math.pow(x, 2)) + (d4 * x) + z4;
            };
            return secant(left, right, error, f4);
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
            return secant(left, right, error, f5);
    }
}
