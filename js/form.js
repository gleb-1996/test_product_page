let $buttonOneClick = document.querySelector('.order-one-click');
let $modalWindow = document.querySelector('.modal-window');
let $wrapForm = document.querySelector('.wrap-form');
let $buttonClose = document.querySelector('.form-order__close');


$buttonOneClick.addEventListener('click', function () {
    $modalWindow.classList.remove('modal-window_hidden');
    $wrapForm.classList.remove('wrap-form_hidden');
});

$buttonClose.addEventListener('click', function () {
    $modalWindow.classList.add('modal-window_hidden');
    $wrapForm.classList.add('wrap-form_hidden');
});

$(document).ready(function(){

    $('.form-order__submit-form').click(function(){

        let userName = $('.user-name').val();
        let userPhone   = $('.user-phone').val();

        $.ajax({
            url: "../php/form.php",
            type: "post",
            dataType: "json",
            data: { // что отправляем
                "user_name": userName,
                "user_phone": userPhone
            },

            success: function(data){
                alert($('.messages').html(data.result));
            }
        });
    });

});