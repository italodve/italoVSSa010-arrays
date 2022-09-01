const Array1 = [1,3,7,2,9]  
const Array2 = ["chocolata", "maça", "pipoca"]                 //1
const Array3 = [1, "pão", false ] 
                                                                      
                                                
console.log(Array1)
console.log(Array2)                                        
console.log(Array3) 


console.log(Array1.length)                                      //2
console.log(Array2.length)
console.log(Array3.length)  

console.log(Array1[1])

console.log(Array2[2])

console.log(Array3[3])


console.log(Array1.includes(1)) 

console.log(Array2.includes(false)) 

console.log(Array3.includes("feijão"))


const array1 = Array1.slice()                  //3
const arrayOriginal = Array2.slice()
const arraycopia = Array3.slice()

array1.push("number")
console.log(array1,Array1) 

 
arrayOriginal.splice(2,2)
console.log(Array2, arrayOriginal)


arraycopia.splice(1,1)
console.log(Array3, arraycopia)
 


