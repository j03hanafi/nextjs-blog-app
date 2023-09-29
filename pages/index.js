import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (<Layout home>
    <Head>
      <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
      <p>Whaddup! This is j03!</p>
      <p>
        I learn this from{' '}
        <a href="https://nextjs.org/learn">Next.js tutorial</a>
      </p>
    </section>
  </Layout>)
}
