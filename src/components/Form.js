import React, { useState } from "react";

const Form = () => {
  const [bookName, setBookName] = useState(null);
  const [bookType, setBookType] = useState("new");
  const [listNewBook, setNewBook] = useState([]);
  const [listLoadingBook, setLoadingBook] = useState([]);
  const [listEndBook, setEndBook] = useState([]);

  let key = 0;

  const printNewBook = () => {
    return listNewBook.map((book) => {
      return <li key={key++}>{book}</li>;
    });
  };

  const printLoadingBook = () => {
    return listLoadingBook.map((book) => {
      return <li key={key++}>{book}</li>;
    });
  };

  const printEndBook = () => {
    return listEndBook.map((book) => {
      return <li key={key++}>{book}</li>;
    });
  };

  const afficheBook = () => {
    printNewBook();
    printLoadingBook();
    printEndBook();
  };

  return (
    <div className="form-content">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Titre du livre"
          onChange={(e) => setBookName(e.target.value)}
        />
        <select
          id="book-select"
          className="form-select"
          onChange={(e) => setBookType(e.target.value)}
        >
          <option value="new">Nouveautés</option>
          <option value="loading">En cours</option>
          <option value="end">Lu</option>
        </select>
        <button
          className="btn btn-success shadow-none"
          onClick={(e) => {
            e.preventDefault();
            if (bookType === "new") {
              listNewBook === []
                ? setNewBook([bookName])
                : setNewBook([...listNewBook, bookName]);
            } else if (bookType === "loading") {
              listLoadingBook === []
                ? setLoadingBook([bookName])
                : setLoadingBook([...listLoadingBook, bookName]);
            } else {
              listEndBook === []
                ? setEndBook([bookName])
                : setEndBook([...listEndBook, bookName]);
            }
            afficheBook();
          }}
        >
          Ajouter
        </button>
      </form>
      <div className="list-book">
        <div className="new-book">
          <h3>Nouveautés à lire</h3>
          <ul className="list-group">{printNewBook()}</ul>
        </div>
        <div className="loading-book">
          <h3>En cours de Lecture</h3>
          <ul className="list-group">{printLoadingBook()}</ul>
        </div>
        <div className="end-book">
          <h3>Livre lu</h3>
          <ul className="list-group">{printEndBook()}</ul>
        </div>
      </div>
    </div>
  );
};

export default Form;
