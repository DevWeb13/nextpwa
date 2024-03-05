import Link from 'next/link';

export default function Page2() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-12 
     md:p-24 gap-8
    '>
      <h1 className='text-4xl font-bold text-center text-gray-900 mb-8'>
        {' '}
        Page2
      </h1>
      <Link
        className='bg-blue-500 text-white px-4 py-2 rounded-md'
        href='/'>
        Retour
      </Link>
    </main>
  );
}
