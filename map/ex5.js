/* Array.prototype.map - Exercice 5

Ecrire une fonction multiplyOddIndices, qui prend en entrée un tableau de nombres.
* Chaque nombre situé à un index pair doit être renvoyé tel quel
* Chaque nombre situé à un index impair doit être renvoyé multiplié par son index

Il va donc falloir utiliser le 2ème argument de la fonction passée à map.

Exemple de tableau d'entrée:
  [3, 8, 11, 13, 19, 7]
Tableau renvoyé par multiplyOddIndices:
  [3, 8, 11, 39, 19, 35]
*/

// function multiplyOddIndices(numbers) {
//   operator = numbers.map(function(index){
//     // for(let i; i<imp.length; i++){
//       if(index%2) {
//       return index;
//     } else {
//       return (index*index);
//     }
//   })
//   return operator;
// }


function multiplyOddIndices(numbers) {
  return numbers.map(function(number) {
    if(numbers.indexOf(number) % 2 === 0) { 
      return number; 
    } else {
      return number * numbers.indexOf(number) 
    }
  })
}

module.exports = multiplyOddIndices;

// function multiplyOddIndices(numbers) {
//   operator = numbers.map(function(index){
//     // for(let i; i<imp.length; i++){
//     //   if(index % 3 ) {
//     //   return index;
//     // } else {
//     //   return (index * index);
//     // }
//     numbers = (index * index);
//   })
//   return operator;
// }


module.exports = multiplyOddIndices;



// function pair(chiffre){
// 	chiffre=parseInt(chiffre);
// 	return ((chiffre & 1)=='0')?true:false;
// }

// function getFoodCategories(foods) {
//   question = foods.map(function(repas){
//     if(repas['isVegetarian'] === true){
//       return `${repas['food']} is suitable for vegetarians`;
//     }else {
//       return `${repas['food']} is not suitable for vegetarians`;

//     }
//   });
//   return question;
// }







