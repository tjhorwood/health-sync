import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact us - Health Sync',
  description: 'Contact us',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
