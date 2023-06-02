// Lots of $ mean you are running jQuery.
// Wait for DOM to load.
// Listen for a click event on the modal button.

$(document).ready(() => {
    $("#modal-button").click(() => {
        // Clear the modal from any previous content.
        $(".modal-body").html('');
        // Request data from /courses?format=json asynchronously
        $.get("/courses?format=json", (data) => {
            // Loop through array of data in the response.
            data.forEach((course) => {
                $(".modal-body").append(
                    `<div>
   <span class="course-title">
   ${course.title}
   </span>
   <div class="course-description">
   ${course.description}
   </div>
   </div>`
   // Append each course to the modal.
                );
            });
        });
    });
});