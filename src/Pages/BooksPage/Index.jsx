import BookList from "../../Components/BookList/Index"
import Navbar from "../../Components/Navbar/Index"

const BooksPage = () => {
    return (
        <>
        <Navbar />
        <div className="container">
            <BookList />
        </div>
        </>
    );
}
export default BooksPage;