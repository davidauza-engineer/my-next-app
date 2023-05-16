import contacts from 'my-next-app/api/contacts';
import Link from 'next/link';

// @ts-ignore
export default function Contact({ params }) {
  const contact = contacts.find(contact => contact.id === params.contactId);
  // @ts-ignore
  const [first, last] = contact?.name.split(' ');
  return (
      <>
        <Link href="/contacts">Back</Link>
        <h2>Contact {last.toUpperCase()}, {first}</h2>
      </>
  )
}
