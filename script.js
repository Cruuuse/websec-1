function buttonClickHandler() {
    let selectElem = document.getElementById("select1");
    console.log(selectElem.value);

    let result = 0; 
    let value1 = document.getElementById("input1");
    let value2 = document.getElementById("input2");

    value1  = input1.value;
    value2  = input2.value;
    console.log(value1, value2);

    switch (document.getElementById("operation").value) {
        case "plus":
            result = value1 + value2;
            break;
        case "minus":
            result = value1 - value2;
            break;
        case "mult":
            result = value1 * value2;
            break;
        case "div":
            result = value1 / value2;
            break;
    }

    document.getElementById("resultArea").innerText = result;
}