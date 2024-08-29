import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions - Health Sync',
  description: 'Terms & Conditions',
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
