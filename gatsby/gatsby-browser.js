import React from 'react';
import Layout from './src/components/Layout';

export function wrapPageElement({ element, props }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Layout {...props}>{element}</Layout>;
}
