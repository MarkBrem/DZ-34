import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../redux/contactsOperations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {items.map(({ id, name, phone }) => (
          <li key={id}>
            {name}: {phone}
            <button onClick={() => dispatch(deleteContact(id))}>
              Видалити
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
