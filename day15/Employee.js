function getEmployee(emp) {
    return "".concat(emp.name, " ").concat(emp.dept, " ").concat(emp.id);
}
var emp1 = {
    id: 11,
    name: 'uday',
    dept: 'hr'
};
console.log(getEmployee(emp1)); //object inistiation meth
// object destruction
function getEmployeed(_a) {
    var name = _a.name, dept = _a.dept, id = _a.id;
    return "".concat(name, " ").concat(dept, " ").concat(id);
}
var emp2 = {
    id: 11,
    name: 'uday',
    dept: 'hr'
};
console.log(getEmployeed(emp2));
