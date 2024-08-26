import Image from "next/image"

export default function Team() {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-8xl px-2 text-center">
        <div className="mx-auto" data-aos='zoom-y-out'>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tighter tracking-tighter">Meet The <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Team</span></h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-12 md:mt-20 grid max-w-2xl gap-x-4 gap-y-16 grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          data-aos='zoom-y-out'
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                src={person.image}
                alt={person.name}
                width={224}
                height={224}
                className="mx-auto rounded-full scale-[1.1] md:scale-[1.2]"
              />
              <h3 className="mt-2 text-lg md:text-xl font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
              <p className="leading-6">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const people = [
  {
    name: 'Matthew Beam',
    role: 'Business Strategy',
    image: '/images/matt.webp',
  },
  {
    name: 'Taylor Horwood',
    role: 'Technology',
    image: '/images/taylor.webp',
  },
  {
    name: 'Don Beam, MS, LPC',
    role: 'Exercise Strategy and Wellness',
    image: '/images/don.webp',
  },
  {
    name: 'Aishwarya Sahu',
    role: 'Yoga / Mindfullness Instructor',
    image: '/images/aishwarya.webp',
  },
]