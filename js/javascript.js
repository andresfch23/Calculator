$(document).ready(function(){
    var $containerItem = $(".container__item");
    var $inputArea = $(".js-input");

    $containerItem.click(function(){
        var character = $(this).text();
        $inputArea.append(character);
    });

    $(document).keypress(function(press) {
        var id = press.which; 
        console.log(id);
        if( id === 48) {
            $inputArea.append("0");
        } else if (id == 49) {
            $inputArea.append("1");
        } else if (id == 50) {
            $inputArea.append("2");
        } else if (id == 51) {
            $inputArea.append("3");
        } else if (id == 52) {
            $inputArea.append("4");
        } else if (id == 53) {
            $inputArea.append("5");
        } else if (id == 54) {
            $inputArea.append("6");
        } else if (id == 55) {
            $inputArea.append("7");
        } else if (id == 56) {
            $inputArea.append("8");
        } else if (id == 57) {
            $inputArea.append("9");
        }  
    });
});