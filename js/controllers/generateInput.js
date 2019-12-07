typeOneAndTwo = (size) => {
    size = parseInt(size);
    let container = document.getElementById("dynamicEquationContainer");
    container.innerHTML = "";


    for (let i = size; i > 0; i--) {
        let label = document.createElement("label");
        let input = document.createElement("input");

        let plusSign = document.createElement("p");
        plusSign.innerHTML = "   +";


        label.innerHTML = "X" + '<sup>' + i + '</sup>';

        label.id = "X" + i;
        label.for = "input" + i;
        input.id = "input" + i;
        input.className = "input-sm";


        container.appendChild(label);
        container.appendChild(input);
        container.appendChild(plusSign);

    }

    let x1 = document.getElementById("X1");
    x1.innerText = "X";

    let constantInput = document.createElement("input");
    constantInput.type = "text";
    constantInput.id = "constant";
    container.appendChild(constantInput)

};

linearSystem = (size) => {
    if (size === "2") {
        document.getElementById("threeVariables").style.display = 'none';
        document.getElementById("twoVariables").style.display = 'block';
    }
    else if (size === "3") {
        document.getElementById("twoVariables").style.display = 'none';
        document.getElementById("threeVariables").style.display = 'block';
    }
};
