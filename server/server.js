import express from "express";
import cors from "cors";
import postgres from "postgres";
import dotenv from "dotenv";
dotenv.config();
const app = express();
// const PORT = process.env.port || 3000;
const PORT = 3000;
const sql = postgres({ database: "tasks" });
// const sql = postgres(process.env.DATABASE_URL);
app.use(cors());
app.use(express.json());

//===================== API ROUTES =====================//
// GET - read all tasks
app.get("/api/tasks", (req, res, next) => {
  sql`SELECT * FROM tasks`.then((result) => res.json(result)).catch(next);
});


// POST - create a new task
app.post("/api/tasks", (req, res, next) => {
const {heading, description, to_do, doing, done} = req.body;
  sql`INSERT INTO tasks(heading, description, to_do, doing, done) VALUES 
  (${heading}, ${description}, ${to_do}, ${doing}, ${done}) RETURNING *`
    .then((result) => {
    res.status(201).json(result);
    })
    .catch(next);
});


// DELETE - remove an existing task
app.delete("/api/tasks/:id", (req, res, next) => {
const { id } = req.params;
  sql`DELETE FROM tasks WHERE id=${id} RETURNING *`
    .then((result) => {
    if (result.length === 0) {
        res
        .status(404)
        .set("Content-Type", "text/plain")
        .send("Task not found: id is out of bounds.");
    } else {
        res.status(200).json(result[0]);
    }
    })
    .catch(next);
});



// ERROR HANDLING
app.use((err, req, res, next) => {
res.status(500).set("Content-Type", "plain/text").send("Internal Server Error");
});


app.use((req, res) => {
res.status(404).set("Content-Type", "plain/text").send("Not Found");
});

//=================== START THE SERVER ===================//
app.listen(PORT, () => {
console.log(`listening on port ${PORT}`);
});