import Link from 'next/link';
import contacts from '../../api/contacts';

export default function Contacts() {
  return (
      <ul>
        {contacts.map(contact => {
          return <li key={contact.id}>
            <Link href={`contacts/${contact.id}`}>
              {contact.name}
            </Link>
          </li>
        })}
      </ul>
  )
}
