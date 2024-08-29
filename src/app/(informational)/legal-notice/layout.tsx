import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Notice - Health Sync',
  description: 'Legal Notice',
};

export default function LegalNoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
