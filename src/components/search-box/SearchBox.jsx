import "./search-box.styles.css";

const SearchBox = (props) => {
  const { placeholder, onChangeHandler, className } = props;
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
