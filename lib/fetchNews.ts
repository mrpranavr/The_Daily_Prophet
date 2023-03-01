import { gql } from "graphql-request";
import sortNews from "./sortNews";

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean
) => {
    // GraphQL query
    const query = gql`
        query MyQuery(
            $access_key: String!
            $categories: String!
            $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                categories: $categories
                keywords: $keywords
                countries: "in, gb"
                languages: "en"
                sort: "published_desc"
            ) {
                data {
                    author
                    category
                    country
                    description
                    image
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination {
                    count
                    limit
                    offset
                    total
                }
            }
        }
    `;
    // Fetch function with caching
    const res = await fetch(
        'https://saghyz.stepzen.net/api/the-daily-prophet/__graphql',
        {
            method: "POST",
            cache: isDynamic ? "no-cache" : 'default',
            next: isDynamic ? {revalidate: 0} : {revalidate: 200},
            headers: {
                'Content-type': 'application/json',
                Authorization: `APIKey ${process.env.STEPZEN_API_KEY}`
            },
            body: JSON.stringify({
                query,
                variables: {
                    access_key: process.env.MEDIASTACK_API_KEY,
                    categories: category,
                    keywords: keywords
                }
            })
        }
    )

    console.log('LOADING NEW DATA of category --> ', category, keywords)

    const newsResponse = await res.json()

    // Sorting the news by images vs no images
    const news = sortNews(newsResponse.data.myQuery)

    // Return the data
    return news
};

export default fetchNews;

