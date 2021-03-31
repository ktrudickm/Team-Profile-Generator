const manager = require("../lib/Manager");
const employee = require("../lib/Employee");

test("Can set Managers office number using constructor", () => {
    const office = 10;
    const obj = new manager("Role", 1, "testemail@email.com", office);
    expect(obj.officeNum).toBe(office);
});

test("getRole() should return the role as: \"Manager\"", () => {
    const role = "Manager";
    const obj = new manager("Role", 1, "testemail@email.com", 10);
    expect(obj.getRole()).toBe(role);
});

test("Use getOffice() to get the office number", () => {
    const office = 10;
    const obj = new manager("Role", 1, "testemail@email.com", office);
    expect(obj.getOffice()).toBe(office);
})