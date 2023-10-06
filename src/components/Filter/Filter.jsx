import css from 'components/Filter/Filter.module.css';

export const Filter = ({ handleFilter, filter }) => {
  return (
    <label htmlFor="" className={css.labelFltr}>
      Finh contact by name
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
