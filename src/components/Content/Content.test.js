import React from "react";
import Content from "./index";
import { AppContext } from "../../provider";
import { render, act, fireEvent } from "@testing-library/react";
import { actionType } from "../../reducer/actions";
import * as actions from "../../actions";

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
  getRepoList: async () =>
    Promise.resolve({
      repos,
      total_count: 2,
    }),
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

  console.log("elem", actions.getRepoList);
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
describe("second suite", () => {
  beforeEach(() => {
    actions.getRepoList = jest.fn((val) => Promise.resolve({ data: {} }));
  });
  it("Content -- expect pagination to work perfectly OnClick", async () => {
    const dispatch = jest.fn();

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
    const { getByText, queryByTestId, queryAllByTestId } = component;

    const elem = queryByTestId("content-loadmore");

    console.log("elem", actions.getRepoList);
    console.log("elem", actions);

    fireEvent(
      elem,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(actions.getRepoList).toHaveBeenCalled();
    //expect same number of elements as input
  });
});
