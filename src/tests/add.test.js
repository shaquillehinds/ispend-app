const add = (a, b) => a + b;

test("Should add two numbers", () => {
  const result = add(3, 4);

  expect(result).toBe(7);
});

const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should return a string", () => {
  const string = generateGreeting("Shaq");
  expect(string).toBe(`Hello Shaq!`);
});

test("should generate greeting for no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hello Anonymous!");
});
