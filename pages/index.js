import Head from 'next/head';
import Layout, {siteTitle} from "../components/layout";
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from "../lib/posts";

export default function Home({allPostsData}) {
  return (
    <Layout home>
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

    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
      <h2 className={utilStyles.headingLg}>Blogs</h2>
      <ul className={utilStyles.list}>
        {allPostsData.map(({id, date, title}) => (
          <li className={utilStyles.listItem} key={id}>
            {title}
            <br/>
            {id}
            <br/>
            {date}
          </li>
        ))}
      </ul>
    </section>
  </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}