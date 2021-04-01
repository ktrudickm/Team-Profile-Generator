class Employee {

    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected 'name' parameter to be a type of string, and not empty.")
        }

        this.id = id;
        this.name = name;
        this.email = email;

    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    };


}

module.exports = Employee;