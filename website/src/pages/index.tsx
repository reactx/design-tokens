import React from 'react';
import { Link } from 'gatsby';

import DefaultLayout from '../components/layouts/DefaultLayout';
import { SEO } from '../components/SEO';

const IndexPage = () => (
  <DefaultLayout>
    <SEO title="Home" />
    <h1>Hi people</h1>   
  </DefaultLayout>
);

export default IndexPage;
