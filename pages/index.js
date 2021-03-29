import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Hero from '../components/hero'
import CoverImage from '../components/cover-image'
import ArticleList from '../components/articles/article-list'
import { getSortedArticlesData } from '../lib/articles'
import styles from '../styles/Home.module.css'


export default function Home({articles}) {
  
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <CoverImage/>
        <ArticleList articles={articles} />
      </main>

      <footer className={`${styles.footer} mt-20`}>
        <h1>K-OTAK</h1>
      </footer>
    </Layout>
  )
}

export async function getStaticProps() {
  const allArticlesData = getSortedArticlesData()
  return {
    props: {
      articles: allArticlesData
    }
  }
}
