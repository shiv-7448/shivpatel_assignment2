$(document).ready(function () {
    // Initial content loading
    loadContent("home.html #home");

    // Navigation click event
    $("nav a").click(function (e) {
        e.preventDefault();
        var page = $(this).attr("href");
        loadContent(page + " .content-section");

        // Update active navigation link
        $("nav a").removeClass("active");
        $(this).addClass("active");
    });
    
    // Back button click event
    $("#backButton").click(function() {
        history.back();
    });

    // Function to load content dynamically
    function loadContent(contentUrl) {
        $("#content").load(contentUrl, function() {
            // Additional callback actions after content is loaded
        });
    }
});
