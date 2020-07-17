/** Problem: 01.  feet To Mile Convert.*/

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(10560);
console.log(result);





/** Problem: 2.  Wood Calclutor */

function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var totalWoodRequired= woodCalculator(12, 3, 3);
console.log(totalWoodRequired);






/** Problem: 3. Brick Calculator */

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







/** Problem: 4. Smallest name in a array */
function tinyFriend(arrayName){
    var smallName = arrayName[0];
    for(i = 0; i < arrayName.length; i++){
        var element = arrayName[i];
        if(element.length < smallName.length)
            smallName = element;
        
    }
    return smallName;
}
var result = tinyFriend(["sumon", "bidyut", "chinmoy", "dipangkar", "soma"]);
console.log(result);
    
