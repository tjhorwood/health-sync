import { privacyPolcies } from '@/lib/data';

export default function PrivacyPolicy() {
  return (
    <>
      <section>
        <div className='mx-auto px-4 sm:px-6'>
          <div className='space-y-6 pb-12 pt-32 md:pb-20 md:pt-40'>
            {/* Section header */}
            <div
              className='mx-auto max-w-3xl text-center'
              data-aos='zoom-y-out'
            >
              <h2 className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-3xl font-extrabold leading-tighter tracking-tighter text-transparent sm:text-4xl md:text-5xl'>
                Privacy Policy
              </h2>
              <p className='mt-6 text-lg leading-8 text-gray-600'>
                Effective Date: 6/21/2023
              </p>
            </div>
            <div
              className='mx-auto max-w-screen-xl space-y-6'
              data-aos='zoom-y-out'
            >
              <p>
                Thank you for using Health Sync’s app. This Privacy Policy
                describes how Health Sync ("we," "us," or "our") collects, uses,
                and discloses information when you use the App. Your privacy is
                important to us, and we are committed to protecting your
                personal information. By accessing or using the App, you agree
                to the terms of this Privacy Policy.
              </p>
              <ul role='list' className='ml-6 space-y-6'>
                {privacyPolcies.map((item, itemIdx) =>
                  !item.subpolicies ? (
                    <li key={itemIdx} className='flex items-center gap-x-3'>
                      <span className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-xl font-semibold text-transparent'>
                        {item.number}
                      </span>
                      <span className='w-full'>{item.name}</span>
                    </li>
                  ) : (
                    <li key={itemIdx} className='flex flex-col space-y-6'>
                      <div className='flex flex-row items-center gap-x-3'>
                        <span className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-xl font-semibold text-transparent'>
                          {item.number}
                        </span>
                        <span className='w-full'>{item.name}</span>
                      </div>
                      <ul role='list' className='ml-6 space-y-6'>
                        {item.subpolicies.map((subitem, subitemIdx) => (
                          <li
                            key={subitemIdx}
                            className='flex items-center gap-x-3'
                          >
                            <span className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-xl font-semibold text-transparent'>
                              {subitem.number}
                            </span>
                            <span className='w-full'>{subitem.name}</span>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ),
                )}
              </ul>
              <p>
                Please note that this Privacy Policy only applies to the App and
                does not govern the practices of third-party websites or
                services linked to or from the App. We encourage you to review
                the privacy policies of those third parties before providing
                them with any personal information.
              </p>
              <p>
                By using the App, you acknowledge that you have read and
                understood this Privacy Policy and agree to be bound by its
                terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
