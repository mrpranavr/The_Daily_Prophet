type Category = 
    | 'business'
    | 'entertainment'
    | 'general'
    | 'health'
    | 'science'
    | 'sports'
    | 'technology'

type Pagination = {
    count: Int
    limit: Int
    offset: Int
    total: Int
}