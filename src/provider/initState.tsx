export type repoType = {
  id: string;
  name: string;
  language: string;
  description?: string;
  url: string;
  starred: boolean;
};

export type InitialStateType = {
  repos: repoType[];
  total_count: number;
};

export const initState: InitialStateType = {
  repos: [],
  total_count: 0,
};
