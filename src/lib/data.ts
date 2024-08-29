import Aishwarya from '@/images/aishwarya.webp';
import Don from '@/images/don.webp';
import Dots from '@/images/dots.webp';
import WomanStretching from '@/images/girl-stretching.webp';
import ManStretching from '@/images/male-stretching.webp';
import ManEating from '@/images/man-eating.webp';
import Matt from '@/images/matt.webp';
import Taylor from '@/images/taylor.webp';

// About - Team
export const team = [
  {
    name: 'Matthew Beam',
    role: 'Business Strategy',
    image: Matt,
  },
  {
    name: 'Taylor Horwood',
    role: 'Technology',
    image: Taylor,
  },
  {
    name: 'Don Beam, MS, LPC',
    role: 'Exercise Strategy and Wellness',
    image: Don,
  },
  {
    name: 'Aishwarya Sahu',
    role: 'Yoga / Mindfullness Instructor',
    image: Aishwarya,
  },
];

// About - Vision
export const visionImageData = [
  {
    src: ManStretching,
    alt: 'Man Stretching',
    className: 'relative z-10 rounded-2xl mx-auto',
  },
  {
    src: WomanStretching,
    alt: 'Woman Stretching',
    className:
      'animation-delay-1000 absolute -right-6 top-0 z-20 h-40 w-40 animate-float rounded-xl lg:h-56 lg:w-56',
  },
  {
    src: ManEating,
    alt: 'Man Eating',
    className:
      'absolute -bottom-8 -left-8 z-20 h-40 w-40 animate-float rounded-xl lg:h-56 lg:w-56',
  },
  {
    src: Dots,
    alt: 'Dots',
    className:
      'animation-delay-500 absolute -bottom-1 right-24 z-0 h-56 w-20 animate-float lg:bottom-6',
  },
];

// About - FAQ
export const faqData = [
  {
    label: 'How does this app work?',
    content:
      'The app is running like any other program on your computer. Except the big difference from our competitors, we do not collect ANY of your data, location or history. It only uses what information you give it to improve your health journey!',
  },
  {
    label: 'How does work with my insurance?',
    content:
      'If you are currently covered under the Anthem Blue Cross Blue Shield umbrella, this directly connects to your Sydney health profile and allows you to have seamless integration of this app with your available benefits.',
  },
  {
    label: 'How can I maximize the benefits of this app?',
    content:
      'Follow the 80 / 20 rule! Eat healthy, get adequate sleep, reduce alcohol consumption and make an effort to get your daily sunlight outside! Bonus points of removing products from your house which contain forever chemicals and other banned ingredients in most countries.',
  },
];

