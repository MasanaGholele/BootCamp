$(document).ready(() => {
    let apiToken = $("#apiToken").data("token");
    $("#modal-button").click(() => {
        $(".modal-body").html("");
        // $.get("/api/courses", (results = {}) => {
        $.get(`/api/courses?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiNjQ2NGMzNTBkYmQxYTU0ZGZlN2Q0M2ZlIiwiZXhwIjoxNjg0NDM1MDMwNjY4LCJpYXQiOjE2ODQzNDg2MzB9.mX9w9bTtV34vcLIZy_z0K7fyCdViNWrPtmCv1GDCAts`, (results = {}) => {
            let data = results.data;
            if (!data || !data.courses) return;
            data.courses.forEach((course) => {
                $(".modal-body").append(
                    `<div>
<span class="course-title">
${course.title}
</span>
<button class='${course.joined ? "joined-button" : "join-button"}' data-id="${course._id}"> ${course.joined ? "Joined" : "Join"}</button>
<div class="course-description">
${course.description}
</div>
</div>`
                );
            });
        }).then(() => {
            // Call addJoinButtonListener to add an event listener on your buttons after the AJAX request completes.
            addJoinButtonListener();
        });
    });
});

// Create the event listener for the modal button.
let addJoinButtonListener = () => {
    $(".join-button").click((event) => {
        let $button = $(event.target),
        // Grab the button and button ID data.
            courseId = $button.data("id");
            // Make an AJAX request with the course’s ID to join.
        $.get(`/api/courses/${courseId}/join`, (results = {}) => {
            let data = results.data;
            // Check whether the join action was successful, and modify the button.
            if (data && data.success) {
                $button
                    .text("Joined")
                    .addClass("joined-button")
                    .removeClass("join-button");
            } else {
                $button.text("Try again");
            }
        });
    });
}