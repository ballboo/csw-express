let _ = require('lodash')
let customer = [
    { name: 'John', salary: 190 },
    { name: 'Jack', salary: 90 },
    { name: 'Jim', salary: 690 } 
]
// let customer = [...customer, {name: 'Joo', salary:300 }]
customer.push({name: 'Joo', salary:300 })


let sortCustomer =  _.sortBy(customer,'salary',reverse() 
console.log(_.sortBy(customer,'salary',reverse()))
console.log(_.slice(sortCustomer, 0,1))

customer =  JSON.stringify(customer) 

console.log(JSON.stringify(customer)) //convert JSON to String 

customer = JSON.parse(customer)
//console.log(customer[0].name )

// customer.sort ( (a,b)=> (b.salary>a.salary)?-1:1 ) // เรียงอันดับจากน้อยไปมาก

// console.log(customer.slice (0,2)) //ดัดอาเรย์

// //console.log(customer[2],name + '-' + customer[2].salary )
// customer.map( (item)=> {
//     console.log(item.name + '-' + item.salary)
// })