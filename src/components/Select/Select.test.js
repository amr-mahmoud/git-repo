import Select from "./index";
import { render, fireEvent } from "@testing-library/react";
import { actionType } from "../../reducer/actions";
import { languageList } from "../../constants";

afterEach(() => {
  jest.clearAllMocks();
});

beforeEach(() => {});

it("Select UI -- render and initial display to be correct ", async () => {
  // mocking
  const mockProps = {
    select: languageList[0],
    setSelect: jest.fn(),
    languageList,
    title: "title1",
  };
  let component = render(<Select {...mockProps} />);

  const { queryByRole, queryAllByRole, queryByText } = component;

  //title to be displayed as data provided
  let title = queryByRole("select-title");

  expect(title).toHaveTextContent("title1");
  expect(queryByText(mockProps.title)).toBe(title);

  //expect header to be equal selected value
  const header = queryByRole("select-header");
  expect(header).toHaveTextContent(mockProps.select);

  // expect no items is rendered initially
  const elems = queryAllByRole("select-item");
  expect(elems).toHaveLength(0);
});

it("Select UI -- display of select and selecting item to be working  ", async () => {
  // mocking
  const mockProps = {
    select: languageList[0],
    setSelect: jest.fn(),
    languageList,
    title: "title1",
  };
  let component = render(<Select {...mockProps} />);

  const { queryByRole, queryAllByRole, queryByText } = component;

  //expect header to be equal selected value
  const header = queryByRole("select-header");
  // expect no items is rendered initially
  let elems = queryAllByRole("select-item");
  expect(elems).toHaveLength(0);

  // display of select item list after click
  fireEvent(
    header,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );

  elems = queryAllByRole("select-item");
  expect(elems).toHaveLength(mockProps.languageList.length);

  const item = elems[3];
  fireEvent(
    item,
    new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
    })
  );
  //choosing items closes  fires
  // new selection function with correct data
  expect(mockProps.setSelect).toHaveBeenCalledWith(mockProps.languageList[3])

  //choosing items closes the list
  elems = queryAllByRole("select-item");
  expect(elems).toHaveLength(0);
});
