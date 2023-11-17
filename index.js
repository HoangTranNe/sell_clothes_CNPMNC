const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const axios = require("axios");
const authController = require("./controller/authController"); 
const authRouter = require("./routes/auth");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Connect to MongoDB using the provided connection string
const mongoURI = "mongodb+srv://phuc5656:<password>@cluster0.sefhnz3.mongodb.net/Web?retryWrites=true&w=majority";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB...");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

connectToMongo();

app.get("/v1/auth", (authController.getAllUsers));

app.use("/v1/auth", authRouter);

// Define the POST route
app.post("/v1/auth", (req, res) => {
    // Xử lý logic ở đây cho yêu cầu POST
    res.send("This is the response for the POST request.");
});

// Define the DELETE route
app.delete("/v1/auth", (req, res) => {
    // Xử lý logic ở đây cho yêu cầu DELETE
    res.send("This is the response for the DELETE request.");
});

// Make a GET request to the API
const apiURL = "https://my.api.mockaroo.com/21DH113641_GET.json";
const apiKey = "3499a2d0";
axios.get(apiURL, {
    headers: {
        "X-API-Key": apiKey
    }
})
    .then(response => {
        // Xử lý dữ liệu từ API ở đây
        console.log(response.data); // In dữ liệu từ API
    })
    .catch(error => {
        console.error("Lỗi khi gửi yêu cầu đến API:", error);
    });

// Start the server
const port = 3325;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
