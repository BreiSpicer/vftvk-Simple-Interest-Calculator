function compute()
{
    var principle = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principle * years * rate /100;
    var year = new date().getFullYear()+parseInt(years);
}
Function updaterate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementbyId("rate_val").innertext=rateval
    <!--I dont know where to put the onchange event-->
    object.onchange = function(){myScript};
}
