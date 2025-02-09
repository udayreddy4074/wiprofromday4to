create database day12
use day12
create schema wipro
--grant control on which to username
--grant select,alter,uppdate,drop on emp to uday
--revoke  control on which from username
--revoke select,alter,uppdate,drop on emp from uday
--deny 
CREATE TABLE Employees (
    EmpID INT PRIMARY KEY,
    Name VARCHAR(100),
    Age INT,
    DepartmentID INT,
    Salary DECIMAL(10,2),
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50)
);

INSERT INTO Departments (DepartmentID, DepartmentName) 
VALUES 
(1, 'IT'),
(2, 'HR'),
(3, 'Finance'),
(4, 'Marketing');

INSERT INTO Employees (EmpID, Name, Age, DepartmentID, Salary) 
VALUES 
(101, 'Alice Johnson', 30, 1, 60000.00),
(102, 'Bob Smith', 28, 2, 50000.00),
(103, 'Charlie Brown', 35, 3, 70000.00),
(104, 'David White', 40, 1, 80000.00),
(105, 'Emily Davis', 25, 4, 45000.00);

BEGIN TRANSACTION;

UPDATE Employees SET Salary = Salary + 1000 WHERE EmpID = 1;

-- Creating a savepoint is not supported in SQL Server, so we use an alternative approach.
DECLARE @BeforeIncreaseSalary DECIMAL(10,2);

-- Store the original salary before further update
SELECT @BeforeIncreaseSalary = Salary FROM Employees WHERE EmpID = 1;

UPDATE Employees SET Salary = Salary + 500 WHERE EmpID = 101;

-- Instead of ROLLBACK TO SAVEPOINT, we use a conditional rollback
IF @@ERROR <> 0
BEGIN
    -- Revert to original salary manually
    UPDATE Employees SET Salary = @BeforeIncreaseSalary WHERE EmpID = 1;
    
    ROLLBACK;
END
ELSE
BEGIN
    COMMIT;
END;

USE YourDatabase;

-- Grant permission (if previously given)
GRANT SELECT, INSERT ON Employees TO user1;

-- Verify permissions
SELECT * FROM sys.database_permissions WHERE grantee_principal_id = USER_ID('user1');

-- Revoke permission
REVOKE SELECT, INSERT ON Employees FROM user1;

-- Verify permissions again
SELECT * FROM sys.database_permissions WHERE grantee_principal_id = USER_ID('user1');

SELECT COUNT(*) AS TotalEmployees FROM Employees;
SELECT AVG(Salary) AS AvgSalary FROM Employees;
SELECT SUM(Salary) AS TotalSalary FROM Employees;
SELECT MAX(Salary) AS HighestSalary FROM Employees;
SELECT MIN(Salary) AS LowestSalary FROM Employees;

SELECT * FROM Employees WHERE Age > 30;
SELECT * FROM Employees ORDER BY Salary DESC;
SELECT DepartmentID, COUNT(*) FROM Employees GROUP BY DepartmentID;
SELECT DepartmentID, COUNT(*) FROM Employees GROUP BY DepartmentID HAVING COUNT(*) > 5;


SELECT UPPER(Name) FROM Employees; -- Converts to uppercase
SELECT LOWER(Name) FROM Employees; -- Converts to lowercase
SELECT LEN(Name) FROM Employees; -- Gets length of Name
SELECT GETDATE(); -- Returns current date & time
SELECT DATEDIFF(YEAR, '2000-01-01', GETDATE()); -- Calculates difference in years
SELECT DATEDIFF(MONTH, '2000-01-01', GETDATE());
SELECT DATEDIFF(YEAR, '2000-06-15', GETDATE()) AS Age;

CREATE PROCEDURE GetEmployeesByDepartment @DeptID INT
AS
BEGIN
    SELECT * FROM Employees WHERE DepartmentID = @DeptID;
END;

EXEC GetEmployeesByDepartment 1;



SELECT * FROM Employees WHERE Salary > (SELECT AVG(Salary) FROM Employees);
CREATE INDEX idx_emp_salary ON Employees(Salary);

select *from Departments
select *from Employees
ALTER TABLE Employees ADD CONSTRAINT chk_salary CHECK (Salary > 20000);
--inner join
SELECT e.Name, d.DepartmentName 
FROM Employees e
INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID;
SELECT *
FROM Employees e
INNER JOIN Departments d ON e.DepartmentID = d.DepartmentID;
------
SELECT e.Name, d.DepartmentName 
FROM Employees e
LEFT JOIN Departments d ON e.DepartmentID = d.DepartmentID;
SELECT *
 FROM Employees e
LEFT JOIN Departments d ON e.DepartmentID = d.DepartmentID;
-------
SELECT e.Name, d.DepartmentName 
FROM Employees e
RIGHT JOIN Departments d ON e.DepartmentID = d.DepartmentID;
SELECT *
FROM Employees e
RIGHT JOIN Departments d ON e.DepartmentID = d.DepartmentID;
------
SELECT e.EmpID, e.Name, d.DepartmentName 
FROM Employees e 
CROSS JOIN Departments d;

SELECT e1.Name AS Employee, e2.Name AS Manager FROM Employees e1 JOIN Employees e2 ON e1.ManagerID = e2.EmpID;
---views
CREATE VIEW EmployeeDetails AS
SELECT e.EmpID, e.Name, e.Salary, d.DepartmentName
FROM Employees e
LEFT JOIN Departments d ON e.DepartmentID = d.DepartmentID;

select *from Employeedetails

ALTER VIEW EmployeeDetails AS
SELECT e.EmpID, e.Name, e.Age, e.Salary, d.DepartmentName
FROM Employees e
LEFT JOIN Departments d ON e.DepartmentID = d.DepartmentID;

DROP VIEW EmployeeDetails;