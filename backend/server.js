import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
    "mongodb+srv://demomongo123:Kamalrajs29@cluster0.azfnw9l.mongodb.net/db2985?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(
    console.log("DB connected...")
  )

app.listen(5000, () => console.log("Server started"));
