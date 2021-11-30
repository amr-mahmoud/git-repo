import React, { useEffect, useContext, useState } from "react";
import {
  ContentWrapper,
  RepoList,
  OptionsWrapper,
  LoadMoreButton,
  ErrorMessageLabel,
} from "./Content.style";
import { getRepoList } from "../../actions";
import { AppContext } from "../../provider";
import { actionType } from "../../reducer/actions";
import { InitialStateType } from "../../provider/initState";
import Item from "../Item";
import Select from "../Select";
import OrderToggle from "../OrderToggle";
import { languageList } from "../../constants";

const Content: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [select, setSelect] = useState(languageList[0]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState("desc");
  const [error, setError] = useState("");

  useEffect(() => {
    getRepoList(0, order, select)
      .then((res: InitialStateType) =>
        dispatch({ type: actionType.SET_REPO_DATA, payload: res })
      )
      .catch((e: Error) => {
        setError(e.message);
      });
  }, [dispatch, select, order]);

  useEffect(() => {
    if (error.length > 0) {
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  }, [error]);

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
      {error.length > 0 && (
        <ErrorMessageLabel role="error-message">{error}</ErrorMessageLabel>
      )}
      {repos && repos.length > 0 && (
        <RepoList>
          {repos.map((repo) => (
            <Item key={repo.id} {...repo} dispatch={dispatch} />
          ))}
        </RepoList>
      )}
      {total_count > page + 1 * 10 && (
        <LoadMoreButton
          data-testid="content-loadmore"
          onClick={() => loadMoreClickHandler(page + 1)}
        >
          Load More
        </LoadMoreButton>
      )}
    </ContentWrapper>
  );
};

export default Content;
