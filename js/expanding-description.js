$('.question-wrapper').click(function(){
    $(this).find('.answer').toggle('slow');
    // $(this).find('.answer').toggle('slow');
    $(this).find(".arrow-down, .arrow-up").toggleClass("arrow-down arrow-up");


});