const intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const School = "OSU";
    const obj = new intern("Role", 1, "testemail@email.com", School);
    expect(obj.school).toBe(School);
});

test("getRole() should return the role as: \"Intern\"", () => {
    const role = "Intern";
    const obj = new intern("Role", 1, "testemail@email.com", "OSU");
    expect(obj.getRole()).toBe(role);
});

test("Can get interns school name via getSchool()", () => {
    const School = "OSU";
    const obj = new intern("Role", 1, "testemail@email.com", School);
    expect(obj.getSchool()).toBe(School);
});

