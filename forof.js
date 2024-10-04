
// write a program to print the array in reverse order
//      input:-- [1,2,3,4,5,{id:1,age:25},[1,2,3]]
// 	 ouput:-- [[1,2,3],{id:1,age:25},5,4,3,2,1]
console.log("question-1");
var arr1=[1,2,3,4,5,{id:1,age:25},[1,2,3]];
var a1=[]
for (i=arr1.length-1;i>=0;i--){
    a1.push(arr1[i])
}
console.log(a1);

//  write a program to print the string in reverse order
//  input: "vamsi"
//  output: "ismav"
//  take one more string and reverse it
console.log("question-2");
var s1="Eindhu";
var s2="";
for  (j=s1.length-1;j>=0;j--){
    s2+=s1[j]
}
console.log(s2);


//  write a program to print the age in the given array
//   input:-- [1,2,3,4,5,{id:1,age:25},[1,2,3]]
//     output:-- 25
// console.log("question-3");
// var arr2=[1,2,3,4,5,{id:1,age:25},[1,2,3]];
// for (ele of arr2){
//     if (typeof(ele)=="object"){
//         console.log(ele.age);
//         break;
//     }
// }
console.log("question-3");
var arr2=[1,2,3,4,5,{id:1,age:25},[1,2,3]];
for (ele of arr2){
    if (typeof(ele)=="object"){
        if (ele.age==undefined){
            continue;
        }
        else{
            console.log(ele.age);
        }
    }
}
