import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Need assistance or have questions about Health Sync's products and services? Contact us today! We're here to support your journey to better health. Reach out via phone, email, or our online form.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
