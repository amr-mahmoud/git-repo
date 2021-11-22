
import Item from "./index";

import { render,  fireEvent } from "@testing-library/react";
import { actionType } from "../../reducer/actions";


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

it("Item -- render and click star ", async () => {
  //   const dispatch = jest.fn();
  //   React.useContext = () => {
  //     dispatch;
  //   };
  const mockProps = {
    id: "1",
    name: "namme1",
    language: "Python",
    url: "ww.giturl",
    description: "description",
    starred: false,
    dispatch: jest.fn(),
  };
  let component = render(<Item {...mockProps} />);

  // mocking
  const { getByText, queryByTestId, queryAllByTestId } = component;

  //img or icon with no starr i presented with starred false
  const elem = queryByTestId("nostar-img");

  //expect data to be display correctly
  expect(getByText("Python")).toBeTruthy();

  fireEvent(
    elem,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  //expect dispatch function mocked to be called with Accepted Data
  // meaning staring data added correctly to the store
  expect(mockProps.dispatch).toHaveBeenCalled();
  expect(mockProps.dispatch).toHaveBeenCalledWith({
    payload: { id: mockProps.id },
    type: actionType.REFRESH_STAR_VISIBILITY,
  });
});

beforeEach(() => {});

it("Item -- render and noclick star ", async () => {
  //   const dispatch = jest.fn();
  //   React.useContext = () => {
  //     dispatch;
  //   };
  const mockProps = {
    id: "1",
    name: "namme1",
    language: "Python",
    url: "ww.giturl",
    description: "description",
    starred: true,
    dispatch: jest.fn(),
  };
  let component = render(<Item {...mockProps} />);

  // mocking
  const { getByText, queryByTestId, queryAllByTestId } = component;

  //img or icon with  starr i presented with starred false
  const elem = queryByTestId("star-img");

  //expect data to be display correctly
  expect(getByText("Python")).toBeTruthy();

  fireEvent(
    elem,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  //expect dispatch function mocked to be called with Accepted Data
  // meaning staring data added correctly to the store
  expect(mockProps.dispatch).toHaveBeenCalled();
  expect(mockProps.dispatch).toHaveBeenCalledWith({
    payload: { id: mockProps.id },
    type: actionType.REFRESH_STAR_VISIBILITY,
  });
});
