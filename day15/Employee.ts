interface Employee
{
    id:number,
    name:string,
    dept:string
}
function getEmployee(emp:Employee)
{
    return`${emp.name} ${emp.dept} ${emp.id}`
}
let emp1={
id:11,
name:'uday',
dept:'hr'
}
        console.log(getEmployee(emp1))//object inistiation meth


// object destruction
function getEmployeed({name,dept,id}:Employee)
{
    return`${name} ${dept} ${id}`
}       
let emp2={
    id:11,
    name:'uday',
    dept:'hr'
}
console.log(getEmployeed(emp2))
