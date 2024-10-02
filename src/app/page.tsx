import Image from 'next/image';
import styles from './page.module.css';
import { Alert } from './Alert';

export default function Home() {
  return (
    <main>
      <Alert heading="Something">Everything is really good now!</Alert>
    </main>
  );
}
