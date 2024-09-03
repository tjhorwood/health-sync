import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    "Review the terms and conditions for using Health Sync's website and services. Understand our policies on privacy, refunds, and more. Ensure compliance with our terms for a seamless experience.",
};

export default function TermsConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
