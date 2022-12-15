import React from 'react';

// import css from './FormPhonebook.module.css';

class FormPhonebook extends React.Component {
  static defaultProps = {
    name: '',
    number: '',
  };
  state = {
    name: this.props.name,
    number: this.props.number,
  };
  saveData = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  addContact = e => {
    e.preventDefault();

    this.props.onFormSubmit(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.addContact}>
        <label>
          Name
          <input
            onChange={this.saveData}
            value={this.state.name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={this.saveData}
            value={this.state.number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default FormPhonebook;
