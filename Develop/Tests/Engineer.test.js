const engineer = require("../lib/Engineer");

test("Can set Engineer's GitHUb account using constructor", () => {
    const gitHubName = "GitHubUser";
    const obj = new engineer("Engineer", 1, "testemail@email.com", gitHubName);
    expect(obj.github).toBe(gitHubName);
});
