import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Home from "@/app/page";

test("renders the home heading", () => {
  render(<Home />);

  expect(
    screen.getByRole("heading", { level: 1, name: "Hello World" }),
  ).toBeDefined();
});
