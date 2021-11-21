import axios from "axios";
import * as actions from "./index";

jest.mock("axios");

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
beforeEach(() => {
  jest.mock("axios");
});

it("getRepoList should output correct format", async () => {
  axios.get = jest.fn().mockImplementationOnce(() =>
    Promise.resolve({
      status: 200,

      data: {
        items: [
          {
            id: "1",
            name: "namme1",
            language: "Python",
            git_url: "ww.giturl",
            description: "description",
          },
          {
            id: "2",
            name: "namme2",
            language: "js",
            git_url: "ww.giturl2",
            description: "description2",
          },
        ],
        total_count: 2,
      },
      status: 200,
    })
  );

  await expect(actions.getRepoList(0, "", "desc", "any")).resolves.toEqual({
    repos,
    total_count: 2,
  });
});
