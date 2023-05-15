var rightEye = document.getElementById("righteye");
var leftEye = document.getElementById("lefteye");
var rightArm = document.getElementById("rightarm");
rightEye.addEventListener("click", moveUpDown);
leftEye.addEventListener("click", moveUpDown);
rightArm.addEventListener("click", moveRightLeft);
function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 20) {
            clearInterval(id);
        }
    }
}
function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 10) // draw every 10ms
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 21) {
            clearInterval(id);
        }
    }
}