const intern = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee("Sydney");
    expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Gabby";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 10;
    const e = new Employee("Employee", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "testemail@email.com";
    const e = new Employee("Employee", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Gabby";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 10;
    const e = new Employee("Employee", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "testemail@email.com";
    const e = new Employee("Employee", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Gabby", 1, "testemail@email.com");
    expect(e.getRole()).toBe(testValue);
});

    