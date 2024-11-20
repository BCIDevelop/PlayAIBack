

export const paginationField = (page:number,per_page:number)=>{
    let offset = 0
    if(page>1) offset = (page-1)*per_page
    return {limit:per_page,offset}
}
export const paginationResult=<T,>(records:T[],counts:number,page:number,per_page:number)=>{
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