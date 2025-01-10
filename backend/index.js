import fs from "node:fs/promises";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(express.urlencoded({ extended: true }));

app.get("/expenses", async (req, res) => {
  const fileContent = await fs.readFile("./data/expenses.json");
  const expensesData = JSON.parse(fileContent);
  res.status(200).json({ expenses: expensesData });
});

app.post("/add-expense", async (req, res) => {
  const expenseData = req.body;
  const NewExpense = {
    ...expenseData,
  };
  const fileContent = await fs.readFile("./data/expenses.json", "utf8");
  const expensesData = JSON.parse(fileContent);
  expensesData.push(NewExpense);
  await fs.writeFile("./data/expenses.json", JSON.stringify(expensesData));
  res.status(201).json({ message: "Expense is added" });
});

app.listen(3005, () => {
  console.log("Backend server connected");
});

//{}[]
