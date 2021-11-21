import { useState } from "react";
import {
  SelectContainer,
  SelectListWrapper,
  SelectHeader,
  SelectList,
  SelectItem,
  Wrapper,
  SelectTitle,
} from "./Select.style";
import { SelectProps } from "./Select";

const Select = (props: SelectProps) => {
  const [visible, setVisible] = useState(false);
  const { select, setSelect, languageList, title } = props;

  const onSelectItemClickHandler = (value: string) => {
    setSelect(value);
    setVisible(false);
  };

  return (
    <Wrapper>
      <SelectTitle>{title}</SelectTitle>
      <SelectContainer>
        <SelectHeader onClick={() => setVisible(!visible)}>
          {select}
        </SelectHeader>
        {visible && (
          <SelectListWrapper>
            <SelectList>
              {languageList.map((item) => (
                <SelectItem
                  key={item}
                  onClick={() => onSelectItemClickHandler(item)}
                >
                  {item}
                </SelectItem>
              ))}
            </SelectList>
          </SelectListWrapper>
        )}
      </SelectContainer>
    </Wrapper>
  );
};

export default Select;
