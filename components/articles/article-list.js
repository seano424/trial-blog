import ArticleItem from './article-item'

export default function ArticleList({articles}) {
  const articlesList = articles.map(article => (
    <ArticleItem key={article.id}  article={article} />
  ))

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 max-w-5xl m-auto pt-24 px-4">
      {articlesList}
    </div>
  )
}
