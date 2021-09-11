//seer to moon
function seerToMoon(seer){
    let Moon = seer / 40;
    return Moon;
}
let pondo = seerToMoon(80)
console.log(pondo);

//total sales
function totalSales(shirt,pant,shoes){
    var  s1 = 100;
    var p1 = 200;
    var s2 = 500;

    let total = (shirt * s1)+(pant * p1)+(shoes * s2);
    return total;
}

let totalNumber =totalSales (5,6,10);
console.log(totalNumber);

function deliveryCost(num){
    var n1;
    var n2;
    var n3;
   if(num <= 100){
    return num * 100;
   }else if(num >= 101 && num <= 200){
        var n1 = 100 * 100;
        var n2 = num - 100;
        return (n2 * 80) + n1;      
   }else if(num > 200){
       var n1 = 100 * 100; 
       var n2 = 100 * 80;
       var n3 = num - 200;
       return (n3 * 50) + n1 + n2;
   }
   
  
}
console.log(deliveryCost(300));