import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
    
ReactDOM.render(<App />, document.getElementById('root'));


// class Animal {

//   constructor(name, age){
//     this.name = name;
//     this.age = age;

//   }

//   speak(){
//     console.log("I am " + this.name + " and I am " + this.age + " years old");
//   }

// }


// class Mammel extends Animal{
//   constructor(name, age, furcolor, speed){
//     super(name, age);
//     this.furcolor = furcolor;
//     this.speed = speed;
//   }

//   speak(){
//     console.log("I am " + this.name + " and I am " + this.age + " years old, My furcolor is" + this.furcolor+ " and my speed is " +this.speed);
//   }


// }


// const mam = new Mammel('Elephant', 50, "Gray", "2KM")
// mam.speak()

// const lion = new Animal("Lion", 3)
// lion.speak()

// console.log(lion)