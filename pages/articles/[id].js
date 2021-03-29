import { getAllArticleIds, getArticleData } from "../../lib/articles";
import Layout from '../../components/layout'

export default function ArticlePage({ articleData }) {
  console.log(articleData);
  return (
    <Layout>
      <h1>I am an article</h1>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const articleData = getArticleData(params.id);

  return {
    props: {
      articleData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllArticleIds();

  return {
    paths,
    fallback: false,
  };
}
