import React, { useEffect, useContext, useState } from "react";
import {
  ContentWrapper,
  RepoList,
  OptionsWrapper,
  LoadMoreButton,
} from "./Content.style";
import { getRepoList } from "../../actions";
import { AppContext } from "../../provider";
import { actionType } from "../../reducer/actions";
import { InitialStateType } from "../../provider/initState";
import Item from "../Item";
import Select from "../Select";
import OrderToggle from "../OrderToggle";

const languageList = [
  "Any",
  "Python",
  "C#",
  "JavaScript",
  "C",
  "HTML",
  "PHP",
  "C++",
];

const Content: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [select, setSelect] = useState(languageList[0]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("desc");

  useEffect(() => {
    
    getRepoList(0, order, select).then((res: InitialStateType) =>
      dispatch({ type: actionType.SET_REPO_DATA, payload: res })
    );
  }, [dispatch, select, order]);

  const { repos, total_count } = state || {};

  const loadMoreClickHandler = (newPage: number) => {
    getRepoList(newPage, order, select).then((res: InitialStateType) => {
      const tempRes = { ...res };
      tempRes.repos = [...repos, ...res.repos];
      dispatch({ type: actionType.SET_REPO_DATA, payload: tempRes });
    });
    setPage(newPage);
  };

  return (
    <ContentWrapper>
      <OptionsWrapper>
        <Select
          select={select}
          setSelect={setSelect}
          languageList={languageList}
          title={"Language:"}
        />
        <OrderToggle order={order} setOrder={setOrder} />
      </OptionsWrapper>
      {repos && repos.length > 0 && (
        <RepoList>
          {repos.map((repo) => (
            <Item key={repo.id} {...repo} />
          ))}
        </RepoList>
      )}
      {total_count > page + 1 * 10 && (
        <LoadMoreButton onClick={() => loadMoreClickHandler(page + 1)}>
          Load More
        </LoadMoreButton>
      )}
    </ContentWrapper>
  );
};

export default Content;
