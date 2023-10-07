import css from 'components/Filter/Filter.module.css';

export const Filter = ({ handleFilter, filter }) => {
  return (
    <label className={css.labelFltr}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        className={css.inpfiltr}
        onChange={handleFilter}
        placeholder="Filter by name"
      />
    </label>
  );
};
