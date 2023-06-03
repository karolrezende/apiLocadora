import { AppError } from "../error"

export const getMoviesService = async (
    orderBy:string|null, 
    sortBy: string|null, 
    perPage:number|null, 
    page:number|null) => {
        
    if(sortBy != 'price' && 'duration') throw new AppError("sort by 'price' or 'duration'", 400)
    if (sortBy === null) sortBy = 'id'
    if(orderBy !== 'asc' && 'desc') throw new AppError("order by 'asc' or 'desc'", 400)
    if(orderBy === null) orderBy = 'asc'
    if(perPage! % 2 !== 0 && perPage! > 5) perPage = 5
    if(page! % 2 !== 0 ) page = 1
    let prevPage: string |null = `http://localhost:3000/movies?page=${page!-1}&perPage=${perPage}`   
    let nextPage: string |null = `http://localhost:3000/movies?page=${page!+1}&perPage=${perPage}`   

    if(page === 1) prevPage = null


}