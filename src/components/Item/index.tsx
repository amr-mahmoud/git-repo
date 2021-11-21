import  { useContext } from "react";
import { AppContext } from "../../provider";
import StorageService from "../../services/StorageService";
import { actionType } from "../../reducer/actions";
import { ItemProps } from "./Item";
import nostar from "../../assets/images/star.png";
import star from "../../assets/images/favourite.png";
import {
  ItemContent,
  ItemTitle,
  FieldWrapper,
  FieldLabel,
  FieldText,
  ItemTitleWrapper,
  ItemStarImage,
} from "./Item.style";

interface StringArray {
  [index: string]: string;
}
const Item = (props: ItemProps) => {
  const { name, description, url, language, starred, id } = props;
  const { dispatch } = useContext(AppContext);

  const starOnClick = () => {
    const storeArray: StringArray =
    StorageService.getItem("starredRepos") || {};
    storeArray[id] = id;
    StorageService.setItem("starredRepos", storeArray);
    dispatch({ type: actionType.REFRESH_STAR_VISIBILITY, payload: { id } });
  };

  const destarOnClick = () => {
    const storeArray: StringArray =
      StorageService.getItem("starredRepos") || {};
    if (!storeArray[id]) return;
    delete storeArray[id];
    StorageService.setItem("starredRepos", storeArray);
    dispatch({ type: actionType.REFRESH_STAR_VISIBILITY, payload: { id } });
  };

  return (
    <ItemContent>
      <ItemTitleWrapper>
        <ItemTitle>{name}</ItemTitle>
        
        <ItemStarImage
          onClick={starred ? () => destarOnClick() : () => starOnClick()}
          src={starred ? star : nostar}
        />
      </ItemTitleWrapper>
      <FieldWrapper>
        <FieldLabel>Git Url: </FieldLabel>
        <FieldText>{url}</FieldText>
      </FieldWrapper>
      <FieldWrapper>
        <FieldLabel>Language: </FieldLabel>
        <FieldText>{language}</FieldText>
      </FieldWrapper>
      {description && description.length > 0 && (
        <FieldWrapper>
          <FieldLabel>Description: </FieldLabel>
          <FieldText>{description}</FieldText>
        </FieldWrapper>
      )}
    </ItemContent>
  );
};

export default Item;
