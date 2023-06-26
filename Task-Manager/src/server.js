const app = require("./index");
const connectDB = require("./Config/db");

const PORT = process.env.PORT || 4001;

app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`DataBase running ${PORT}`);
        console.log("Database connected");
    } catch (err) {
        console.log(err.message);
    }
})