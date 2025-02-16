/*const mark: number[] = [70,80,90,87,95,90];

const withbonus = mark.map(m => m+5); //applying manipulation to each element in array without modifying the original one

console.log(withbonus);
console.log(mark);

const marks:number[]=[1,2,3,4,5];//array
const mt=marks.map(m=>m+1);//map used to itterate for all variables and use copy of the original one not change  for the orignal collection
console.log(mt);
console.log(marks);

//maps in class
class emp
{
    empid:number;
    empname:string;
    salary:number;
    constructor(empid:number,empname:string,salary:number)
   {
    this.empid=empid;
     this.empname = empname;
     this.salary = salary;
   }
}
//array creatiing
let esa:emp[]=[new emp(1,'uday',10000),
    new emp(2,'kumar',20000),
    new emp(3,'Ranav',60000),
    new emp(4,'Reshmi',70000),
    new emp(5,'Raghav',750000),
]

let empm=esa.map(em=>em.salary+500);
console.log(empm);

let uempm=esa.map(e=>new emp(e.empid,e.empname,e.salary+200));
console.log(uempm);

let updatednew =esa.filter(e=>e.salary>50000);
console.log(updatednew);

let updatedne =esa.filter(e=>e.salary>60000)
                .map(e => new emp(e.empid,e.empname,e.salary +5000));
console.log(updatedne);

const totsal = esa.reduce((acc,emp)=>acc+emp.salary,0)
console.log(totsal);*/

const marks: number[] = [70,80,90,87,95,90];

const withbonus = marks.map(m => m+5); //applying manipulation to each element in array without modifying the original one

console.log(withbonus);
console.log(marks);


class Employee{
    empid:number;
    empname:string;
    salary:number;
   constructor(empid:number,empname:string,salary:number)
   {
    this.empid=empid;
     this.empname = empname;
     this.salary = salary;
   }
};

let emps : Employee[] = [new Employee(1,'Raghav',50000),
    new Employee(2,'Ranav',60000),
    new Employee(3,'Reshmi',70000),
    new Employee(4,'Raghav',750000),
]

let updateemp =emps.map(em =>em.salary + 2000);
console.log(updateemp);


let updatedemp =emps.map(em =>new Employee(em.empid,em.empname,em.salary + 2000));
console.log(updatedemp);


let updatednew =emps.filter(e=>e.salary>50000);
console.log(updatednew);

let updatedne =emps.filter(e=>e.salary>60000)
                .map(e => new Employee(e.empid,e.empname,e.salary +5000));
console.log(updatedne);


let values = [10,20,30,40,50];
let resofreduce = values.reduce((acc,num) => acc+num,0);
console.log(resofreduce);


const totsal = emps.reduce((acc,emp)=>acc+emp.salary,0)
console.log(totsal);