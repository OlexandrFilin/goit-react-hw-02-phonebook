import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts, onDelCont }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(el => {
        return (
          <li key={el.id} className={css.itemContLst}>
            <button className={css.btnDelCont} onClick={() => onDelCont(el.id)}>
              del
            </button>
            {el.name} : {el.number}
          </li>
        );
      })}
    </ul>
  );
};
