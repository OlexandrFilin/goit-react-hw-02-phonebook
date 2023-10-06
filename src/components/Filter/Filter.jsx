import css from 'components/Filter/Filter.module.css';

export const Filter = ({ handleFilter, filter }) => {
  return (
    <label htmlFor="" className={css.labelFltr}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        className={css.inpfiltr}
        onChange={handleFilter}
      />
    </label>
  );
};
