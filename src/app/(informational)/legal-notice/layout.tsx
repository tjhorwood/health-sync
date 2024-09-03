import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Notice',
  description:
    "Read the legal notices related to Health Sync's website, including disclaimers, copyright information, and other legal statements. Stay informed about your rights and responsibilities.",
};

export default function LegalNoticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
