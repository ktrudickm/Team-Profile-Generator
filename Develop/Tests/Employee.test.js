const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const obj = new Employee("Sydney");
    expect(typeof (obj)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Gabby";
    const obj = new Employee(name);
    expect(obj.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const id = 10;
    const obj = new Employee("Employee", id);
    expect(obj.id).toBe(id);
});

test("Can set email via constructor argument", () => {
    const email = "testemail@email.com";
    const obj = new Employee("Employee", 1, email);
    expect(obj.email).toBe(email);
});

test("Can get name via getName()", () => {
    const empName = "Gabby";
    const obj = new Employee(empName);
    expect(obj.getName()).toBe(empName);
});

test("Can get id via getId()", () => {
    const empId = 10;
    const obj = new Employee("Employee", empId);
    expect(obj.getId()).toBe(empId);
});

test("Can get email via getEmail()", () => {
    const empEmail = "testemail@email.com";
    const obj = new Employee("Employee", 1, empEmail);
    expect(obj.getEmail()).toBe(empEmail);
});

test("getRole() should return \"Employee\"", () => {
    const employee = "Employee";
    const obj = new Employee("Gabby", 1, "testemail@email.com");
    expect(obj.getRole()).toBe(employee);
});

    