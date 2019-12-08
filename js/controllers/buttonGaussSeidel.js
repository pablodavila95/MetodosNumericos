function buttonGauss() {

    let size = parseInt(document.getElementById("variables").value);
    let i = parseInt(document.getElementById("iterations").value);
    if (size === 2) {
        twoVariables(i);
    }
    if (size === 3) {
        threeVariables(i);
    }
}

function threeVariables(iterations) {
    let result = document.getElementById("resultSpan");

    function seidel(a, x, b) {
        let n = 3;
        let d;
        for (let i = 0; i < n; i++) {
            d = b[i];
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    d -= a[i][j] * x[j];
                }
            }
            x[i] = d / a[i][i];
        }
        return x;
    }

    let x21 = parseFloat(document.getElementById("x21").value);
    let y21 = parseFloat(document.getElementById("y21").value);
    let z21 = parseFloat(document.getElementById("z21").value);
    let c21 = parseFloat(document.getElementById("c21").value);

    let x22 = parseFloat(document.getElementById("x22").value);
    let y22 = parseFloat(document.getElementById("y22").value);
    let z22 = parseFloat(document.getElementById("z22").value);
    let c22 = parseFloat(document.getElementById("c22").value);


    let x23 = parseFloat(document.getElementById("x23").value);
    let y23 = parseFloat(document.getElementById("y23").value);
    let z23 = parseFloat(document.getElementById("z23").value);
    let c23 = parseFloat(document.getElementById("c23").value);


    let solutionVector = [0, 0, 0];
    let equationsVector = [[x21, y21, z21], [x22, y22, z22], [x23, y23, z23]];
    let equalsVector = [c21, c22, c23];

    for (let i = 0; i < iterations; i++) {
        solutionVector = seidel(equationsVector, solutionVector, equalsVector);
        console.log(solutionVector);
    }
    result.innerHTML = "Result is : " + solutionVector.toString();

    return solutionVector;
}

function twoVariables(iterations) {
    let result = document.getElementById("resultSpan");

    function seidel(a, x, b) {
        let n = 2;
        let d;
        for (let i = 0; i < n; i++) {
            d = b[i];
            for (let j = 0; j < n; j++) {
                if (i !== j) {
                    d -= a[i][j] * x[j];
                }
            }
            x[i] = d / a[i][i];
        }
        return x;
    }

    let x11 = parseFloat(document.getElementById("x11").value);
    let y11 = parseFloat(document.getElementById("y11").value);
    let c11 = parseFloat(document.getElementById("c11").value);

    let x12 = parseFloat(document.getElementById("x12").value);
    let y12 = parseFloat(document.getElementById("y12").value);
    let c12 = parseFloat(document.getElementById("c12").value);


    let solutionVector = [0, 0];
    let equationsVector = [[x11, y11], [x12, y12]];
    let equalsVector = [c11, c12];

    for (let i = 0; i < iterations; i++) {
        solutionVector = seidel(equationsVector, solutionVector, equalsVector);
        console.log(solutionVector);
    }
    result.innerHTML = "Result is : " + solutionVector.toString();
    return solutionVector;
}

