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
            return bisect(a, b, error, f2);
        case 3:
            let f3 = function (x) {
                let a3 = parseFloat(document.getElementById("input3").value);
                let b3 = parseFloat(document.getElementById("input2").value);
                let c3 = parseFloat(document.getElementById("input1").value);

                let z3 = parseFloat(document.getElementById("constant").value);
                return a3 * Math.pow(x, 3) + b3 * Math.pow(x, 2) + c3 * Math.pow(x, 1) + z3;
            };
            return bisect(a, b, error, f3);
        case 4:
            let f4 = function (x) {
                let a4 = parseFloat(document.getElementById("input4").value);
                let b4 = parseFloat(document.getElementById("input3").value);
                let c4 = parseFloat(document.getElementById("input2").value);
                let d4 = parseFloat(document.getElementById("input1").value);
                let z4 = parseFloat(document.getElementById("constant").value);
                return a4 * Math.pow(x, 4) + b4 * Math.pow(x, 3) + c4 * Math.pow(x, 2) + d4 * Math.pow(x, 1) + z4;
            };
            return bisect(a, b, error, f4);
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
            return bisect(a, b, error, f5);
    }
}

function parseEquation(input){
                   // Numbers as constants and variables with scalars are terms
    let left;
    let term;
// get all the parts of the equation
    const terms = [];     // an array of all terms parsed

// Important that white spaces are removed first
    input = input.replace(/\s+/g,""); // remove whitespaces
    input = input.replace(/([\-\+])([xy])/g,"$11$2"); // convert -x -y or +x +y to -1x -1y or +1x +1y
                                                      // just to make the logic below a little simpler
    const newTerm = () => {
        term = {val: null, scalar: 1, left: left,};
    }; // create a new term
    const pushTerm = () => {
        terms.push(term);
        term = null;
    }; // push term and null current
    // regExp [xy=] gets "x","y", or "="" or [\-\+]??[0-9\.]+  gets +- number with decimal
    const reg = /[xy=]|[\-\+]??[0-9\.eE]+/g;   // regExp to split the input string into parts
    const parts = input.match(reg);
    term = null;
    left = true;    // which side of equation a term is
    parts.forEach( p=> {
        if (p === "x" || p === "y") {
            if (term !== null && term.val !== null) {  // is the variable defined
                pushTerm(); // yes so push to the stack and null
            }
            if (term === null) { newTerm(); }  // do we need a new term?
            term.val = p;
        } else if( p === "=") {                // is it the equals sign
            if (!left) { throw new SyntaxError("Unxpected `=` in equation."); }
            if (term === null) { throw new SyntaxError("No left hand side of equation."); }// make sure that there is a left side
            terms.push(term);   // push the last left side term onto the stack
            term = null;
            left = false;       // everything on the right from here on in
        } else {                // all that is left are numbers (we hope)
            if (isNaN(p)){ throw new SyntaxError("Unknown value '"+p+"' in equation");  }//check that there is a number
            if (term !== null && (p[0] === "+" || p[0] === "-")) { // check if number is a new term
                pushTerm();    // yes so push to the stack and null
            }
            if (term === null) { newTerm(); } // do we need a new term?
            term.scalar *= Number(p);         // set the scalar to the new value
        }
    });

    if (term !== null) { // there may or may not be a term left to push to the stack
        pushTerm();
    }
    // now simplify the equation getting the scalar for left and right sides . x on left y on right
    let scalarX = 0;
    let scalarY = 0;
    let valC = 0; // any constants
    terms.forEach(t => {
        t.scalar *= !t.left ? -1 : 1; // everything on right is negative
        if (t.val === "y") {
            scalarY += -t.scalar; // reverse sign
        } else if (t.val === "x") {
            scalarX += t.scalar;
        } else {
            valC += t.scalar;
        }
    });
    // now build the code string for the equation to solve for x and return y
    const code = "return (" + scalarX + " * x  + (" + valC + "));\n";
    const equation = new Function("x", code); // create the function
    return equation;
}
