import { loadUsers } from "./calculator";

test("loadUsers returns a list of users", async () => {
  const users = await loadUsers();
  expect(users.length).toBe(10);
});

test('the user has properties "name" and "email"', async () => {
  const users = await loadUsers();
  expect(users[0]).toHaveProperty("name");
  expect(users[0]).toHaveProperty("email");
  expect(users[0]).toHaveProperty("address");
});
