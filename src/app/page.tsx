import { Alert } from './Alert';

export default function Home() {
  return (
    <main>
      <Alert heading="Something" closable>
        Everything is really good now!
      </Alert>
    </main>
  );
}
