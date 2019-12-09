function bairstow() {
    let power = parseInt(document.getElementById("power").value);
    let r = parseFloat(document.getElementById("left").value);
    let s = parseFloat(document.getElementById("right").value);
    let error = parseFloat(document.getElementById("error").value);

    switch (power) {
        case 1:
            return 0;
        case 2:
            return 0;
        case 3:
            return 0;
        case 4:

            let a4 = parseFloat(document.getElementById("input4").value);
            let b4 = parseFloat(document.getElementById("input3").value);
            let c4 = parseFloat(document.getElementById("input2").value);
            let d4 = parseFloat(document.getElementById("input1").value);
            let z4 = parseFloat(document.getElementById("constant").value);

            let c4x4 = a4;
            let c4x3 = b4 + a4 * r;
            let c4x2 = c4 + b4 * r + a4 * s;
            let c4x1 = d4 + c4 * r + b4 * s;
            let c4x0 = z4 + d4 * r + c4 * s;

            let c4y4 = c4x4;
            let c4y3 = c4x3 + c4x4 * r;
            let c4y2 = c4x2 + c4x3 * r + c4x4 * s;
            let c4y1 = c4x1 + c4x2 * r + c4x3 * s;

            let c4Dr = ((c4y3 * c4x0) - (c4y2 * c4x1)) / (c4y2 ^ 2 - (c4y1 * c4y3));
            let c4Ds = ((c4y1 * c4x1) - (c4y2 * c4x0)) / (c4y2 ^ 2 - (c4y1 * c4y3));

            let Comp1c4;
            let Comp2c4;
            let Comp3c4;
            let Comp4c4;
            let Comp5c4;
            let Comp6c4;
            let Comp7c4;
            let Comp8c4;
            let Comp9c4;
            do {
                r = r + c4Dr;
                s = s + c4Ds;
                Comp1c4 = c4x4;
                Comp2c4 = c4x3;
                Comp3c4 = c4x2;
                Comp4c4 = c4x1;
                Comp5c4 = c4x0;

                Comp6c4 = c4y4;
                Comp7c4 = c4y3;
                Comp8c4 = c4y2;
                Comp9c4 = c4y1;

                c4x4 = a4;
                c4x3 = b4 + a4 * r;
                c4x2 = c4 + b4 * r + a4 * s;
                c4x1 = d4 + c4 * r + b4 * s;
                c4x0 = z4 + d4 * r + c4 * s;

                c4y4 = c4x4;
                c4y3 = c4x3 + c4x4 * r;
                c4y2 = c4x2 + c4x3 * r + c4x4 * s;
                c4y1 = c4x1 + c4x2 * r + c4x3 * s;

                c4Dr = ((c4y3 * c4x0) - (c4y2 * c4x1)) / (c4y2 ^ 2 - (c4y1 * c4y3));
                c4Ds = ((c4y1 * c4x1) - (c4y2 * c4x0)) / (c4y2 ^ 2 - (c4y1 * c4y3));

            }
            while (c4x4 != Comp1c4 || c4x3 != Comp2c4 || c4x2 != Comp3c4 || c4x1 != Comp4c4 || c4x0 != Comp5c4 || c4y4 != Comp6c4 || c4y3 != Comp7c4 || c4y2 != Comp8c4 || c4y1 != Comp8c4);

            return c4x4, c4x3, c4x2, c4x1, c4x0, c4y4, c4y3, c4y2, c4y1;

        case 5:
            return 0;
    }
}
