const Manager = require("../lib/Manager");

test("Tp set office number on constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Martin", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("To get office number using getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Kate", 1, "test@mail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return Manager", () => {
  const testValue = "Manager";
  const e = new Manager("Jake", 1, "test@mail.com", 100);
  expect(e.getRole()).toBe(testValue);
});
