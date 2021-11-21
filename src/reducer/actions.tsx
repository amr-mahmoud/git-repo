import { InitialStateType } from "../provider/initState";

export enum actionType {
  SET_REPO_DATA = "SET_REPO_DATA",
  STAR_REPO = "STAR_REPO",
  DESTAR_REPO = "DESTAR_REPO",
  REFRESH_STAR_VISIBILITY = "REFRESH_STAR_VISIBILITY",
}

export interface setRepoData {
  type: actionType.SET_REPO_DATA;
  payload: InitialStateType;
}

export interface starRepo {
  type: actionType.STAR_REPO;
  payload: { id: string };
}

export interface destarRepo {
  type: actionType.DESTAR_REPO;
  payload: { id: string };
}

export interface refreshStar {
  type: actionType.REFRESH_STAR_VISIBILITY;
  payload: { id: string };
}

export type actions = setRepoData | starRepo | destarRepo | refreshStar;
