function checkMajority(){
    var bornYear = document.getElementById("clientYear").valueAsNumber;
    var bornMonth = document.getElementById("clientMonth").valueAsNumber;
    var res = document.getElementById("result");

    if(isNaN(bornYear)){
        res.textContent = "Type only numbers!";
        res.style.color = "red";
        return;
    }

    if(isNaN(bornMonth)){
        res.textContent = "Type only numbers!";
        res.style.color = "red";
        return;
    }

    const thisYear = new Date().getFullYear();
    const thisMonth = new Date().getMonth();

    var ageYear = thisYear - bornYear;
    var ageMonth = thisMonth + ((bornMonth - 12)*-1);

    ageYear = ageYear - 1
    
    if(ageYear >= 18){
        res.textContent = "Over 18, entry allowed!"
        res.style.color = "green"
    }else{
        res.textContent = "Under 18, entry not allowed!"
        res.style.color = "red"
    }


    document.getElementById("clientAge").innerHTML = `${ageYear} anos e ${ageMonth} meses de Idade! `;
    document.getElementById("thisMonth").innerHTML = `Estamos no mês ${thisMonth}`;
}