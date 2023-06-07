// // Because the JSON now contains a http status code, we need to modify the code to unwrap it.
// $.get("/api/courses", (results = {}) => {
//     // Set up a local variable to represent data.
//     let data = results.data;
//     // Check that the data object contains course information.
//     if (!data || !data.courses) return;
//     // Loop through course data, and add elements to modal.
//     data.courses.forEach((course) => {
//         $(".modal-body").append(
//             `<div>
//    <span class="course-title">
//    ${course.title}
//    </span>
//    <button type="button" class= "join-button" data - id="${course._id}" >Join</button >
//    <div class='course-description'>
//    ${course.description}
//    </div>
//    </div>`
//    );
//     });
// });

$(document).ready(() => {
    let apiToken = $("#apiToken").data("token");
    $("#modal-button").click(() => {
        $(".modal-body").html("");
        // $.get("/api/courses", (results = {}) => {
        $.get(`/api/courses?apiToken=${apiToken}`, (results = {}) => {
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