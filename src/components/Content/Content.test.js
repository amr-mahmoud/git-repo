import React from "react";
import Content from "./index";
import { AppContext } from "../../provider";
import { render, act, fireEvent, waitFor } from "@testing-library/react";
import { actionType } from "../../reducer/actions";
import * as actions from "../../actions";
import { mocked } from "ts-jest/utils";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const repos2 = [
  {
    id: "1",
    name: "namme1",
    language: "Python",
    url: "ww.giturl",
    description: "description",
    starred: false,
  },
  {
    id: "2",
    name: "namme2",
    language: "js",
    url: "ww.giturl2",
    description: "description2",
    starred: false,
  },
  {
    id: "3",
    name: "namme1",
    language: "Python",
    url: "ww.giturl",
    description: "description",
    starred: false,
  },
  {
    id: "4",
    name: "namme2",
    language: "js",
    url: "ww.giturl2",
    description: "description2",
    starred: false,
  },
  {
    id: "5",
    name: "namme1",
    language: "Python",
    url: "ww.giturl",
    description: "description",
    starred: false,
  },
  {
    id: "6",
    name: "namme2",
    language: "js",
    url: "ww.giturl2",
    description: "description2",
    starred: false,
  },
  {
    id: "7",
    name: "namme1",
    language: "Python",
    url: "ww.giturl",
    description: "description",
    starred: false,
  },
  {
    id: "8",
    name: "namme2",
    language: "js",
    url: "ww.giturl2",
    description: "description2",
    starred: false,
  },
  {
    id: "9",
    name: "namme1",
    language: "Python",
    url: "ww.giturl",
    description: "description",
    starred: false,
  },
  {
    id: "10",
    name: "namme2",
    language: "js",
    url: "ww.giturl2",
    description: "description2",
    starred: false,
  },
  {
    id: "11",
    name: "namme1",
    language: "Python",
    url: "ww.giturl",
    description: "description",
    starred: false,
  },
  {
    id: "12",
    name: "namme2",
    language: "js",
    url: "ww.giturl2",
    description: "description2",
    starred: false,
  },
  {
    id: "13",
    name: "namme1",
    language: "Python",
    url: "ww.giturl",
    description: "description",
    starred: false,
  },
];

const repos = [
  {
    id: "1",
    name: "namme1",
    language: "Python",
    url: "ww.giturl",
    description: "description",
    starred: false,
  },
  {
    id: "2",
    name: "namme2",
    language: "js",
    url: "ww.giturl2",
    description: "description2",
    starred: false,
  },
];

jest.mock("../../actions", () => ({
  getRepoList: jest.fn(),
}));

afterEach(() => {
  jest.clearAllMocks();
});

beforeEach(() => {});

it("Content -- expect rendering calling of data return on render to be correct", async () => {
  const dispatch = jest.fn();
  React.useContext = () => {
    dispatch;
  };
  let component;

  mocked(actions.getRepoList).mockResolvedValue({
    repos,
    total_count: 2,
  });
  // mocking
  await act(async () => {
    component = render(
      <AppContext.Provider
        value={{
          dispatch,
          state: { repos, total_count: 2 },
        }}
      >
        <Content />
      </AppContext.Provider>
    );
  });
  const { getByText } = component;

  //expect dispatch function mocked to be called with Accepted Data
  expect(dispatch).toHaveBeenCalled();
  expect(dispatch).toHaveBeenCalledWith({
    type: actionType.SET_REPO_DATA,
    payload: {
      repos,
      total_count: 2,
    },
  });

  expect(getByText("namme1")).toBeTruthy();
});

it("Content -- expect rendering calling of data return on render to be correct", async () => {
  const dispatch = jest.fn();
  React.useContext = () => {
    dispatch;
  };
  let component;

  mocked(actions.getRepoList).mockResolvedValue({
    repos,
    total_count: 2,
  });
  // mocking
  await act(async () => {
    component = render(
      <AppContext.Provider
        value={{
          dispatch,
          state: { repos, total_count: 2 },
        }}
      >
        <Content />
      </AppContext.Provider>
    );
  });
  const { getByText, queryAllByTestId } = component;

  const elem = queryAllByTestId("article-item");

  //expect same number of elements as input
  expect(elem).toHaveLength(2);

  //expect same text and values
  expect(getByText(repos[0].name)).toBeTruthy();
  expect(getByText(repos[1].name)).toBeTruthy();
});

it("Content -- expect pagination to work perfectly OnClick", async () => {
  const dispatch = jest.fn();
  mocked(actions.getRepoList).mockResolvedValue({
    repos: repos2,
    total_count: 22,
  });
  React.useContext = () => {
    dispatch;
  };

  let component;

  // mocking
  await act(async () => {
    component = render(
      <AppContext.Provider
        value={{
          dispatch,
          state: { repos: repos2, total_count: 1200 },
        }}
      >
        <Content />
      </AppContext.Provider>
    );
  });
  const { queryByTestId } = component;

  const elem = queryByTestId("content-loadmore");

  expect(actions.getRepoList).toHaveBeenCalled();
  expect(actions.getRepoList).toHaveBeenCalledWith(0, "desc", "Any");

  fireEvent(
    elem,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  // make sure correct page increment and data input
  expect(actions.getRepoList).toHaveBeenCalled();
  expect(actions.getRepoList).toHaveBeenCalledWith(1, "desc", "Any");
  expect(dispatch).toHaveBeenCalled();

  //expect same number of elements as input
});

it("Content -- expect on order toggle to work perfectly OnClick", async () => {
  const dispatch = jest.fn();
  mocked(actions.getRepoList).mockResolvedValue({
    repos: repos2,
    total_count: 22,
  });
  React.useContext = () => {
    dispatch;
  };

  let component;

  // mocking
  await act(async () => {
    component = render(
      <AppContext.Provider
        value={{
          dispatch,
          state: { repos: repos2, total_count: 1200 },
        }}
      >
        <Content />
      </AppContext.Provider>
    );
  });
  const { getByText, queryByTestId, queryAllByTestId, queryByRole } = component;

  let elem = queryByRole("toggle-button");

  expect(actions.getRepoList).toHaveBeenCalled();
  expect(actions.getRepoList).toHaveBeenCalledWith(0, "desc", "Any");

  fireEvent(
    elem,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  // expect call for new data is made with asc attribute
  expect(actions.getRepoList).toHaveBeenCalled();
  expect(actions.getRepoList).toHaveBeenCalledWith(0, "asc", "Any");
  expect(dispatch).toHaveBeenCalled();

  // expect another click to toggle back to desc
  elem = queryByRole("toggle-button");

  fireEvent(
    elem,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  expect(actions.getRepoList).toHaveBeenCalled();
  expect(actions.getRepoList).toHaveBeenCalledWith(0, "desc", "Any");
  //sexpect same number of elements as input
});

it("Content -- expect error handling to work perfectly", async () => {
  let errMsg = "Too Many requests please wait";
  const dispatch = jest.fn();
  mocked(actions.getRepoList).mockRejectedValue(new Error(errMsg));
  React.useContext = () => {
    dispatch;
  };

  let component;

  // mocking
  await act(async () => {
    component = render(
      <AppContext.Provider
        value={{
          dispatch,
          state: { repos: repos2, total_count: 1200 },
        }}
      >
        <Content />
      </AppContext.Provider>
    );
  });
  const { queryByRole } = component;

  let errorElem = queryByRole("error-message");

  await expect(actions.getRepoList).rejects.toThrowError(
    "Too Many requests please wait"
  );

  //expect the error element to exist with same error message
  expect(errorElem).toHaveTextContent(errMsg);
});
