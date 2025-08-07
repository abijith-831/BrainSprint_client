import { CodeEditor } from '@/Components/animate-ui/components/code-editor'
import Image from 'next/image'
import React from 'react'
import { Atom } from 'lucide-react'


const Developers:React.FC = () => {
  return (
    <div className='flex-row items-center justify-center max-w-4xl mx-auto'>
      {/* <div className='flex items-center justify-center p-4'>
            <Image src='/images/lang.svg' alt='languages'  width={400} height={400}></Image>
      </div> */}
      <div className='flex items-center justify-center p-4'>
            <h1 className='text-lg font-bold text-gray-600 dark:text-gray-300 text-center'>We now support 14 popular coding languages. At our core, LeetCode is about developers. Our powerful development tools such as Playground help you test, debug and even write your own projects online.</h1>
      </div>

      <div className='flex items-center justify-center p-4'>
      <CodeEditor
          cursor
          className="w-[640px] h-[480px]"
          lang="tsx"
          themes={{
            light: 'rose-pine-dawn',
            dark: 'rose-pine-moon',
          }}  
          icon={<Atom />}
          writing={false}
          copyButton
        >
          {`
          function isPrime(num) {
            if (num < 2) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
              if (num % i === 0) return false;
            }
            return true;
          }
          
          function findPrimesUpTo(n) {
            const primes = [];
            for (let i = 2; i <= n; i++) {
              if (isPrime(i)) {
                primes.push(i);
              }
            }
            return primes;
          }
          
          console.log(findPrimesUpTo(50));
          
          `}
        </CodeEditor>
      </div>
    </div>
  )
}

export default Developers
// https://animate-ui.com/docs/components/code-editor