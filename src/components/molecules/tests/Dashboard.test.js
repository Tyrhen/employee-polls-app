import { render, screen, fireEvent } from "@testing-library/react";
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

    const unansweredTab = screen.getByTestId("unansweredTab");
    const answeredTab = screen.getByTestId("answeredTab");

    //assert
    expect(unansweredTab).toHaveAttribute("aria-selected", "true");
    expect(answeredTab).toHaveAttribute("aria-selected", "false");
  });

  it("should render the answered polls when the 'answered' tab is clicked", () => {
    //arrange
    const tree = (
      <MemoryRouter>
        <Provider store={store}>
          <Dashboard />
        </Provider>
      </MemoryRouter>
    );

    render(tree);

    const unansweredTab = screen.getByTestId("unansweredTab");
    const answeredTab = screen.getByTestId("answeredTab");

    //act
    fireEvent.click(answeredTab);

    //assert
    expect(unansweredTab).toHaveAttribute("aria-selected", "false");
    expect(answeredTab).toHaveAttribute("aria-selected", "true");
  });
});
