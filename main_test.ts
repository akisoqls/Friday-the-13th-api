import { assertEquals } from "jsr:@std/assert";
import { isFriday13th } from "./isFriday13th.ts";
import { getNextFriday13th } from "./nextFriday13th.ts";

Deno.test("2024/12/20 is Friday, but not the 13th", () => {
  const theLastFridayThe13thOf2024 = new Date();
  theLastFridayThe13thOf2024.setFullYear(2024);
  theLastFridayThe13thOf2024.setMonth(11);
  theLastFridayThe13thOf2024.setDate(20);
  const result = isFriday13th(theLastFridayThe13thOf2024);
  assertEquals(result, false);
});

Deno.test("2024/12/15 is not Friday the 13th", () => {
  const theLastFridayThe13thOf2024 = new Date();
  theLastFridayThe13thOf2024.setFullYear(2024);
  theLastFridayThe13thOf2024.setMonth(11);
  theLastFridayThe13thOf2024.setDate(15);
  const result = isFriday13th(theLastFridayThe13thOf2024);
  assertEquals(result, false);
});

Deno.test("2024/12/13 is Friday the 13th", () => {
  const theLastFridayThe13thOf2024 = new Date();
  theLastFridayThe13thOf2024.setFullYear(2024);
  theLastFridayThe13thOf2024.setMonth(11);
  theLastFridayThe13thOf2024.setDate(13);
  theLastFridayThe13thOf2024.setHours(13);
  const result = isFriday13th(theLastFridayThe13thOf2024);
  assertEquals(result, true);
});

Deno.test("Next Friday", () => {
  const expectedDate = new Date();
  expectedDate.setFullYear(2025);
  expectedDate.setMonth(5);
  expectedDate.setDate(13);

  const date = new Date();
  date.setFullYear(2024);
  date.setMonth(11);
  date.setDate(13);
  const nextFriday = getNextFriday13th(date);

  assertEquals(nextFriday.getDate(), 13);
  assertEquals(nextFriday.getDay(), 5);
  assertEquals(nextFriday.getFullYear(), expectedDate.getFullYear());
  assertEquals(nextFriday.getMonth(), expectedDate.getMonth());
  assertEquals(nextFriday.getDate(), expectedDate.getDate());
  assertEquals(nextFriday.getDay(), expectedDate.getDay());
});
