$(document).ready(function(){
    var $containerItem = $(".container__item");
    var $inputArea = $('.js-input');
    var insert = '';
    var add = true;
    var insert2 = '';
    var operator = '';
    var $delete = $('#delete');
    var $add = $('#add');
    var $subtract = $('#subtract');
    var $equal = $('#equal');
    var $visibleItem = $('.js-visible-item');

    $('#0,#1,#2,#3,#4,#5,#6,#7,#8,#9,#add,#delete,#subtract,#equal,#multiply,#divide').click(function(){
        if (add === true) {
            if (this.id === '0') {
                insert = insert + '0';
            } else if (this.id === '1') {
                insert = insert + '1';
            } else if (this.id === '2') {
                insert = insert + '2';
            } else if (this.id === '3') {
                insert = insert + '3';
            } else if (this.id === '4') {
                insert = insert + '4';
            } else if (this.id === '5') {
                insert = insert + '5';
            } else if (this.id === '6') {
                insert = insert + '6';
            } else if (this.id === '7') {
                insert = insert + '7';
            } else if (this.id === '8') {
                insert = insert + '8';
            } else if (this.id === '9') {
                insert = insert + '9';
            } if (this.id === 'delete') {
                insert = insert.slice(0,-1);
            }

            $inputArea.text(insert);
            
            if (this.id === 'add') {
                operator = '+';
                $inputArea.text(insert + operator);
                add = false;
            }

            if (this.id === 'subtract') {
                operator = '-';
                $inputArea.text(insert + operator);
                add = false;
            } 

            if (this.id === 'multiply') {
                operator = 'x';
                $inputArea.text(insert + operator);
                add = false;
            }

            if (this.id === 'divide') {
                operator = '÷';
                $inputArea.text(insert + operator);
                add = false;
            }

        } else if (add === false) {
            if (this.id === '0') {
                insert2 = insert2 + '0';
            } else if (this.id === '1') {
                insert2 = insert2 + '1';
            } else if (this.id === '2') {
                insert2 = insert2 + '2';
            } else if (this.id === '3') {
                insert2 = insert2 + '3';
            } else if (this.id === '4') {
                insert2 = insert2 + '4';
            } else if (this.id === '5') {
                insert2 = insert2 + '5';
            } else if (this.id === '6') {
                insert2 = insert2 + '6';
            } else if (this.id === '7') {
                insert2 = insert2 + '7';
            } else if (this.id === '8') {
                insert2 = insert2 + '8';
            } else if (this.id === '9') {
                insert2 = insert2 + '9';
            }

            if (this.id === 'delete') {
                insert2 = insert2.slice(0,-1);
                var text = $inputArea.text();
                if (text === insert + operator){
                    operator = operator.slice(0,-1);
                    $inputArea.text(insert + operator);
                    add = true;
                }
            }
            
            $inputArea.text(insert + operator + insert2);

            if (this.id === 'equal'){
                var result = '';
                if (operator === '+') {
                    result = (parseInt(insert) + parseInt(insert2));
                } else if (operator === '-'){
                    result = (parseInt(insert) - parseInt(insert2));
                } else if (operator === 'x'){
                    result = (parseInt(insert) * parseInt(insert2));
                } else if (operator === '÷'){
                    result = (parseInt(insert) / parseInt(insert2));
                }
                add = true;
                insert = result + '';
                $inputArea.text(insert);
                insert2 = '';
            }
        }
    });
    

    $(document)
    .keydown(function(press) {
        var id = press.which;
        if(add === true){
            if( id === 48) {
                insert = insert + '0';
                $("#0").addClass('container__item--active');
            } else if (id === 49) {
                insert = insert + '1';
                $("#1").addClass('container__item--active');
            } else if (id === 50) {
                insert = insert + '2';
                $("#2").addClass('container__item--active');
            } else if (id === 51) {
                insert = insert + '3';
                $("#3").addClass('container__item--active');
            } else if (id === 52) {
                insert = insert + '4';
                $("#4").addClass('container__item--active');
            } else if (id === 53) {
                insert = insert + '5';
                $("#5").addClass('container__item--active');
            } else if (id === 54) {
                insert = insert + '6';
                $("#6").addClass('container__item--active');
            } else if (id === 55) {
                insert = insert + '7';
                $("#7").addClass('container__item--active');
            } else if (id === 56) {
                insert = insert + '8';
                $("#8").addClass('container__item--active');
            } else if (id === 57) {
                insert = insert + '9';
                $("#9").addClass('container__item--active');
            } else if (id === 8) {
                insert = insert.slice(0,-1);   
            } 
            $inputArea.text(insert);
            
            if (id === 187) {
                operator = '+';
                $inputArea.text(insert + operator);
                add = false;
            }

            if (id === 189) {
                operator = '-';
                $inputArea.text(insert + operator);
                add = false;
            }

            if (id === 219) {
                operator = '÷';
                $inputArea.text(insert + operator);
                add = false;
            }

            if (id === 88) {
                operator = 'x';
                $inputArea.text(insert + operator);
                add = false;
            }
            
        } else if (add === false) { 
            if( id === 48) {
                insert2 = insert2 + '0';
                $("#0").addClass('container__item--active');
            } else if (id === 49) {
                insert2 = insert2 + '1';
                $("#1").addClass('container__item--active');
            } else if (id === 50) {
                insert2 = insert2 + '2';
                $("#2").addClass('container__item--active');
            } else if (id === 51) {
                insert2 = insert2 + '3';
                $("#3").addClass('container__item--active');
            } else if (id === 52) {
                insert2 = insert2 + '4';
                $("#4").addClass('container__item--active');
            } else if (id === 53) {
                insert2 = insert2 + '5';
                $("#5").addClass('container__item--active');
            } else if (id === 54) {
                insert2 = insert2 + '6';
                $("#6").addClass('container__item--active');
            } else if (id === 55) {
                insert2 = insert2 + '7';
                $("#7").addClass('container__item--active');
            } else if (id === 56) {
                insert2 = insert2 + '8';
                $("#8").addClass('container__item--active');
            } else if (id === 57) {
                insert2 = insert2 + '9';
                $("#9").addClass('container__item--active');
            } else if (id === 8) {
                insert2 = insert2.slice(0,-1);
                var text = $inputArea.text();
                if (text === insert + operator){
                    operator = operator.slice(0,-1);
                    $inputArea.text(insert + operator);
                    add = true;
                }
            }

            $inputArea.text(insert + operator + insert2);

            if (id === 13) {
                var value = $inputArea.text();
                var result = '';
                    if (value === insert + '+' + insert2) {
                        result = (parseInt(insert) + parseInt(insert2));
                    } else if (value === insert + '-' + insert2) {
                        result = (parseInt(insert) - parseInt(insert2));
                    } else if (value === insert + '÷' + insert2) {
                        result = (parseInt(insert) / parseInt(insert2));
                    } else if (value === insert + 'x' + insert2) {
                        result = (parseInt(insert) * parseInt(insert2));
                    }
                add = true;
                insert = result + '';
                $inputArea.text(insert);
                insert2 = '';
            }   
        }     
    })
    .keyup(function(){
        $('#0,#1,#2,#3,#4,#5,#6,#7,#8,#9').each(function(){
            $(this).removeClass('container__item--active');
        });
    }); 
});