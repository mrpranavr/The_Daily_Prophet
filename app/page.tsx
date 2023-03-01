import React from 'react'
import { categories } from '../constants'
import fetchNews from '../lib/fetchNews'
import NewsList from './NewsList'
import response from '../response.json'

const HomePage = async () => {

  // Fetch the news data
  const news: NewsResponse = response || await fetchNews(categories.join(','))
  console.log(news)

  return (
    <div className='xl:max-w-[1500px] xl:mx-auto mx-6 mt-[60px]'>
      {/* news list */}
      <NewsList news={news} />
    </div>
  )
}

export default HomePage
