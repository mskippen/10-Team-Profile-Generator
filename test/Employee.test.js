const Employee = require("../lib/Employee");

test("Can instantiate employee instance", () => {
  const employee = new Employee();
  expect(typeof employee).toBe("object");
});

test("To set email in constructor argument", () => {
  const email = "testMail@mail.com";
  const e = new Employee("Foo", 1, email);
  expect(e.email).toBe(email);
});

test("To get role using getRole()", () => {
  const role = "Employee";
  const e = new Employee(role);
  expect(e.getRole()).toBe(role);
});

test("To get email using getEmail()", () => {
  const email = "test@mail.com";
  const e = new Employee("Lin", 123, email);
  expect(e.getEmail()).toBe(email);
});

test("To get id via getId()", () => {
  const id = 1234;
  const e = new Employee("Lin", 1234, "test@mail.com");
  expect(e.getId()).toBe(id);
});

test("To get name via getName()", () => {
  const name = "Brown";
  const e = new Employee("Brown", 123, "test@mail.com");
  expect(e.getName()).toBe(name);
});

test("To set name in constructor arguments", () => {
  const name = "Alice";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("To set id via constructor argument", () => {
  const id = 100;
  const e = new Employee("Foo", id);
  expect(e.id).toBe(id);
});
