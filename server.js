const dotenv = require("dotenv");

const app = require("./app");
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, "./config.env") });

// console.log(process.env)
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running at port ${port}`));
