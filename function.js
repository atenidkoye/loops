// function x (name , time ){
//     console.log(`hello there good ${name} ${time}`);
// }
// x('marion' , 'morning')

// const para = document.querySelector('div.error');
// para.forEach(paras =>{
//    console.log(paras);
// })
// console.log(para[0]);
// para.innerHTML = '<h1>my new thing</h1>';

// para.forEach(paras =>{
//     console.log(paras.innerText);
//     paras.innerHTML = '<H1>new wrold</H1>'
// });
//para.innerHTML += "<h2> this is a new h2 </h2>"
// const people = ['den' , 'josh' , 'james']
// people.forEach(person => {
//     para.innerHTML+= `<p> ${person}</p>`
// })

// const link = document.querySelector('a')
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.com');
// link.innerText = 'thenetninja'

// const mssg = document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class' ,'success')
// mssg.setAttribute('style', 'color: red')

//const msg = document.querySelector('h1')
//msg.innerHTML += '<h6> the dom </h6>'
//console.log(msg.style);
//console.log(msg.style.color);
// msg.style.margin = '50px';
// msg.style.color = 'blue';

// Function declearation 

// function dosomething (){
//     alert('hello function')
// };

// dosomething()


//Function Expression

// let dosomething = function (num) {
//     let base = num * 2;
//     let squareRoot = Math.floor(Math.sqrt(base))
//     alert(squareRoot);
// }
// // dosomething()

// dosomething(4)

//Constructor function

// function car (model, brand, color){
//     this.model = model;
//     this.brand  = brand;
//     this.color = color;
// }

// let toyota = new car('2013' , 'toyota', 'red')
// let honda= new car('2014' , 'honda', 'red')
// let nissan = new car('2013' , 'nissan', 'red')

// console.log(toyota);
// console.log(honda);
// console.log(nissan);

// function multiplication (num1,num2){
//     return num1 * num2
// }
// let result = multiplication(3, 4)
// console.log(result);

// function division(num1, num2){
//     return num1 / num2
// }

// let result2 = division(10,2)
// console.log(result2);

// function greet(name,time){
//     return `good, ${time} ${name}`
// }

// let greeting = greet('michael' ,'morning')
// console.log(greeting);

// function splitword (word, delimiter){
//     return word.split(delimiter)
// }

// let mysplitword = splitword('elephant', '')

let x = function(num){
    //return num % 2 === 0
    if(num % 2 === 0){
        alert ('Even number')
    }

        else alert('odd number')
    }

    x(8)

// let x = prompt('Enter a number')
//  x = function(num){
//      if (num % 2 ===0){
//          alert('even number')
//      }
//      else{
//          alert('odd number')
//      }
//      x(10)
//  }
     