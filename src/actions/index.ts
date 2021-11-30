import axios from "axios";
import StorageService from "../services/StorageService";

interface StringArray {
  [index: string]: string;
}

export const getRepoList: Function = async (
  page = 0,
  order: "desc",
  lang = "Any"
) => {
  const language = lang !== "Any" ? `+language:${lang}` : "";
  let res = await axios
    .get(
      `https://api.github.com/search/repositories?q=created:>2021-11-13${language}&sort=stars`,
      { params: { order, page, per_page: 10 } }
    )
    .catch(() => {
      return { data: {}, status: 403 };
    });
  const { data, status } = res || {};

  if (status === 200) {
    let repos = data.items.map((elem: Record<string, string>) => {
      const { name, description, language, git_url, id } = elem;
      const storeArray: StringArray = StorageService.getItem("starredRepos");
      const starStatus = storeArray && storeArray[id] ? true : false;

      return {
        id,
        name,
        description,
        language,
        url: git_url,
        starred: starStatus,
      };
    });
    return { total_count: data.total_count, repos };
  }
  throw Error("Too Many requests please wait");
};
