// 9. djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest
// "Najot ta'lim is the best" yozuvini hosil qiling


// let str = "djsta'limldjaiorwgmNAJOTasoijmomisoijdsaoidjthemoisasdoonionbest"

// let target = "Najot ta'lim is the best"
// let newOne = str.split("")
// let strTar = target.split(" ")

// let arr = newOne.forEach((val, ind) => {
//     console.log(val);
// });



// 10. var searchMatrix = function(matrix, target) {};
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
// Output: true
// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false

// let arr = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// let target = 3

// function findTarget(n) {
//     let result = false
//     arr.forEach(val => {
//         console.log(val);
//         if (val.includes(target)) {
//             result = true
//         }
//     })
//     console.log(result);
// }
// findTarget(arr)


// 12. sizda qandaydir string bor va shundagi oxirgi so’zning length ni toping

// let str = "salom nima gap"
// let new_arr = str.split(" ")
// let lastArr = new_arr[new_arr.length-1]
// let lastArrLen = lastArr.length
// console.log(lastArrLen);



// 13. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan 
// iborat array qaytaring. (Object.entries, map, join)
// Input: {a: 2, b: 5, c: 7
// Output: ['a2', 'b5', 'c7']

// let obj = {a: 2, b: 5, c: 7}

// let result = Object.entries(obj).map(([key,val]) => key + val )
// console.log(result);



// 14. var findMedianSortedArrays = function(nums1, nums2) {};
// nums1 = [1,2], nums2 = [3,4]
// result: 2.5
// arraylar qushilib va sort lanib urtasidagi son topilsin

// let arr1 = [1,2]
// let arr2 = [3,4]
// let colArr = [...arr1, ...arr2]

// let total = 0
// let result
// for(let item of colArr) {
//     total += item
//     result = total / colArr.length
// }
// console.log(result);



// 15.Ixtiyoriy array yarating va unda 1 martadan ko’p ishtirok 
// etgan item larni boshqa array ga ko’chiradigan function yarating


// let arr = [1,2,3,2,5,2]
// let new_arr = []
// for (let i = 0; i < arr.length; i++) {
//     for (let g = 0; g < i; g++) {
//         if (arr[i] == arr[g]) {
//             new_arr.push(arr[i])
//         }   
//     }
// }
// console.log(new_arr);



// 16. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
// let products = [
//     {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
//     ];


// let products = [
//     {id: 6,name: "Smarthpone", price: 12000, rating: 4.5, discount: 20},
//     {id: 2,name: "Acer", price: 12000, rating: 4.3, discount: 10},
//     {id: 1,name: "Mac book", price: 17000, rating: 4.7, discount: 40},
//     {id: 4,name: "HP", price: 21000, rating: 4.1, discount: 16},
//     ];


//     function delObj(n) {
//         let delObj = 4
//         let result = products.filter(val => val.id !== delObj )
//         console.log(result);
//     }
//     delObj(products)
    


// 17. Arraydagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
// Input: [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//     ];
//     Output: 54


// let arr = [
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
//     ];
    
// arr.sort((a,b) => a.age - b.age)

// let young = arr[0].age
// let old = arr[arr.length-1].age
// let result = Math.abs(young - old)

// console.log(young,"eng yoshi");
// console.log(old,"eng kattasi");
// console.log(result,"oradagi farq");