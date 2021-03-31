const intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const School = "UCLA";
    const obj = new Intern("Foo", 1, "testemail@email.com", School);
    expect(obj.school).toBe(School);
});

