import React from 'react'
import Article from './Article'

type Props = {
    news: NewsResponse
}

const NewsList = ({news} : Props) => {
  return (
    <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        {
            news.data.map((article) => (
                <Article key={article.title} article={article} />
            ))
        }
    </main>
  )
}

export default NewsList