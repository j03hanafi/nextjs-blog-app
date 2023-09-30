import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // get file names under /posts directory
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    // Remove extension from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read file as string
    const filePath = path.join(postsDirectory, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    // Use gray-matter to parse the post metadata section
    const metadata = matter(fileContent)

    // Combine the data with the id
    return {
      id,
      ...metadata.data,
    }
  })

  // Sort posts by date
  return allPostsData.sort((i, j) => {
    if (i.date < j.date) {
      return 1
    } else {
      return -1
    }
  })
}