import React, { Dispatch, SetStateAction } from "react"

interface PropsPagination {
    currentPage:number;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    numPages:number;
}
export const Pagination = ({currentPage, setCurrentPage, numPages}:PropsPagination) => {
    const next = () => {
        if(currentPage!==numPages) setCurrentPage( currentPage + 1)
    }
    const prev = () => {
        if(currentPage!==1) setCurrentPage( currentPage - 1)
    }
    return(
        <div className="pagination">
            <h3 onClick={prev}>Prev</h3>
            <h3>{currentPage} / {numPages}</h3>
            <h3 onClick={next}>Next</h3>
        </div>
    )
}