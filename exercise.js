// //1
// var num = [1,2,3,4,5,6,7,8,9] 
// sum = 0 
// num.forEach((value,index)=>{
//     if (index >= 2 && index <= 6)
//     console.log(sum+=value);
// })
// //2
// var num = [1,2,3,4,5,6,7,8,9] 
// sum = 0 
// num.slice(2,6).forEach((value,index)=>{
//     sum+=value;
// })
//     console.log(sum);
// //3
// var num = [1,2,3,4,5,6,7,8,9] 
// per = num.reduce((result,item)=>{
//     console.log(result+item);
//     return result + item
// },0)
//     console.log(per);



// var obj = [
//     {
//         id: 5,
//         name: "Davron",
//         age:15
//     },
//     {
//         id: 4,
//         name: `Alisher`,
//         age:23
//     }, {
//         id: 3,
//         name: `Anvar`,
//         age:19
//     }, {
//         id: 2,
//         name: `Mansur`,
//         age:7
//     }
// ];
// function find (id){
// var arr =  obj.filter((value) => value.id === id)
// console.log(arr);
//     }
// find(2)



//todo yoshi 10 dan yuqori bo'lgan studentlani oyligi yig'indisini  topish kerak   

var obj = [
    {
        id: 5,
        name: "Davron",
        age:15,
        solary: 130
    },
    {
        id: 4,
        name: `Alisher`,
        age:23,
        solary: 10
    }, 
    {
        id: 3,
        name: `Anvar`,
        age:19,
        solary: 30
    }, 
    {
        id: 2,
        name: `Mansur`,
        age:7,
        solary: 54
    },
    {
        id: 1,
        name: "Davron",
        age:15,
        solary: 32
    },
    {
        id: 6,
        name: `Alisher`,
        age:8,
        solary: 35
    }, 
    {
        id: 7,
        name: `Anvar`,
        age:9,
        solary: 23
    }, 
];

var stud = obj.filter((value) => value.age > 10)
    sum = 0
stud.forEach( value => {
    sum += value.solary
    });
// console.log(sum);




// todo obj bilan map ishlatish

var obj = [{
        surname:`Alimov`,
        name:`Kamron`,
        status: `student`,
},
{
        surname:`Kenjayev`,
        name:`Anvar`,
        status: `master`,
},
{
        surname:`Ismoilov`,
        name:`Ismoil`,
        status: `usta`,
}
];

var result = Object.keys(obj).map((key) => [key, obj[key]]);

// console.log(result);
