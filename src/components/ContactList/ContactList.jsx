import css from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts }) => {
  return (
    <ul className={css.contactList}>
      {/* {contacts.map((el, ind) => {
        return (
          <li key={ind}>
            {el.name} : {el.number}
          </li>
        );
      })} */}
    </ul>
  );
};
