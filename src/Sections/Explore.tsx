import Image from 'next/image';
import React from 'react';

const Explore = () => {
    const features = [
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
    ];
      

  return (
    <div id="explore" className="min-h-screen 0  text-gray-900 dark:text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Start Exploring</h1>
      <p className="text-lg mb-10 max-w-2xl mx-auto text-center">
        Welcome to the Explore page! Here, you can discover new features, tools, and opportunities to grow your skills and projects.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {features.map((feature, index) => (
            <div key={index} className="relative border hover:transition-transform hover:scale-101 duration-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition" >
                <Image src={feature.image} alt={feature.title} width={400} height={250} className="object-cover w-full h-64" />

                {/* Overlay with text */}
                <div className="absolute inset-0 bg-opacity-50 text-white flex flex-col justify-center items-center text-center p-4">
                    <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm">{feature.description}</p>
                </div>
            </div>
        ))}
        </div>


    </div>
  );
};

export default Explore;
