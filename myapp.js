
//Function for checking values imputed by User

function addData() 
{
    let company = document.getElementById('companyName');
    let companyUser = company.options[company.selectedIndex].value;

    let cost = document.getElementById('valueFromInvoice').value;
    cost = Math.round( cost * 1e2 ) / 1e2;

    let discount = document.getElementById('discountValue');
    let discountUser = discount.options[discount.selectedIndex].value;

    if(companyUser == 0 || discountUser == ""){
        window.alert("Nie wprowadziłeś danych");
        return false;
    } else if(companyUser == 0 || discountUser == ""){
        window.alert("Wybierz wartości");
        return false;
    } else if (cost <= 0){
        window.alert("Wpisz poprawną wartość usługi");
        return false;
    }
    addDataToTable(companyUser, cost, discountUser);
}


//Adding data into table

function addDataToTable(companyUser, cost, discountUser) 
{
    let table = document.getElementById('t01');
    let rows = document.getElementById('t01').getElementsByTagName('tr').length;
    let row = table.insertRow(rows);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let totalCost = (cost - cost * (discountUser / 100)).toFixed(2);
    
    cell1.innerText = companyUser;
    cell2.innerText = cost;
    cell3.innerText = discountUser + " %";
    cell4.innerText = totalCost;
    
    document.getElementById('companyName').getElementsByTagName('option')[0].selected = 'selected';
    document.getElementById('valueFromInvoice').value = "";
    document.getElementById('discountValue').getElementsByTagName('option')[0].selected = 'selected';

    cell1 = 0;
    cell2 = 0;
    cell3 = 0;
    cell4 = 0;
}

document.getElementById( 'addButton' ).addEventListener( 'click', addData );
