require("dotenv").config();
const express = require("express");
const notFoundMiddleware = require("./middleware/notFound.middleware");
const errorHandlerMiddleware = require("./middleware/errorHandler.middleware");
const app = express();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Jobs API");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening to the port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
