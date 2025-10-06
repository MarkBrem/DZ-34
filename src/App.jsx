import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';

export const App = () => {
  return (
    <>
      <ContactList />;
      <Filter />
      <ContactForm />
    </>
  );
};
