const Intern = require("../lib/Intern");

test("To set school via constructor", () => {
  const school = "SYDUNI";
  const e = new Intern("Foo", 1, "test@mail.com", school);
  expect(e.school).toBe(school);
});

test("Can get school via getSchool()", () => {
  const testValue = "SYDUNI";
  const e = new Intern("Foo", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const value = "Intern";
  const e = new Intern("Jame", 1, "jame@mail.com", "College");
  expect(e.getRole()).toBe(value);
});
