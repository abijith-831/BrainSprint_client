import Image from 'next/image';
import React from 'react'

type Feature = {
    title: string;
    description: string;
    image: string;
}

const Courses:React.FC = () => {

    const features:Feature[] = [
        {
          title: 'Interactive Courses',
          description: 'Dive into hands-on tutorials and courses across different domains.',
          image: '/images/blue.png', 
        },
        {
          title: 'Real-World Projects',
          description: 'Explore project ideas and build practical applications.',
          image: '/images/green.png',
        },
        {
          title: 'Developer Tools',
          description: 'Discover tools that boost your productivity as a developer.',
          image: '/images/orange.png',
        },
        {
            title: 'Developer Tools',
            description: 'Discover tools that boost your productivity as a developer.',
            image: '/images/blue2.png',
          },
    ];


  return (
    <div className="overflow-x-auto scrollbar-hide hide-scrollbar">
      <div className="space-x-6 p-4 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:space-x-6 gap-6 lg:gap-0  scrollbar-hide">
        {features.map((feature, index) => (
          <div  key={index}  className=" relative sm:w-auto lg:min-w-[320px] bg-white shadow-lg rounded-lg  transition hover:scale-101 duration-300">
            <Image  src={feature.image} alt={feature.title} width={400} height={400} className="w-full h-30 object-cover rounded"/>
            <div className='absolute inset-0 left-2 '>
                <h3 className="text-xs md:text-md lg:text-lg font-bold mt-1 ">{feature.title}</h3>
                <p className="text-gray-600 text-xs md:text-md lg:text-md dark:text-gray-300 ">{feature.description}</p>
                <button className='text-xs md:text-md lg:text-md rounded-xs bg-white font-bold text-black m-2 mt-4 px-2 py-1 hover:transition-transform hover:scale-101 duration-300'>Start Learning</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses
