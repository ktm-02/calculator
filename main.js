function appendToDisplay(value){
    document.getElementById("display").value+=value;
}
function clearDisplay(value){
    document.getElementById("display").value='';
}
function calculateResult(value){
    try{
    let result=eval(document.getElementById("display").value);
    document.getElementById("display").value=result;
}
catch(err){
    document.getElementById("display").value=err.name;
}
}