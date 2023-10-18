import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

export const metadata = {
  title: 'Next.js 13',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
