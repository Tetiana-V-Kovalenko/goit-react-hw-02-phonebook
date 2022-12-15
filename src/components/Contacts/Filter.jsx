const Filter = ({ query, func }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={query} onChange={func} />
    </label>
  );
};
export default Filter;
