import ContactItem from './ContactItem';
import css from './Contacts.module.css';

const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.length > 0 ? (
        contacts.map(({ name, id, number }) => {
          return (
            <li key={id}>
              <p>
                {name} : {number}
              </p>
              <button type="button" onClick={() => onDeleteContact(id)}>
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
