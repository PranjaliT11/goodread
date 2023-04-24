import BookDetailPage from "./Pages/BookDetailPage";
import BooksPage from "./Pages/BooksPage/Index";
import HomePage from "./Pages/HomePage/Index";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import { BrowserRouter as Router , Routes, Route  } from 'react-router-dom';


function App() {
  return (
     <Router>
      <Routes>
        <Route path = "/" element= {<HomePage />} />
         <Route path = "/books" element= {<BooksPage />}  />
         <Route path ="/books:id" element = {<BookDetailPage />} />
         <Route path ="/register" element = {<RegisterPage />} />
         <Route  path="/login" element = {<LoginPage />}/>
      </Routes>
     </Router>

  );
}

export default App;
