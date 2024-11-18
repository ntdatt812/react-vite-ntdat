import { useEffect, useState } from "react";
import BookTable from "../components/book/book.table";
import { fetchALLBookAPI } from "../services/api.service";

const BookPage = () => {
    const [dataBook, setDataBook] = useState();
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        loadTableBook()
    }, [current, pageSize])

    const loadTableBook = async () => {
        const res = await fetchALLBookAPI(current, pageSize);
        if (res.data) {
            setDataBook(res.data.result)
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total)
        }
    }


    return (
        <BookTable
            dataBook={dataBook}
            current={current}
            pageSize={pageSize}
            total={total}
            setCurrent={setCurrent}
            setPageSize={setPageSize}
        />
    );
}

export default BookPage;