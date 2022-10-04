jQuery('document').ready(function () {
    jQuery('input').on('keyup', function () {
        mathOperation()
    })

    $('.selector-operator').on('click', function () {
        jQuery('.selector-operator').removeClass('selected-operator')
        jQuery(this).addClass('selected-operator')
        mathOperation()
    });
})

function getResult(value1, value2, operator) {
    if (operator === "+") {
        return value1 + value2;
    } else if (operator === "-") {
        return value1 - value2;
    } else if (operator === "*") {
        return value1 * value2;
    } else if (operator === "/") {
        return value1 / value2;
    }
}


function mathOperation() {
    let value1, value2, operator;
    value1 = jQuery('.val1').val();
    value2 = jQuery('.val2').val();
    operator = jQuery('.selected-operator').text();
    value1 = Number(value1);
    value2 = Number(value2);
    jQuery('.rezultat').text(getResult(value1, value2, operator));
}