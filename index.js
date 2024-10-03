// const n = 6;
// for(let i = 1; i<=n; i++){
//     let star = ''
//     for(let j = 1; j<=i; j++){
//         star+='*'
//     }
//     console.log(star)
// }
// console.log('\n')

// var arr = [1,2,3,[1,2,[1]]]

// function flatten(arr){
//     return arr.flat(2)
// }
// console.log(flatten(arr))
// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error('There was a problem with your fetch operation:', error));

// axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => console.log(response.data))
//   .catch(error => console.error('There was a problem with your Axios request:', error));

// Array.prototype.mapp = function (){
//   let output = []
//   for (let i=0; i < this.length-1; i++){
//     output.push(this[i] * 2)
//   }
//   return output;

// let ar = [1,2,3,4]
// console.log(ar.mapp())
// console.log(mapp(ar))

// function linearSearch (arr, target){
//    for(let i=0; i < arr.length - 1; i++){
//     if(arr[i] === target){
//       return i
//     }
//    }
// }

// console.log(linearSearch([1,2,3,4,5], 4))

// function summ (a, b ){
//   let sum = a + b
//   return sum;
// }

// console.log(summ(1, 2))

// class Stack {
//   constructor() {
//     this.stack = [];
//   }

//   push(element) {
//     this.stack.push(element);
//   }

//   pop() {
//     this.stack.pop();
//   }

//   isEmpty() {
//     return this.size() === 0;
//   }
//   size() {
//     return this.stack.length;
//   }
//   displayItems() {
//     let itemsInStack = "";
//     for (let i = 0; i < this.size(); i++) {
//       itemsInStack += this.stack[i] + " ";
//     }
//     return itemsInStack;
//   }
// }

// const myStack = new Stack();
// console.log(myStack.push(5));
// console.log(myStack.push(4));
// console.log(myStack.stack);
// // console.log(myStack.pop())
// console.log(myStack.push(4));
// console.log(myStack.displayItems());

// //QUEUE
// class Queue {
//   constructor() {
//     this.queue = [];
//   }

//   enqueue(element) {
//     this.queue.push(element);
//   }

//   dequeue() {
//      this.queue.shift();
//   }

//   isEmpty() {
//     return this.size() === 0
//   }

//   size(){
//    return this.queue.length
//   }

//   displayQueue(){
//     let itemsQueue = ''
//     for(let i=0; i < this.size(); i++){
//         itemsQueue += this.queue[i] + ' '
//     }
//     return itemsQueue
//   }
// }

// const myQueue = new Queue()
// console.log(myQueue.enqueue(6))
// console.log(myQueue.enqueue(7))
// console.log(myQueue.dequeue())
// console.log(myQueue.displayQueue())

// Promise.resolve('hello')
// .then(value =>  console.log(value))

// fetch('https://jsonplaceholder.typicode.com/todos/5') // Replace with a valid URL
//   .then(res => res.json())
//   .then(data => console.log('DATA', data))
//   .catch(error => console.error('There was a problem with the fetch operation:', error));

//Inheritence concept
// class Abhiwan{
//   constructor(type, location){
//     this.type = type
//     this.location = location
//   }

//   employeeCount(){
//     console.log(`Abhiwan ${this.type} has 50 employee in ${this.location} office`)
//   }
//   salary(){
//     console.log('Salary is 30k fixed')
//   }
// }

// let detail = new Abhiwan('Software Development', 'Noida')
// console.log(detail.employeeCount())

// class Branch extends Abhiwan{
//   newLocation(){
//     console.log('location is Gurugram')
//   }
//   salary(){
//     super.salary()
//      console.log('1000 Attendence bonus added')
//   }
// }

// let check = new Branch('Gaming', 'Gurugram')
// check.employeeCount()
// check.salary()


// async function asyncFunction(){
//   try{
//     const result = await console.log('Gaurav');   
//   } catch (error) {
//     console.error('error');
//   } finally{
//     console.log('final')
//   }
// }
// asyncFunction()


// class Stack {
//   constructor(){
//     this.stack = []
//   }
//   push(item){
//     this.stack.push(item)
//   }
//   pop(){
//     return this.stack.pop()
//   }
//   peek(){
//     return this.stack[length-1]
//   }
//   isEmpty(){
//     return this.stack.length === 0
//   }
//   displayStack(){
//     return this.stack
//   }
// }

// const myStack = new Stack()
// console.log(myStack.isEmpty())
// myStack.push(2)

// myStack.push({name : 'Gaurav'})
// console.log(myStack.isEmpty())
// console.log(myStack.displayStack())
// console.log(myStack.isEmpty())


// console.log("TEST", )

// //Promises in javascript
// var userLoggedIn = true;
// var age=6;


// var promise = new Promise ((resolve, reject)=>{
//   setTimeout(()=>{
//       if(userLoggedIn && age==6 ){
//           resolve("userLoggedIn");
//       }
//       else{
//           reject("not LoggedIn");
//       }
      
//   }, 1000)
//   setTimeout(()=>{             //if user logged out after login
//     userLoggedIn = false;
//   },2000)
// })



// promise.then((suces )=>{
//   console.log(suces)
// })
// .then(( )=>{
//   console.log('2')
// })

// .catch((fail)=>{
//   console.log(fail);
// });
// console.log('end')
