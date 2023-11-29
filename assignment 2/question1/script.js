$(document).ready(function () {
   
    $("#draggable").draggable();

    
    $("#droppable").droppable({
        drop: function () {
            alert("Dropped!");
        }
    });

    
    $("#resizable").resizable();

    
    $("#selectable").selectable();

    
    $("#accordion").accordion();


    var programmingLanguages = ["JavaScript", "Python", "Java", "C#", "Ruby"];
    $("#autocomplete").autocomplete({
        source: programmingLanguages
    });

  
    $("#datepicker").datepicker();

   
    $("#slider").slider();

   
    $("#showHide").click(function () {
        $("#colorAnimate").toggle("explode");
    });

    // Explode
    $("#explode").click(function () {
        $(this).toggle("explode");
    });

    $("#fade").click(function () {
        $("#fade").fadeOut(500, function () {
        
            $("#fade").fadeIn(500);
        });
    });


    $("#colorAnimate").click(function () {
        $(this).animate({
            backgroundColor: "#ff0000", 
            color: "#ffffff" 
        }, 1000);
    });
});
