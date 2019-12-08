function buttonJacobi() {
    let size = parseInt(document.getElementById("variables").value);
    let i = parseInt(document.getElementById("iterations").value);
    if (size === 2) {
        twoVariables(i);
    }
    if (size === 3) {
        threeVariables(i);
    }
}

function jacobi(n) {
    let A = [];
    let a = [];
    let B = [];
    let b = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let g = parseFloat(prompt("digite elemento"));
            a.push(g);
        }
        A.push(a);
        a = [];
    }
    for (let t = 0; t < n; t++) {
        b = parseFloat(prompt("digite elemento"));
        B.push(b);
    }

    let X = [0, 0, 0];
    let S = [0, 0, 0];
    let k = 0;

    while (k !== 25) {
        S[0] = (B[0] - (A[0][1] * X[1]) - (A[0][2] * X[2])) / A[0][0];
        S[1] = (B[1] - (A[1][0] * X[0]) - (A[1][2] * X[2])) / A[1][1];
        S[2] = (B[2] - (A[2][0] * X[0]) - (A[2][1] * X[1])) / A[2][2];
        X[0] = S[0];
        X[1] = S[1];
        X[2] = S[2];

        k = k + 1;
    }
    console.log(S[0], S[1], S[2], k);
}
