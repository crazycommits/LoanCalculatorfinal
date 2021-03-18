document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault();
    calculate();

  });
  document.getElementById("clear").addEventListener("click", function(event){
    
    document.getElementById("table").innerHTML="";

  });
function calculate()
{   
     let body=document.getElementsByTagName("body")[0];
    const amount = document.querySelector('#amount').value;
    const interest_rate = document.querySelector('#interest').value;
    const period = document.querySelector('#months').value;
    var i=0;
    var jsonArray=[];
    const attach=document.getElementById("attach");
    while(i < period){
        i++;
        let payment = ((amount * interest_rate / 1200) * Math.pow((1 + interest_rate / 1200), period)) / (Math.pow((1 + interest_rate / 1200), period) - 1)
        let pp1 = payment * Math.pow(1 + interest_rate / 1200, (i - 1 - (period)));
        let int1 = payment - pp1;
        let loanBalance = (int1 / (interest_rate / 1200)) - pp1;
        let row = {
            payment: Math.round(payment,2),
            pp: Math.round(pp1,2),
            int: Math.round(int1 ,2),
            loanBalance: Math.round(loanBalance,2)
        }
        jsonArray.push(row);
    }
    var j=0;
    var table=document.getElementById("table");
    var tab=document.createElement("table");
    var tabody=document.createElement("tbody");
    var th=document.createElement("th");
    var th1=document.createElement("th");
    var th2=document.createElement("th");
    var th3=document.createElement("th");
    var th4=document.createElement("th");
    th.appendChild(document.createTextNode("payment No."));
    th1.appendChild(document.createTextNode("payment Amount"));
    th2.appendChild(document.createTextNode("Principal amount"));
    th3.appendChild(document.createTextNode("Interest Amount"));
    th4.appendChild(document.createTextNode("Outstanding balance"));
    tabody.appendChild(th);
    tabody.appendChild(th1);
    tabody.appendChild(th2);
    tabody.appendChild(th3);
    tabody.appendChild(th4);
    jsonArray.forEach((row)=>{
        j++;
        let eachrow=document.createElement("tr");
        var cell = document.createElement("td");
      var cellText = document.createTextNode(j);
      cell.appendChild(cellText);
      eachrow.appendChild(cell);

      var cell1 = document.createElement("td");
      var cellText1 = document.createTextNode(row.payment);
      cell1.appendChild(cellText1);
      eachrow.appendChild(cell1);
      
      var cell2 = document.createElement("td");
      var cellText2 = document.createTextNode(row.pp);
      cell2.appendChild(cellText2);
      eachrow.appendChild(cell2);
      
      var cell3 = document.createElement("td");
      var cellText3 = document.createTextNode(row.int);
      cell3.appendChild(cellText3);
      eachrow.appendChild(cell3);
      
      var cell4 = document.createElement("td");
      var cellText4 = document.createTextNode(row.loanBalance);
      cell4.appendChild(cellText4);
      eachrow.appendChild(cell4);

      tabody.appendChild(eachrow);
        
    })
    tab.appendChild(tabody);

    table.appendChild(tab);
    
    
    console.log(table);
    console.log(jsonArray);
    const interest = (amount * (interest_rate * 0.01)) / months;
    const payment = ((amount / months) + interest).toFixed(2);

    
}  
