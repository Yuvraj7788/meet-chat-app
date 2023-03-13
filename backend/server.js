<<<<<<< HEAD
const express = require("express");
const dotenv = require("dotenv");
=======
const express = require("express"); // importing express to develop backend
const dotenv = require("dotenv");   // importing dotenv for using the port 5000 but not disclosing it here.
>>>>>>> 460eba306d3688b5e24036673ccba60ce0acbfe4
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
<<<<<<< HEAD
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();
const app = express();
=======
const chatRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();

connectDB();
const app = express();  // creating variable of express
>>>>>>> 460eba306d3688b5e24036673ccba60ce0acbfe4

app.use(express.json()); //to accept JSON data

app.get("/",(req,res) => {
<<<<<<< HEAD
    res.send("API is running successfully bro");
});

app.use('/api/user',userRoutes);
=======
    res.send("API is running successfully bro");      // here we have get api for request and response. Response is API is running successfully bro.
});

app.use('/api/user',userRoutes);
app.use('/api/chat', chatRoutes);
>>>>>>> 460eba306d3688b5e24036673ccba60ce0acbfe4

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

<<<<<<< HEAD
app.listen(PORT,console.log('Server started on port 5000'.yellow.bold));
=======
app.listen(PORT,console.log('Server started on port 5000'.yellow.bold));  
>>>>>>> 460eba306d3688b5e24036673ccba60ce0acbfe4

