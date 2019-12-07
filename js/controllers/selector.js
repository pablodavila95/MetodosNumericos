selector = () => {
    let typeOfEquation = parseInt(document.getElementById("typeOfEquation").value);
    console.log(typeOfEquation);
    switch (typeOfEquation) {
        case 1:
            console.log("NonLinear");
            window.location.href = "nonlineal.html";
            break;

        case 2:
            console.log("Polynomial");
            window.location.href = "polynomial.html";
            break;

        case 3:
            console.log("linealSystem");
            window.location.href = "lineal_system.html";
            break;

        case 4:
            console.log("NonLinearSystem");
            window.location.href = "non_lineal_system.html";
            break;

        case 5:
            console.log("ordDifEquation");
            window.location.href = "ord_diferential.html";
            break;

    }
};
