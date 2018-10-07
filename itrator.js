//Itrators example

// function getName(name){
//   let NextIndex=0;
// return {
// next : function(){
  
// return NextIndex<name.length?
//  {val:name[NextIndex++],done:false}:{done:true}
// }
// }
// }
// let namearr=['sulman','ahmed','awan'];
// let names=getName(namearr);
// console.log(names.next().val);
// console.log(names.next().val);
// console.log(names.next().val);
// console.log(names.next());


//Itrators Example 2

// function NewArray(employee){
//  let NextIndex=0;
//  return{
// newValue : function(){
// if(NextIndex<employee.length){
// return {Value:employee[NextIndex++], done:false}
// }else{
//  return {done:true}
// }
// }
//  }
// }
// const employee=['ali','Khan','sulman'];
// const employeeName=NewArray(employee);
// console.log(employeeName.newValue().Value);
// console.log(employeeName.newValue().Value);
// console.log(employeeName.newValue().Value);

//Generators example

// function* generatName(){

// yield 'sulman'
// yield 'Ahmed'
// yield 'Khan'

// }
// const get=generatName();
// console.log(get.next());
// console.log(get.next());
// console.log(get.next());
// console.log(get);


//Id Creation

function* Idcreator(){

let index=0;
while(true){
yield index++
}
}
let result=Idcreator();

console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);
console.log(result.next().value);