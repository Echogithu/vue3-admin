/* eslint-disable no-undef */
import { mount } from "@vue/test-utils";
import Test from "../../src/components/Test.vue";
import { a } from "./a";

test("1+1=2", () => {
  console.log(a());
  console.log(mount(Test));
  expect(1 + 1).toBe(2);
});
