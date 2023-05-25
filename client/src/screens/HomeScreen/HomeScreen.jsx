import { useEffect, useState } from "react";
import axios from "axios";

const HomeScreen = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAllBooks = async () => {
      try {
        const response = await axios.get("/api/books");
        setBooks(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getAllBooks();
  }, []);

  return <div>
    <h1>Books</h1>

    <div>
      {
        books.map((book, index) => (
          <div key={index}>
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <p>{book.cover}</p>
            <h5>{book.rating}</h5>
          </div>
          
        ))
      }
    </div>
  </div>;
};

export default HomeScreen;
