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


    // Function to add different values to the buttons
    $('#0,#1,#2,#3,#4,#5,#6,#7,#8,#9,#add,#delete,#subtract,#equal,#multiply,#divide,#decimal').click(function(){
        if (add === true) {
            // Add numbers and the decimal point to the values of the 'insert1'
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
            } else if (this.id === 'decimal') {
                insert = insert + '.';
            } 
            
            // Delete one character 
            if (this.id === 'delete') {
                insert = insert.slice(0,-1);
            }

            
            $inputArea.text(insert);
            
            // Add the character '+'
            if (this.id === 'add') {
                operator = '+';
                $inputArea.text(insert + operator);
                add = false;
            }

            // Add the character '-'
            if (this.id === 'subtract') {
                operator = '-';
                $inputArea.text(insert + operator);
                add = false;
            } 

            // Add the character 'x'
            if (this.id === 'multiply') {
                operator = 'x';
                $inputArea.text(insert + operator);
                add = false;
            }

            // Add the character '÷'
            if (this.id === 'divide') {
                operator = '÷';
                $inputArea.text(insert + operator);
                add = false;
            }
        
        } else if (add === false) {
            // Add numbers and the decimal point to the values of the 'insert2'
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
            } else if (this.id === 'decimal') {
                insert2 = insert2 + '.';
            } 
            // Delete one character 
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

            // Function to get the results of the basic operations
            if (this.id === 'equal'){
                var result = '';
                if (operator === '+') {
                    result = (parseFloat(insert) + parseFloat(insert2));
                } else if (operator === '-'){
                    result = (parseFloat(insert) - parseFloat(insert2));
                } else if (operator === 'x'){
                    result = (parseFloat(insert) * parseFloat(insert2));
                } else if (operator === '÷'){
                    result = (parseFloat(insert) / parseFloat(insert2));
                }
                add = true;
                insert = result + '';
                $inputArea.text(insert);
                insert2 = '';
            }
        }
    });
    
    // Function to add different values to the keyboard keys
    $(document)
    .keydown(function(press) {
        var id = press.which;
        if(add === true){
            // Add numbers and the decimal point to the values of the 'insert1'
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
            } else if (id === 190) {
                insert = insert + '.';
                $("#decimal").addClass('container__item--active');
            } 
            
            // Delete one character 
            if (id === 8) {
                insert = insert.slice(0,-1);
                $("#delete").addClass('container__item--active');
            } 
            $inputArea.text(insert);
            
            // Add the character '+'
            if (id === 187) {
                operator = '+';
                $("#add").addClass('container__item--active');
                $inputArea.text(insert + operator);
                add = false;
            }

            // Add the character '-'
            if (id === 189) {
                operator = '-';
                $inputArea.text(insert + operator);
                $("#subtract").addClass('container__item--active');
                add = false;
            }

            // Add the character '÷'
            if (id === 219) {
                operator = '÷';
                $("#divide").addClass('container__item--active');
                $inputArea.text(insert + operator);
                add = false;
            }

            // Add the character 'x'
            if (id === 88) {
                operator = 'x';
                $("#multiply").addClass('container__item--active');
                $inputArea.text(insert + operator);
                add = false;
            }
        } else if (add === false) { 
            // Add numbers and the decimal point to the values of the 'insert2'
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
            } else if (id === 190) {
                insert2 = insert2 + '.';
                $("#9").addClass('container__item--active');
            } 
            // Delete one character and give true value to the variable 'add'
            if (id === 8) {
                insert2 = insert2.slice(0,-1);
                var text = $inputArea.text();
                $("#delete").addClass('container__item--active');
                if (text === insert + operator){
                    operator = operator.slice(0,-1);
                    $inputArea.text(insert + operator);
                    add = true;
                }
            }

            $inputArea.text(insert + operator + insert2);

            // Function to get the results of the basic operations
            if (id === 13) {
                var value = $inputArea.text();
                var result = '';
                $("#equal").addClass('container__item--active');
                    if (value === insert + '+' + insert2) {
                        result = (parseFloat(insert) + parseFloat(insert2));
                    } else if (value === insert + '-' + insert2) {
                        result = (parseFloat(insert) - parseFloat(insert2));
                    } else if (value === insert + '÷' + insert2) {
                        result = (parseFloat(insert) / parseFloat(insert2));
                    } else if (value === insert + 'x' + insert2) {
                        result = (parseFloat(insert) * parseFloat(insert2));
                    }
                add = true;
                insert = result + '';
                $inputArea.text(insert);
                insert2 = '';
            }   
        }     
    })
    .keyup(function(){
        $('#0,#1,#2,#3,#4,#5,#6,#7,#8,#9,#add,#delete,#subtract,#equal,#multiply,#divide,#decimal').each(function(){
            $(this).removeClass('container__item--active');
        });
    }); 
});