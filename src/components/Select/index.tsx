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
      <SelectTitle role="select-title">{title}</SelectTitle>
      <SelectContainer>
        <SelectHeader role="select-header" onClick={() => setVisible(!visible)}>
          {select}
        </SelectHeader>
        {visible && (
          <SelectListWrapper>
            <SelectList>
              {languageList.map((item) => (
                <SelectItem
                  role="select-item"
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
