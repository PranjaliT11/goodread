
import BookData from "../../Data/Book";
import Books from "../BookList/Books";



const BookList = () => {
    return (
        <div>
            <h2 className="text-center">All Books</h2>
            <div className="row">
                {
                    BookData.map((book)=>( <Books data={book}/>))
                }
            </div>
        </div>

    )
}
export default BookList;