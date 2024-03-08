const temp=document.getElementById("temp");
const farenheit=document.getElementById("farenheit");
const celsius = document.getElementById("celsius");
const result=document.getElementById("result");

let temperature;

function convert(){
    if(farenheit.checked){
        temperature=Number(temp.value);
        temperature=temperature*9/5+32;
        result.textContent=temperature.toFixed(1)+` °F`;

    }
    else if(celsius.checked){
        temperature=Number(temp.value);
        temperature=(temperature-32)*(5/9);
        result.textContent=temperature.toFixed(1)+` °C`;
    }
    else{
        result.textContent="Select a Unit"
    }
}