var calculatebtn = document.getElementById("calculate")
var clearbtn = document.getElementById("clear")
var calculatebtn2 = document.getElementById("pound")

calculatebtn.addEventListener("click",calculator)
clearbtn.addEventListener("click",reset)


function calculator(){
var kilo = document.getElementById("kg").value
var pound = document.getElementById("pound").value
    if (kilo >0 ){
        var result = parseFloat(kilo*2.204)
        document.getElementById("resultFinal").innerHTML = kilo + " = " + result + " Pounds"    
    }
    else if ( pound>0){
        var resultTwo = parseFloat(0.453592*pound)
        document.getElementById("resultFinal").innerHTML = pound + " = " + resultTwo + " Kg" 
    }

     else if (kilo<= 0 && pound <= 0){
        document.getElementById("resultFinal").innerHTML = "Kindly enter the value in box"

    }
}

function reset(){
    document.getElementById("kg").value = ""
    document.getElementById("pound").value = ""
    document.getElementById("resultFinal").innerHTML = "Please enter the value in kg or lbs box"

}

