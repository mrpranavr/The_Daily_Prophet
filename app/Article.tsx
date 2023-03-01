import React from 'react'
import ReadMoreButton from './ReadMoreButton'

type Props = {
    article : Article
}

const Article = ({article} : Props) => {
  return (
    <article
      className='flex flex-col px-[15px] pt-[15px] pb-[30px] rounded-[20px] bg-lightWhite
      dark:bg-mediumTealBlue light-card-shadow hover:scale-105 transition-all duration-500 '
    >
        {article.image && (
          <img 
            src={article.image}
            alt={article.title}
            className='h-[233px] w-full object-cover rounded-[15px]'
          />
        )}

        <div className='flex-1 flex flex-col'>
          <div className={`flex-1 flex flex-col ${article.image && 'mt-[18px]'}`}>
            <h2 className='font-poppins font-semibold lg:text-[20px] text-[18px] text-darkTealBlue dark:text-lightWhite
            '>{article.title}</h2>
            <section className='mt-[10px] flex-1'>
              <p className='font-poppins line-clamp-3 text-[14px] text-secondaryDark dark:text-lightWhite'>{article.description}</p>
            </section>
            <footer className='font-poppins text-[12px] text-right ml-auto flex space-x-1 pt-[20px] 
            text-secondaryDark dark:text-lightWhite'>
              <p>{article.source}</p>
              <p>
                {article.published_at}
              </p>
            </footer>
          </div>

          {/* Read more button */}
          <ReadMoreButton article={article} /> 
        </div>
    </article>
  )
}

export default Article