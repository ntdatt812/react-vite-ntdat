import { useEffect, useState } from "react";
import BookTable from "../components/book/book.table";
import { fetchALLBookAPI } from "../services/api.service";
import BookForm from "../components/book/book.form";
import BookCreateUnControl from "../components/book/book.form.uncontrol";

const BookPage = () => {
    const [dataBook, setDataBook] = useState();
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);

    const [isModalCreateBook, setIsModalCreateBook] = useState(false)

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
        <div style={{ padding: "20px" }}>
            {/* <BookForm
                setIsModalCreateBook={setIsModalCreateBook}
                isModalCreateBook={isModalCreateBook}
                loadTableBook={loadTableBook}
            /> */}
            <BookCreateUnControl
                setIsModalCreateBook={setIsModalCreateBook}
                isModalCreateBook={isModalCreateBook}
                loadTableBook={loadTableBook}
            />
            <BookTable
                dataBook={dataBook}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />
        </div>
    );
}

export default BookPage;