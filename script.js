function buttonClickHandler() {
    let selectElem = document.getElementById("select1");
    console.log(selectElem.value);

    let result = 0; 
    let value1 = document.getElementById("input1").value;
    let value2 = document.getElementById("input2").value;

    if (value1==="" || value2===""){
        alert("Incorrect input");
    }
    else{
        switch (document.getElementById("select1").value) {
            case "plus":
                result = parseFloat(value1) + parseFloat(value2);
                break;
            case "minus":
                result = parseFloat(value1) - parseFloat(value2);
                break;
            case "mult":
                result = parseFloat(value1) * parseFloat(value2);
                break;
            case "div":
                if (Math.abs(value2) < Number.EPSILON) {
                    alert("Can't divide by zero");
                    break;
                }
                result = parseFloat(value1) / parseFloat(value2);
                break;
        }
    
        document.getElementById("resultArea").innerText = result;
    }
    
}