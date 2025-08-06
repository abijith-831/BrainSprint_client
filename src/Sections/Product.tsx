import Link from 'next/link';
import React from 'react';


const Product: React.FC = () => {
  return (
    <div id='product' className="h-[400px] grid grid-cols-1 sm:grid-cols-2 gap-8 px-6 py-12 max-w-6xl mx-auto items-center">
      {/* Left Section */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold ">Questions, Community & Contests</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Over 3850 questions for you to practice. Come and join one of the largest tech communities with hundreds of
          thousands of active users and participate in our contests to challenge yourself and earn rewards.
        </p>
        <Link href="/problems" className="text-lg text-blue-400 font-bold cursor-pointer hover:underline">       
            {`Questions >`} 
        </Link>
      </div>

      {/* Right Section */}
      <div className="space-y-4 md:pt-6">
        <h1 className="text-3xl font-bold">Companies & Candidates</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Not only does LeetCode prepare candidates for technical interviews, we also help companies identify top technical
          talent. From sponsoring contests to providing online assessments and training, we offer numerous services to
          businesses.
        </p>
        <Link href="/problems" className="text-lg text-blue-400 font-bold cursor-pointer hover:underline">       
            {`Business Opportunities >`} 
        </Link>
      </div>
    </div>
  );
};

export default Product;
