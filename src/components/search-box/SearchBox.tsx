import { ChangeEventHandler } from "react";

import "./search-box.styles.css";

interface IProps {
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  className: string;
}

const SearchBox = ({ placeholder, onChangeHandler, className }: IProps) => {
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
