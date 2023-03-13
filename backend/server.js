const express = require("express"); // importing express to develop backend
const dotenv = require("dotenv");   // importing dotenv for using the port 5000 but not disclosing it here.
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();
const app = express();  // creating variable of express

app.use(express.json()); //to accept JSON data

app.get("/",(req,res) => {
    res.send("API is running successfully bro");      // here we have get api for request and response. Response is API is running successfully bro.
});

app.use('/api/user',userRoutes);
app.use('/api/chat', chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(PORT,console.log('Server started on port 5000'.yellow.bold));  

