jQuery(document).ready(function($) {
    console.log("Document Ready");
    $("#submit").on("click", function(event) {
        event.preventDefault();
        var formData = $(".form-group");
        console.log(formData);
    });
});
