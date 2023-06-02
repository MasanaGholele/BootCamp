const port = 3000,
    express = require("express"),
    app = express(),
    homeController = require("./controllers/homeController");

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});

app.use(
    express.urlencoded({
        extended: false
    })
);

app.use(express.json());

app.get("/items/:vegetable", homeController.sendReqParam);
app.post("/", homeController.sendRoot);
app.get("/", homeController.receiveRoot);
app.post("/contact", homeController.sendContact);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});