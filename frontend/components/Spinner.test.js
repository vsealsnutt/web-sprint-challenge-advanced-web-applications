// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import React from 'react';
import { render } from '@testing-library/react';
import Spinner from './Spinner';

// test('sanity', () => {
//   expect(true).toBe(false)
// })

test('spinner renders', () => {
  render (<Spinner />);
})
