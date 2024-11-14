import { User } from "../context/users/entity/user"

export const paginationField = (page:number,per_page:number)=>{
    const offset = (page-1)*per_page
    return {limit:per_page,offset}
}
export const paginationResult=(records:User[],counts:number,page:number,per_page:number)=>{
    const totalPages = Math.ceil(counts / per_page);
    return {
        results: records,
        pagination: {
            totalRecords: counts,
            totalPages,
            perPage: per_page,
            currentPage: page,
          },
    }
}