const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
require("dotenv").config();

exports.server = (app) => {
    mongoose.connect(process.env.DB_LOCAL)
        .then(() => console.log("Database Connected"))
        .catch((error) => console.log(error))

    app.get('/', (req, res) => {
        res.json({
            status: success,
            massage: "Hellow from the Meal Manager Server"
        })
    })

    app.listen(PORT, () => {
        console.log(`server is running at http://localhost:${PORT}`);
    })
}