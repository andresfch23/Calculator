$(document).ready(function(){
    var $containerItem = $(".container__item");
    var $inputArea = $(".js-input");

    $containerItem.click(function(){
        var character = $(this).text();
        $inputArea.text(character);
    });
});