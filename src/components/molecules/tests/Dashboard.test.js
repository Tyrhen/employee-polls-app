import { render, screen } from "@testing-library/react";
import Dashboard from "../Dashboard";
import { Provider } from "react-redux";
import React from "react";
import { MemoryRouter } from "react-router";
import createTestStore from "../../../utils/CreateTestStore";
import mockStore from "../../../mocks/MockStore";

let store;

beforeEach(() => {
  store = createTestStore(mockStore);
});

describe("When the dashboard is rendered", () => {
  it("should render the dashboard showing the unanswered polls by default", () => {
    //arrange
    const tree = (
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>
    );

    render(tree);
    //assert
    // expect(screen.getByText("Would you rather...")).toBeInTheDocument();
  });
});
