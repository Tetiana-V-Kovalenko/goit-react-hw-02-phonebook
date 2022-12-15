import css from './Contacts.module.css';
const Filter = ({ query, func }) => {
  return (
    <label className={css.labelFilter}>
      Find contacts by name
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={query}
        onChange={func}
      />
    </label>
  );
};
export default Filter;
