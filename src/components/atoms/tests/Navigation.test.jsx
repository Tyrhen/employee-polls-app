import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Navigation from "../Navigation";
import { MemoryRouter } from "react-router";
import mockStore from "../../../mocks/MockStore";
import createTestStore from "../../../utils/CreateTestStore";

let store;
beforeEach(() => {
  store = createTestStore(mockStore);
});

describe("When navigation is show", () => {
  it("should render navigation", () => {
    const tree = (
      <MemoryRouter>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </MemoryRouter>
    );
    render(tree);

    expect(screen.getByTestId("homeIcon")).toBeInTheDocument();
  });
});
