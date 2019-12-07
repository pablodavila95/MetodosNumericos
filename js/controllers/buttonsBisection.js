function bisection(left, right, error, f, iteration) {
    let a = parseFloat(left);
    let b = parseFloat(right);
    if (f(a) * f(b) >= 0) {
        return 0.0
    } else {
        let m = (a + b) / 2.0;
        if (a - b >= error) {
            console.log("iteration: " + iteration + " | midpoint: " + m);
            if (f(a) * f(b) > 0) {
                bisection(m, b, error, f, (iteration + 1))
            } else {
                bisection(a, m, error, f, (iteration + 1))
            }
        } else {
            console.log("Final number of iterations: " + iteration + " | root = " + m)
        }
        console.log(m);
        return m;
    }
}

function bisect(a, b, e, f) {
    if (f(a) * f(b) >= 0) {
        return 0;
    }
    let c = a;
    while ((b - a) >= e) {
        c = ((a + b) / 2);

        if (f(c) === 0.0) {
            break;
        }
        if (f(c) * f(a) < 0) {
            b = c;
        } else {
            a = c;
        }
    }
    console.log(c);
    return c;
}


function bisectionExecute() {
    let power = parseInt(document.getElementById("power").value);
    let a = parseFloat(document.getElementById("left").value);
    let b = parseFloat(document.getElementById("right").value);
    let error = parseFloat(document.getElementById("error").value);
    let iteration = parseInt(document.getElementById("iteration").value);

    switch (power) {
        case 1:
            let f1 = function (x) {
                let a1 = parseFloat(document.getElementById("input1").value);
                let z1 = parseFloat(document.getElementById("constant").value);
                return a1 * Math.pow(x, 1) + z1;
            };
            return bisect(a, b, error, f1);
        case 2:

            let f2 = function (x) {
                let a2 = parseFloat(document.getElementById("input2").value);
                let b2 = parseFloat(document.getElementById("input1").value);

                let z2 = parseFloat(document.getElementById("constant").value);
                return a2 * Math.pow(x, 2) + b2 * Math.pow(x, 1) + z2;
            };
            return bisection(left, right, error, f2);
        case 3:

            let f3 = function (x) {
                let a3 = parseFloat(document.getElementById("input3").value);
                let b3 = parseFloat(document.getElementById("input2").value);
                let c3 = parseFloat(document.getElementById("input1").value);

                let z3 = parseFloat(document.getElementById("constant").value);
                return a3 * Math.pow(x, 3) + b3 * Math.pow(x, 2) + c3 * Math.pow(x, 1) + z3;
            };
            return bisection(left, right, error, f3);
        case 4:
            let f4 = function (x) {
                let a4 = parseFloat(document.getElementById("input4").value);
                let b4 = parseFloat(document.getElementById("input3").value);
                let c4 = parseFloat(document.getElementById("input2").value);
                let d4 = parseFloat(document.getElementById("input1").value);
                let z4 = parseFloat(document.getElementById("constant").value);
                return a4 * Math.pow(x, 4) + b4 * Math.pow(x, 3) + c4 * Math.pow(x, 2) + d4 * Math.pow(x, 1) + z4;
            };
            return bisection(left, right, error, f4);
        case 5:

            let f5 = function (x) {
                let a5 = parseFloat(document.getElementById("input5").value);
                let b5 = parseFloat(document.getElementById("input4").value);
                let c5 = parseFloat(document.getElementById("input3").value);
                let d5 = parseFloat(document.getElementById("input2").value);
                let e5 = parseFloat(document.getElementById("input1").value);
                let z5 = parseFloat(document.getElementById("constant").value);

                return a5 * Math.pow(x, 5) + b5 * Math.pow(x, 4) + c5 * Math.pow(x, 3) + d5 * Math.pow(x, 2) + e5 * Math.pow(x, 1) + z5;
            };
            return bisection(left, right, error, f5);
    }
}
