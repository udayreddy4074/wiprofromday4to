create database day11p2
use day11p2
create table Employee(Empid int,Empname char(40),city char(201))
alter table Employee add depname char
alter table Employee add salary decimal
alter table Employee drop column salary
insert into Employee values(11,'Zara','Pune','Coding',50000)
select*from Employee
insert into Employee(Empid,Empname,city) values(12,'Zahir','Pune')

insert into Employee values(13,'Zara','Pune','Coding',50000),
               (14,'Sameera','Chennai','HR',90000),
			   (15,'Punit','Bangalore','Developer',60000),
			   (16,'Shreya','Pune','HR',80000)

update Employee set salary=salary+1000 where dept='coding' or dept='developer'

delete from Employee where empid=14

--DQL - Select
select * from EMployee

select Empname,Dept from Employee where Dept = 'Coding'

--Operators - And,Or,IN,Between,Like
select * from Employee

select * from Employee where salary>55000 and dept='coding'
select * from Employee where salary>55000 or dept='coding'
select * from Employee where salary between 50000 and 70000
select * from EMployee where dept in('Coding','hr')
--% any number of characters , _ denotes one character
select * from Employee where empname like '%a' --last character is a
select * from Employee where empname like '%i_'
--like operator with list of characters
select * from Employee where empname like '%[ya]' --last character shall be either y or a
select * from Employee where empname like '[sz]%'

select * from Employee where empname like '[s-z]%' 
select * from Employee where empname like '[^s-z]%' 

select * from Employee where empname not like '%a'

create table Product(Prodid int not null,proName varchar(30),price decimal(10,2),Qty int)

select proname,price,qty,price * qty as TotalPrice from Product

	
alter table Product add discount varchar(6)

select * from Product where discount like '10!%' escape '!'

alter table Product add discount varchar(6)

select * from Product where discount like '30!%' escape '!'

insert into product(prodid,proname,price,qty) values(113,'iPod',700,2)


insert into product(prodid,proname,price,qty,discount) values(117,'iPodcon',700,2,'30%')

alter table product add constraint UQ_Proname unique(proname)
insert into product(prodid,proname,price,qty,discount) values(116,'iPodcon1',700,2,'30%')
insert into product(prodid,proname,price,qty,discount) values(112,'iPodcon2',700,2,'50%')
delete from product where proname='ipod'

alter table product add primary key(prodid)

--Foreign Key 
create table department(did int primary key,deptname varchar(20) not null unique)

insert into department values(1,'HR'),(2,'Developer'),(3,'Testing')--meth1
select *from department
insert into department (did,deptname)values(4,'stu'),(5,'tech')--2 way

--Employee table - drop column dname
alter table employee drop column dept

alter table employee add deptid int foreign key references department(did)

alter table employee add deptid int

alter table employee 
add constraint FK_deptid foreign key(deptid) references department(did)

insert into employee(empid,empname,city,salary) values(19,'anu','pune',40000)

--default 
alter table employee add constraint df_did default 1 for deptid

--check - 
alter table employee add check(salary >=50000)