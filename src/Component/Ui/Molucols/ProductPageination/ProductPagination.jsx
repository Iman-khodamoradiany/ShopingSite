import { useEffect, useState } from "react"
import ReactPaginate from "react-paginate"
import './ProductPagination.css'
function ProductPagination({ itemPerPage, data = [], setDataEdit }) {
    const [currentItem, setCurrentItem] = useState(null)
    const [pagecCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)

    useEffect(() => {
        const endoffset = itemOffset + itemPerPage;
        setDataEdit(data.slice(itemOffset, endoffset))
        setPageCount(Math.ceil(data.length / itemPerPage))
    }, [itemOffset, itemPerPage])

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemPerPage) % data.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                onPageChange={handlePageClick}
                nextLabel={null}
                previousLabel={null}
                pageRangeDisplayed={5}
                pageCount={pagecCount}
                renderOnZeroPageCount={null}
                containerClassName="PaginationButton"
                activeClassName="selectedButton" />
        </div>
    )
}

export default ProductPagination