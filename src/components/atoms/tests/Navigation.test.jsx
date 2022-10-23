import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Navigation from "../Navigation";
import { MemoryRouter } from "react-router";
import mockStore from "../../../mocks/MockStore";
import createTestStore from "../../../utils/CreateTestStore";

let store;
beforeEach(() => {
  store = createTestStore(mockStore);
});

describe("When navigation is shown", () => {
  it("clicking the home icon should route to '/'", () => {
    let tree = (
      <MemoryRouter>
        <Provider store={store}>
          <Navigation handleLogout={() => jest.fn()} />
        </Provider>
      </MemoryRouter>
    );

    render(tree);
    const homeIcon = screen.getByTestId("homeIcon");

    expect(homeIcon).toHaveAttribute("href", "/");
  });
  it("clicking the leaderboard icon should route to '/leaderboard'", () => {
    let tree = (
      <MemoryRouter>
        <Provider store={store}>
          <Navigation handleLogout={() => jest.fn()} />
        </Provider>
      </MemoryRouter>
    );
    render(tree);
    const leaderboardIcon = screen.getByTestId("leaderboardIcon");

    expect(leaderboardIcon).toHaveAttribute("href", "/leaderboard");
  });
  it("clicking the new poll icon should route to '/add'", () => {
    let tree = (
      <MemoryRouter>
        <Provider store={store}>
          <Navigation handleLogout={() => jest.fn()} />
        </Provider>
      </MemoryRouter>
    );
    render(tree);
    const newPollIcon = screen.getByTestId("newPollIcon");
    expect(newPollIcon).toHaveAttribute("href", "/add");
  });
  it("clicking the logout icon should route to '/'", () => {
    let mockHandleLogout = jest.fn();
    let tree = (
      <MemoryRouter>
        <Provider store={store}>
          <Navigation handleLogout={mockHandleLogout} />
        </Provider>
      </MemoryRouter>
    );
    render(tree);
    const logoutIcon = screen.getByTestId("logoutIcon");

    fireEvent.click(logoutIcon);
    expect(mockHandleLogout).toHaveBeenCalled();
  });
});
