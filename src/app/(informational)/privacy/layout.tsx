import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Health Sync',
  description: 'Privacy Policy',
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