// Privacy Policy
export const privacyPolcies = [
  {
    number: '1',
    name: 'Information We Collect We only collect the following information from you:',
    subpolicies: [
      {
        number: '1.1',
        name: 'Email and Username When you sign up for an account on the App, we collect your email address and chosen username. This information is necessary for us to create and manage your account. We do not collect any other personally identifiable information about you. Unless provided in your account portal.',
      },
    ],
  },
  {
    number: '2',
    name: 'Use of Collected Information We use the collected information for the following purposes:',
    subpolicies: [
      {
        number: '2.1',
        name: "Account Management We use your email address and username to create and manage your account, provide you with access to the App's features and services, and communicate with you regarding your account.",
      },
      {
        number: '2.2',
        name: 'Communication We may use your email address to send you important notices, updates, or other relevant information about the App. These communications are necessary for the operation and maintenance of the App.',
      },
      {
        number: '2.3',
        name: 'Improvements and Enhancements We may analyze the usage of the App to improve and enhance its functionality, user experience, and security.',
      },
    ],
  },
  {
    number: '3',
    name: 'Disclosure of Information We do not sell, trade, or rent your personal information to third parties. However, we may disclose your information in the following circumstances:',
    subpolicies: [
      {
        number: '3.1',
        name: 'Service Providers We may engage trusted third-party service providers to perform certain functions on our behalf, such as hosting the App, processing payments, or providing customer support. These service providers may have access to your information only to the extent necessary to perform their tasks and are obligated not to disclose or use it for any other purpose.',
      },
      {
        number: '3.2',
        name: 'Legal Requirements We may disclose your information if required to do so by law or if we believe that such action is necessary to comply with a legal obligation, protect and defend our rights or property, prevent fraud, or protect the personal safety of users of the App or the public.',
      },
    ],
  },
  {
    number: '4',
    name: 'Data Security We implement reasonable security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.',
  },
  {
    number: '5',
    name: 'Data Retention We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.',
  },
  {
    number: '6',
    name: "Children's Privacy The App is intended for use by individuals of all ages. We do not knowingly collect personal information from children without verifiable parental consent. If you are a parent or guardian and believe that your child has provided personal information to us without your consent, please contact us immediately at admin@health-sync.org. We will take steps to remove the information from our servers and terminate the child's account, if applicable. If you are under the age of 13 or the age of legal majority in your jurisdiction, you must obtain parental or guardian consent before using the App. By using the App, you represent that you have obtained such consent. Please note that it is important for parents and guardians to supervise the use of the App by children to ensure their online privacy and safety.",
  },
  {
    number: '7',
    name: 'Changes to the Privacy Policy We reserve the right to update or modify this Privacy Policy at any time. We will notify you of any material changes by posting the updated Privacy Policy on the App or sending you an email. Your continued use of the App after the effective date of the updated Privacy Policy constitutes your acceptance of the revised terms.',
  },
  {
    number: '8',
    name: 'Contact Us If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at admin@health-sync.org.',
  },
];

// Terms and Conditions
export const termsConditions = [
  {
    number: '1',
    name: 'Account Creation and Usage',
    subterms: [
      {
        number: '1.1',
        name: 'Account Registration To use the App, you may be required to create an account. When creating an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for all activities that occur under your account. If you believe your account has been compromised, please notify us immediately at admin@health-sync.org',
      },
      {
        number: '1.2',
        name: "User Responsibilities By using the App, you agree to use it responsibly and in accordance with applicable laws and regulations. You are prohibited from engaging in any unlawful, harmful, or abusive behavior while using the App. Furthermore, you agree not to: a) Violate any applicable laws, regulations, or third-party rights; b) Impersonate any person or entity or provide false information; c) Interfere with or disrupt the functionality of the App; d) Collect or harvest any information from the App without proper authorization; e) Engage in any activity that could harm, disable, overburden, or impair the App's servers or networks; f) Attempt to gain unauthorized access to any portion of the App or any other systems or networks connected to the App.",
      },
    ],
  },
  {
    number: '2',
    name: 'Intellectual Property Rights',
    subterms: [
      {
        number: '2.1',
        name: 'Ownership The App and its content, including but not limited to text, graphics, images, logos, icons, audio clips, video clips, data compilations, and software, are owned by Health Sync or its licensors and are protected by intellectual property laws.',
      },
      {
        number: '2.2',
        name: 'Limited License Subject to your compliance with these Terms, we grant you a limited, non- exclusive, non-transferable, revocable license to access and use the App for personal, non-commercial purposes. You may not modify, reproduce, distribute, create derivative works of, publicly display, or otherwise exploit any portion of the App without our prior written consent.',
      },
    ],
  },
  {
    number: '3',
    name: 'Privacy We are committed to protecting your privacy. Please review our Privacy Policy [include a hyperlink to the Privacy Policy] to understand how we collect, use, and disclose information when you use the App.',
  },
  {
    number: '4',
    name: 'Disclaimer of Warranties The App is provided on an "as-is" and "as available" basis without any warranties or representations, express or implied. We do not warrant that the App will be uninterrupted, error-free, secure, or free from viruses or other harmful components. Your use of the App is at your sole risk.',
  },
  {
    number: '5',
    name: 'Limitation of Liability To the maximum extent permitted by applicable law, in no event shall Health Sync or its directors, officers, employees, agents, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App, even if we have been advised of the possibility of such damages.',
  },
  {
    number: '6',
    name: "Indemnification You agree to indemnify and hold Health Sync and its directors, officers, employees, agents, and affiliates harmless from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your use of the App or violation of these Terms.",
  },
  {
    number: '7',
    name: 'Modifications to the App and Terms We reserve the right to modify, suspend, or discontinue the App, or any portion thereof, at any time without prior notice. We may also revise these Terms from time to time by posting the updated version on the App. Your continued use of the App after the effective date of the revised Terms constitutes your acceptance of the changes.',
  },
  {
    number: '8',
    name: 'Governing Law and Jurisdiction These Terms shall be governed by and construed in accordance with the laws of New Jersey. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of New Jersey.',
  },
  {
    number: '9',
    name: 'Severability If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.',
  },
  {
    number: '10',
    name: 'Entire Agreement These Terms constitute the entire agreement between you and Health Sync regarding the use of the App and supersede any prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and Health Sync regarding the subject matter herein.',
  },
];

