import { describe, expect, it, test } from "vitest";
import Regex from "../src/index.js";

describe("SQL Pattern Regex Tests", () => {
  test.each([
    "SELECT * FROM users",
    "INSERT INTO table VALUES ('data')",
    "UPDATE users SET name = 'John' WHERE id = 1",
    "DELETE FROM orders WHERE status = 'cancelled'",
    "DROP TABLE customers",
    "UNION SELECT password FROM accounts",
    "TABLE users",
    "OR 1=1",
    "AND username='admin'",
    "-- Comment attack",
    "/* Hidden attack */",
    'SELECT "username" FROM users'
  ])("sqlPattern - should match SQL keyword: %s", (sql) => {
    expect(Regex.sqlPattern.test(sql)).toBe(true);
  });

  test.each([
    "This is a normal sentence",
    "I like tables and chairs",
    "Union of two sets is useful in math",
    "Select your favorite item from the menu",
    "I will drop by later",
    "And then he left",
    "Random text with numbers 12345",
    "Commenting on a post is fun",
    "Asterisk * is used for multiplication"
  ])("sqlPattern - should NOT match safe string: %s", (input) => {
    expect(Regex.sqlPattern.test(input)).toBe(false);
  });

  test.each([
    "Hello' OR 1=1 --",
    "User input: UNION SELECT password FROM users",
    "DROP TABLE IF EXISTS admin_accounts",
    "INSERT INTO users (username, password) VALUES ('hacker', '12345')",
    "DELETE FROM sessions WHERE user_id = 5",
    "Normal text /* hidden SQL */ more text",
    "Trying this -- will break the query"
  ])("sqlPattern - should match SQL injection attempt: %s", (sql) => {
    expect(Regex.sqlPattern.test(sql)).toBe(true);
  });

  test.each([
    "User typed: DROP TABLE users; it's dangerous!",
    "Your query: SELECT * FROM transactions WHERE amount > 100",
    "Hidden inside text UNION SELECT name FROM employees",
    "Don't use DELETE FROM orders unless necessary"
  ])("sqlPattern - should detect SQL commands inside complex text: %s", (sql) => {
    expect(Regex.sqlPattern.test(sql)).toBe(true);
  });

  test.each([
    "Can you select an option?",
    "I will drop you a message later",
    "This and that are different",
    "A comment on the post is appreciated",
    "This is a union of two ideas"
  ])("sqlPattern - should NOT match non-SQL-related words: %s", (sql) => {
    expect(Regex.sqlPattern.test(sql)).toBe(false);
  });
});