"use client";

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

export default function PaginationButtons() {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('searchTerm');
  const startIndex = +searchParams.get('start') || 1;

  return (
    <div className=''>
      {
        startIndex >= 10 && (
          <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}>
            <div className=''>
              <BsChevronLeft className='' />
              <p>Previous</p>
            </div>
          </Link>
        )}

      {
        startIndex <= 90 && (
          <Link href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}>
            <div className=''>
              <BsChevronRight className='' />
              <p>Next</p>
            </div>
          </Link>
        )}
    </div>
  );
};

