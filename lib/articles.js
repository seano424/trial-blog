import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const articlesDirectory = path.join(process.cwd(), 'articles')

export function getSortedArticlesData() {
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticlesData = fileNames.map(fileName => {
    //remove the .md 
    const id = fileName.replace(/\.md$/, '')

    //read markdown file as a string
    const fullPath = path.join(articlesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    //use gray-matter to parse metadata
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })
  
  //sort posts by date
  return allArticlesData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory)

  return fileNames.map(fn => {
    return {
      params: {
        id: fn.replace(/\.md$/, '')
      }
    }
  })
}

export function getArticleData(id) {
  const fullPath = path.join(articlesDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  return {
    id,
    ...matterResult.data
  }
}