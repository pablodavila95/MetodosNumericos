function Xval(a1, b1, c1, d1, y, z) {
    return (-(b1 * y) - (c1 * z) + d1) / a1;
}

function Yval(a2, b2, c2, d2, x, z) {
    return (-(a2 * x) - (c2 * z) + d2) / b2;
}


function Zval(a3, b3, c3, d3, x, y) {
    return (-(a3 * x) - (b3 * y) + d3) / c3;
}


function newton() {
    let vals = [[0.0, 0.0, 0.0], [1.0, 1.0, 1.0]];

    let a1 = parseFloat(document.getElementById("a1").value),
        b1 = parseFloat(document.getElementById("b1").value),
        c1 = parseFloat(document.getElementById("c1").value),
        d1 = parseFloat(document.getElementById("d1").value),

        a2 = parseFloat(document.getElementById("a2").value),
        b2 = parseFloat(document.getElementById("b2").value),
        c2 = parseFloat(document.getElementById("c2").value),
        d2 = parseFloat(document.getElementById("d2").value),

        a3 = parseFloat(document.getElementById("a3").value),
        b3 = parseFloat(document.getElementById("b3").value),
        c3 = parseFloat(document.getElementById("c3").value),
        d3 = parseFloat(document.getElementById("d3").value);

    let cons = [
        [a1, b1, c1, d1],
        [a2, b2, c2, d2],
        [a3, b3, c3, d3]
    ];
    for (let i = 0; i < 500; i++) {
        console.log(vals[0], 0);
        vals[1][0] = Xval(cons[0][0], cons[0][1], cons[0][2], cons[0][3], vals[0][1], vals[0][2]);
        vals[1][1] = Yval(cons[1][0], cons[1][1], cons[1][2], cons[1][3], vals[0][0], vals[0][2]);
        vals[1][2] = Zval(cons[2][0], cons[2][1], cons[2][2], cons[2][3], vals[0][0], vals[0][1]);

        console.log(vals[1], 1);

        vals[0][0] = Xval(cons[0][0], cons[0][1], cons[0][2], cons[0][3], vals[1][1], vals[1][2]);
        vals[0][1] = Yval(cons[1][0], cons[1][1], cons[1][2], cons[1][3], vals[1][0], vals[1][2]);
        vals[0][2] = Zval(cons[2][0], cons[2][1], cons[2][2], cons[2][3], vals[1][0], vals[1][1]);
    }
    return vals[1];
}

function newtonExecute() {
    let result = document.getElementById("resultSpan");
    result.innerHTML = "";
    result.innerHTML = "[X,Y,Z] = " + newton().toString();

}
