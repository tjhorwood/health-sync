export default function Team() {
  return (
    <div
      className='bg-cover bg-center rounded-xl min-h-[500px] flex justify-center items-center shadow-lg'
      style={{
        backgroundImage:
          "url('https://koretechxdemo.link/healthsync/wp-content/uploads/2024/08/background-2.webp'",
      }}
      data-aos='zoom-y-out'
    >
      <div className='max-w-2xl mx-auto text-center space-y-6'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tighter tracking-tighter text-white'>
          Our{' '}
          <span className='bg-clip-text text-transparent bg-gradient-to-l from-blue-500 to-teal-400 to-75%'>
            Team
          </span>
        </h1>
        <p className='text-white text-xl'>
          Healthcare Rebels looking to reshape the future of what truly defines
          Whole Health
        </p>
      </div>
    </div>
  );
}
