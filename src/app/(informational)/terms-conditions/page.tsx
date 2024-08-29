import { termsConditions } from '@/lib/data';
export default function TermsConditions() {
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
                Terms & Conditions
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
                Thank you for choosing to use Health Sync's App. These Terms and
                Conditions ("Terms") govern your access to and use of the App.
                By accessing or using the App, you agree to be bound by these
                Terms. If you do not agree to these Terms, please refrain from
                using the App.
              </p>
              <ul role='list' className='ml-6 space-y-6'>
                {termsConditions.map((item, itemIdx) =>
                  !item.subterms ? (
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
                        {item.subterms.map((subitem, subitemIdx) => (
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
                If you have any questions or concerns about these Terms, please
                contact us at{' '}
                <a
                  href='mailto:admin@health-sync.org'
                  className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text font-semibold text-transparent hover:underline'
                >
                  admin@health-sync.org
                </a>
              </p>
              <p>
                By using the App, you acknowledge that you have read,
                understood, and agreed to these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
