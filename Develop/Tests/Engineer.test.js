const engineer = require("../lib/Engineer");

test("Can set Engineer's GitHub account using constructor", () => {
    const gitHubName = "GitHubUser";
    const obj = new engineer("Engineer", 1, "testemail@email.com", gitHubName);
    expect(obj.github).toBe(gitHubName);
});

test("getRole() for engineer should return \"Engineer\"", () => {
    const role = "Engineer";
    const obj = new engineer("Role", 1, "testemail@email.com", "GitHubUser");
    expect(obj.getRole()).toBe(role);
});

test("Can get GitHub username through getGithub()", () => {
    const gitHubName = "GitHubUser";
    const obj = new engineer("Role", 1, "testemail@email.com", gitHubName);
    expect(obj.getGithub()).toBe(gitHubName);
});
