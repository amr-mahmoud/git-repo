import axios from "axios";
import * as actions from "./index";

jest.mock("axios");

const mockres = {
  total_count: 50,
  data,
};

beforeEach(() => {
  jest.mock("axios");
});

it("getArticleById should output correct format", async () => {
  axios.get = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      status: 200,
      data: { response: { data: { items: [], total_count: 2 }, status: 200 } },
    })
  );

  expect(actions.getRepoList(0, "", "desc", "any")).resolves.toEqual({
    headline: "USAA Offers Service for Car Shoppers",
    pub_date: "2010-08-31T11:30:02+0000",
    description: "USAA offers a car-buying service and iPhone app.,",
    id: "fakeId",
  });
});
