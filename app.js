// alert("Pakistan Zindabad")

// Q1

// var itemsArray = [
//     {
//         name: "juice",
//         price: 50,
//         quantity: 3
//     },
//     {
//         name: "cookie",
//         price: 30,
//         quantity: 9
//     },
//     {
//         name: "shirt",
//         price: 880,
//         quantity: 1
//     },
//     {
//         name: "pen",
//         price: 100,
//         quantity: 2
//     }
// ];
// console.log(itemsArray)

// var totalPrice = 0;
// itemsArray.map((item)=>{
// totalPrice += (item.price * item.quantity) 
// })

// console.log(totalPrice)


// Q2

// var std = {
//     name:"Shahwar",
//     email:"Shahwarali@gmai.com",
//     password: 123456,
//     age: 20,
//     gender: "Male",
//     city: "Karachi",
//     country: "Pakistan"
// }
// console.log(std)

// var check1 = "age" in std;
// console.log(check1)

// var check2 = "country" in std;
// console.log(check2)

// var check1 = "firstName" in std;
// console.log(check1)

// var check2 = "firstName" in std;
// console.log(check2)


// Q3

// function Person(name,age,city,religion,country){
//     this.personName = name,
//     this.personAge = age,
//     this.personReligion = religion,
//     this.personCity = city,
//     this.personCountry = country
// }

// console.log(Person)

// var myPerson1 = new person("Shahwar",20,"Islam","Karachi","Pakistan")
// var myPerson2 = new person("Muzammil",21,"Islam","Karachi","Pakistan")
// var myPerson3 = new person("Faisal",19,"Islam","Karachi","Pakistan")
// var myPerson4 = new person("Bilal",23,"Islam","Karachi","Pakistan")
// var myPerson5 = new person("Umair",23,"Islam","Karachi","Pakistan")

// console.log(myPerson1)
// console.log(myPerson2)
// console.log(myPerson3)
// console.log(myPerson4)
// console.log(myPerson5)


// Q4

// function addBtn() {
//     function People(name, gender, address, education, profession) {
//         this.name = name,
//             this.gender = gender,
//             this.address = address,
//             this.education = education,
//             this.profession = profession
//     }
//     var name = document.getElementById("name");
//     var gender = document.querySelector('input[name="gender"]:checked');
//     var address = document.getElementById("address");
//     var education = document.getElementById("education");
//     var profession = document.getElementById("profession");

//     var pop = new People(name.value, gender.value, address.value, education.value, profession.options[profession.selectedIndex].value);
//     console.log(pop);
// }

