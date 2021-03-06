import * as React from 'react';
import Link from 'next/link';
import { NextPage } from 'next';
import Layout from '../components/Layout';

const IndexPage: NextPage = () => (
  <Layout title={'Home | Next.js + TypeScript Example'}>
    <h1>{'Hello Next.js 👋'}</h1>
    <p>
      <Link href={'/about'}>
        <p>{'About'}</p>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
