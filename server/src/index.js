import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDatabase from "./config/database.js";

//initialize
dotenv.config();
const db = connectToDatabase();
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//route

app.get("/api/books", (req, res) => {
  const myQuery = "SELECT * FROM books";
  db.query(myQuery, (error, data) => {
    if (error) return res.json(error);

    return res.json(data);
  });
});

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

app.post("/api/books", (req, res) => {
  const myQuery = "INSERT INTO books (`title`, `description`, `cover`) VALUES (?)";
  const { title, description, cover } = req.body;
  const values = [title, description, cover];

  db.query(myQuery, [values], (error, data) => {
    if (error) return res.json(error);
    return res.json("Book has been created");
  });
});

app.listen(5000, () => {
  console.log("Server is running...");
});
