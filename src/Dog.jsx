import { memo } from "react";

const Dog = memo(function ({ food }) {
  console.log("Dog rerender !");
  return "I am a dog and I eat " + food;
});

export { Dog };
