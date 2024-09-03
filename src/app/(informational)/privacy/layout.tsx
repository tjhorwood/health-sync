import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Health Sync collects, uses, and protects your personal information. Our Privacy Policy outlines our commitment to safeguarding your data and respecting your privacy.',
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
