import Nav from "../components/nav";
import Head from 'next/head'

export const siteTitle = "hello"

export default function Layout({ children }) {
  return (
    <div>
      <Head>
      <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Nav />
      {children}
    </div>
  );
}
