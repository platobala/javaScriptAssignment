/**feet To Mile Convert.*/

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
var result = feetToMile(10560);
console.log(result);

/**Wood Calclutor */

function woodCalculator(chair, table, bed){
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5;
    var totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
var totalWoodRequired= woodCalculator(12, 3, 3);
console.log(totalWoodRequired);


/**Smallest name in array */
var friendList = ["sumon", "chinmoy", "dip"];
var smallName = friendList[0];
for(var i = 0; i <= friendList.length; i++){
    
    var element = friendList[i];
    if(element > smallName){
        smallName = element;
    }
}
console.log(smallName);
