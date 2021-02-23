$(document).ready(function() {

    $("#name").hide();

    $('#image').on('mouseover', function() {
        // User mouse over on image
        $("#name").show();
    }).on('mouseout', function() {
        // 
        $("#name").hide();
    });
    
});