import { legalNotices } from '@/lib/data';

export default function LegalNoticePage() {
  return (
    <>
      <section>
        <div className='mx-auto px-4 sm:px-6'>
          <div className='space-y-6 pb-12 pt-32 md:pb-20 md:pt-40'>
            <div
              className='mx-auto max-w-3xl text-center'
              data-aos='zoom-y-out'
            >
              <h2 className='h-14 bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-3xl font-extrabold leading-tighter tracking-tighter text-transparent sm:text-4xl md:h-20 md:text-5xl'>
                Legal Notice
              </h2>
            </div>
            <div
              className='mx-auto max-w-screen-xl space-y-6'
              data-aos='zoom-y-out'
            >
              <p>
                This Legal Notice ("Notice") governs your use of Health Sync
                App. By accessing or using the App, you agree to be bound by
                this Notice. If you do not agree to this Notice, please refrain
                from using the App.
              </p>
              <ul role='list' className='ml-6 space-y-6'>
                {legalNotices.map((item, itemIdx) => {
                  return (
                    <li key={itemIdx} className='flex items-center gap-x-3'>
                      <span className='bg-gradient-to-l from-blue-500 to-teal-400 to-75% bg-clip-text text-xl font-semibold text-transparent'>
                        {item.number}
                      </span>
                      <span className='w-full'>{item.name}</span>
                    </li>
                  );
                })}
              </ul>
              <p>
                By using the App, you acknowledge that you have read,
                understood, and agreed to this Legal Notice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
