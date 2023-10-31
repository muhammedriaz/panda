document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const dropdownContent = document.getElementById("dropdown-content");

    menuIcon.addEventListener("click", function () {
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (event.target !== menuIcon && event.target !== dropdownContent) {
            dropdownContent.style.display = "none";
        }
    });
});
