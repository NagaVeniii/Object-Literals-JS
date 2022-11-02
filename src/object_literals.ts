let firstname = "Govind";
let secondname = "Phate";

let person = {
    firstname : firstname,
    secondname : secondname
};

console.log(person.firstname);
console.log(person.secondname);
console.log(person.firstname +" "+ person.secondname)


//Using Object literals in function 

let person2 = {
    firstname : firstname,
    secondname:secondname
}

function createperson(firstname,secondname,age){

    let fullname = firstname + " " + secondname;
    
    return{
        firstname,
        secondname,
        fullname,
        age,
        isolder() {
             return age > 60 
        }
    }
    } 

let someperson = createperson("Noor", "Fathe", "32");
console.log(someperson.firstname);
console.log(someperson.secondname);
console.log(someperson.fullname);
console.log(someperson.age);
console.log(someperson.isolder())


// 1.objects properties can have spaces in between 
// 2.variables can be used as properties but it can be accessed by using "[]" brackets.

let l = "lastname"
let person3 = {

    "first name" : "Vasa" , //1
    [l] : "Samhitha" //2
    
}

console.log(person)



//Array Destructuring : we use square brackets for array destructuring

let arr = ["Gaur", "Gopal", "Male"]

//let [fname , lname , gender] = arr;    //assigning required all argument values

//let [fname , lname] = arr;             //assigning required no.of argument values

//let[,, gender] = arr;                  //assigning required  argument value 

//let[fname , ...element] = arr;         //using rest operator



//Object Destructing : We use curly braces for object destructuring

let person4 ={

    fname : "Godavari",
    lname : "Ayer",
    gender : "Female"
}

let {fname , lname , gender} = person4 ;

console.log(person4)



//String templates 

// this is to concatenate the strings 

let customer = "Anirudh";
let greet = "Welcome" +" " + customer + " " + "Hearty Wishes"; //general method
console.log(greet);

let greetingss = `Welcome ${customer} hearty wishes           
                  We are pleased with "your" presence.
                  'Thank you for choosing us.'  `;     //using back ticks can make string concatenation more  easier
        //like single and double quotes can be used without a worry , placeholders can be used to add customized details like ${customer} in the example.
                                                        
console.log(greetingss);



//for of loop : its just like for loop in python 

let words = ["apple", "banana" , "grape"]

for( let i of words){
    console.log(i)
}