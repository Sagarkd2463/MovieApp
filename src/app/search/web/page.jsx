import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';
import React from 'react';

export default async function WebSearchPage({ searchParams }) {

  const startIndex = searchParams.start || '1';
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}
    &q=${searchParams.searchTerm}&start=${startIndex}`);

  if (!response.ok) throw new Error('Something went wrong');
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className='d-flex flex-column justify-content-center align-items-center pt-5'>
        <h1 className='display-3 mb-4'>
          No results found for {searchParams.searchTerm}
        </h1>

        <p className='display-1'>
          Try searching the web or images for something else{' '}
          <Link href={'/'} className='text-primary'>
            Home
          </Link>
        </p>
      </div>
    );
  };

  return (
    <div>
      {results && <WebSearchResults result={data} />};
    </div>
  );
};