// Legal Notices
export const legalNotices = [
  {
    number: '1',
    name: 'General Information The App is provided by Health Sync, a company incorporated under the laws of New Jersey, with its registered office in New Jersey. If you have any questions or concerns regarding the App or this Notice, please contact us at admin@health-sync.org',
  },
  {
    number: '2',
    name: 'Age Restrictions The App is designed for use by individuals of all ages. If you are under the age of legal majority in your jurisdiction, you must obtain parental or guardian consent before using the App. By using the App, you represent that you have obtained such consent.',
  },
  {
    number: '3',
    name: 'No Legal Advice The information and content provided on the App are for general informational purposes only and do not constitute legal advice. You should not rely on the information or content provided on the App as a substitute for professional legal advice. If you require legal advice, please consult with a qualified legal professional.',
  },
  {
    number: '4',
    name: 'No Warranty The App and its content are provided on an "as-is" and "as available" basis without any warranties or representations, express or implied. We do not warrant that the App will be uninterrupted, error-free, secure, or free from viruses or other harmful components. Your use of the App is at your sole risk.',
  },
  {
    number: '5',
    name: 'Limitation of Liability To the maximum extent permitted by applicable law, in no event shall Health Sync or its directors, officers, employees, agents, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the App, even if we have been advised of the possibility of such damages.',
  },
  {
    number: '6',
    name: 'Intellectual Property The App and its content, including but not limited to text, graphics, images, logos, icons, audio clips, video clips, data compilations, and software, are owned by Health Sync or its licensors and are protected by intellectual property laws. You may not modify, reproduce, distribute, create derivative works of, publicly display, or otherwise exploit any portion of the App without our prior written consent.',
  },
  {
    number: '7',
    name: 'Third-Party Links The App may contain links to third-party websites or resources. These links are provided for your convenience, and we do not endorse or assume any responsibility for the content, products, or services offered by third parties. You acknowledge and agree that Health Sync shall not be liable for any damages or losses arising from your use of such third-party websites or resources.',
  },
  {
    number: '8',
    name: 'Governing Law and Jurisdiction This Notice shall be governed by and construed in accordance with the laws of New Jersey. Any disputes arising out of or in connection with this Notice shall be subject to the exclusive jurisdiction of the courts of New Jersey.',
  },
  {
    number: '9',
    name: 'Severability If any provision of this Notice is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.',
  },
  {
    number: '10',
    name: 'Entire Agreement This Notice constitutes the entire agreement between you and Health Sync regarding the use of the App and supersedes any prior or contemporaneous agreements, communications, and proposals, whether oral or written, between you and Health Sync regarding the subject matter herein.',
  },
];
