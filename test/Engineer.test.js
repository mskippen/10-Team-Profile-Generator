const Engineer = require("../lib/Engineer");

test("To set Github profile on constructor", () => {
  const GHprofile = "testing";
  const e = new Engineer("Bar", 1, "jame@mail.com", GHprofile);
  expect(e.github).toBe(GHprofile);
});

test("getRole() function should return Enginner", () => {
  const value = "Engineer";
  const e = new Engineer("Bar", 1, "test@mail.com", "GitHubUser");
  expect(e.getRole()).toBe(value);
});

test("To get GitHub username using getGithub() method", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@mail.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
