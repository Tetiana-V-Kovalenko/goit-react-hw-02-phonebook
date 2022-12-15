import css from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contactList}>
      {contacts.length > 0 ? (
        contacts.map(({ name, id, number }) => {
          return (
            <li key={id} className={css.contactItem}>
              <p>
                {name} : {number}
              </p>
              <button
                className={css.btnDelete}
                type="button"
                onClick={() => onDeleteContact(id)}
              >
                X
              </button>
            </li>
          );
        })
      ) : (
        <p>There are no contact</p>
      )}
    </ul>
  );
};
export default Contacts;
