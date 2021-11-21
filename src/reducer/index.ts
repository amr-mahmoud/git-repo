import { InitialStateType } from "../provider/initState";
import { actions, actionType } from "./actions";
import StorageService from "../services/StorageService";

const reducer = (state: InitialStateType, action: actions) => {
  switch (action.type) {
    case actionType.SET_REPO_DATA: {
      return {
        ...action.payload,
      };
    }

    case actionType.REFRESH_STAR_VISIBILITY: {
      const { id } = action.payload;
      const { repos } = state;

      let storeArray = StorageService.getItem("starredRepos");

      const newRepos = repos.map((repo) => {
        const starStatus = storeArray && storeArray[id];
        return repo.id === id ? { ...repo, starred: starStatus } : repo;
      });

      return {
        ...state,
        repos: newRepos,
      };
    }

    default:
      return state;
  }
};

export default reducer;
