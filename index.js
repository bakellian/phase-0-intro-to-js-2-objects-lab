const employee = {
    name: "Billy",
    streetAddress: "123 Street Name",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmployee = {...employee};

    newEmployee [key] = value;

    return newEmployee;
}

const newEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "11 broadway"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

const destructiveEmployee = destructivelyUpdateEmployeeWithKeyAndValue(
    employee, 
    "streetAddress", 
    "13 Broadway"
);

destructiveEmployee;

//nondestructive
function deleteFromEmployeeByKey(employee, key) {
    const deletedEmployee = {...employee};
    delete deletedEmployee[key]
   

    return deletedEmployee;
}

const deletedEmployee = deleteFromEmployeeByKey(
    employee, "streetAddress"
)

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    delete employee.streetAddress

    return employee;
}


