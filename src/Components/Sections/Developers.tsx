import { CodeEditor } from '@/Components/animate-ui/components/code-editor'
import React from 'react'
import { Atom } from 'lucide-react'

const Developers: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4">
      {/* Heading */}
      <div className="flex items-center justify-center p-4">
        <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-600 dark:text-gray-300 text-center">
          We now support 14 popular coding languages. At our core, LeetCode is
          about developers. Our powerful development tools such as Playground
          help you test, debug and even write your own projects online.
        </h1>
      </div>

      {/* Code Editor */}
      <div className="flex items-center justify-center p-4 w-full">
        <CodeEditor
          cursor
          className="w-full max-w-full sm:max-w-2xl md:max-w-3xl h-[280px] sm:h-[380px] md:h-[480px]"
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
