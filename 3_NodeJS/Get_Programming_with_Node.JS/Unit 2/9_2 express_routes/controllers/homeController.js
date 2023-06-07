//Controller file
// Exported routing to a separate file
exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
};

exports.logRequestPaths = (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);
}

exports.sendRoot = (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");
}

exports.receiveRoot = (req, res) => {
    console.log(req.params);
    console.log(req.body);
    console.log(req.url);
    console.log(req.query);

    res.send("Hello, Universe!");
}

exports.sendContact = (req, res) => {
    res.send("Contact information submitted successfully.");
}