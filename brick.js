
 /** 
function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var totalWoodRequired= woodCalculator(12, 3, 3);
console.log(totalWoodRequired);
*/

function tinyFriend(friend){
    var smallName = friend[0];

    for (var i = 0; i< friend.length; i++){
        var element = friend[i];
        if (element.length < smallName.length) 
        smallName = element;
}
return smallName;
}
var smallName = tinyFriend (['Abul', 'Babulal', 'saikat','Antara', 'oni', 'additiya','Barnil']);
console.log ('Name of Our Tiny Friend is',smallName,'.');




function brickCalculator(floor) {
    if (floor > 20){
        var first = floor - 20;
        var one = (first * 10 * 1000) + (10 * 12 * 1000) + (10 * 15 * 1000);
        return one;
        
    }
  
    if (floor >10 && floor <=20){   
    var second = floor - 10 ;
     var two = (second * 12 * 1000) + (10 * 15 * 1000);
     return two;
}

if (floor >0 && floor <=10){   
  
    var three = (floor * 15 * 1000);
    return three;
}

     }


var total = brickCalculator(70);
console.log('You have to bye',total,'Brick for completed the building.');
