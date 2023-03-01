'use client'

import { useRouter } from "next/navigation"


type Props = {
    article: Article
}

const ReadMoreButton = ({article} : Props) => {

    const router = useRouter()

    const handleClick = () => {
        const queryString = Object.entries(article)
            .map(([key, value]) => `${key}=${value}`)
            .join('&')
        
        const url = `/article?${queryString}`
        router.push(url)
    }

  return (
    <button
        onClick={handleClick}
        className='max-w-[318px] mx-auto rounded-[20px] bg-darkTealBlue dark:bg-accentRed
        text-lightWhite px-[18px] py-[15px] min-w-[300px] mt-[35px] text-[16px] font-semibold
        transition-colors duration-200 ease-out'
    >Read More</button>
  )
}

export default ReadMoreButton