exports.showCourses = (req, res) => {
    res.render("courses");
};

exports.showSignUp = (req, res) => {
    res.render("contact");
};

exports.postedSignUpForm = (req, res) => {
    res.render("thanks");
};


var courses = [
    {
        title: "Event Driven Cakes",
        cost: 50
    },
    {
        title: "Asynchronous Artichoke",
        cost: 25
    },
    {
        title: "Object Oriented Orange Juice",
        cost: 10
    }
];

// This will render the courses view
// And pass it an array containting the courses.
exports.showCourses = (req, res) => {
    console.log("Showing courses!")
    res.render("courses", {
        offeredCourses: courses
    });
};