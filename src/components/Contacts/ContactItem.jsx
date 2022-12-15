const ContactItem = ({ id, name, number, onDeleteContact }) => {
  console.log(id);
  return (
    <li>
      <p>
        {name} : {number}
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
export default ContactItem;
