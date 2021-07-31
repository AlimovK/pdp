
// var student = [
//     {
//         name: `Kamron`,
//         status: `student`,
//         age: `21`
//     },
//     {
//         name: `Alisher`,
//         status: `developer`,
//         age: `25`
//     },
//     {
//         name: `Samandar`,
//         status: `plumber`,
//         age: `32`
//     }
// ];
// student.map((value, index) => {
//     student.surname = `Alimov`  ==> Xammasi uchun ishlaydi!
//     student[0].surname = `Alimov`
//     student[1].surname = `Aliev`
//     student[2].surname = `Xoliqov`
//     console.log(value);
//})



// var list = [
//     {
//     id: 1,
//     name: `Kamron`,
//     age: 21
// },
// {
//     id: 2,
//     name: `Alisher`,
//     age: 24
// },
// {
//     id: 3,
//     name: `Sanjar`,
//     age: 25
// },
// {
//     id: 4,
//     name: `Abdulloh`,
//     age: 18
// },
// {
//     id: 5,
//     name: `Abubakr`,
//     age: 20
// },
// {
//     id: 6,
//     name: `Ali`,
//     age: 28
// },
// {
//     id: 7,
//     name: `Mamur`,
//     age: 21
// },
// {
//     id: 8,
//     name: `Bekzod`,
//     age: 23
// },
// {
//     id: 9,
//     name: `Azamat`,
//     age: 34
// },
// {
//     id: 10,
//     name: `Muzaffar`,
//     age: 21
// },
// ];  
// // list.sort((a,b)=>b.id-a.id)
// // console.log(list);


// function sortName(){
//  stud =   list.sort ((a,b)=> a.name.toLowerCase().localCompare(b.name.toLowerCase()))
 
//  console.log(stud);
// }
// sortName()



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
