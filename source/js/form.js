(function() {
    let me = {};
    let form = document.querySelector('.form-container');
    let closeButton = null;

    function onClose() {       //при клике на крестик навешивает функцию добавления класса is-hidden  
        me.close();
        closeButton.removeEventListener('click', onClose)
        document.removeEventListener('keydown', logKey);
    }

    me.open = function() {
        form.classList.remove('is-hidden');     //убирает scss класс is-hidden
        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose)      //добавляет обработчик на крестик

        document.addEventListener('keydown', logKey);
    };

    me.close = function() {
        form.classList.add('is-hidden');
    };

    me.isValid = function() {
        let requiredFields = document.querySelectorAll('[data-valid="required"]');
        let emailValue = document.querySelector('[data-email]').value;
        let numberValue = document.querySelector('[data-number]').value;

        if (!me.isAllCompleted(requiredFields)) {
            console.log('FIll in all fields, plz');
            return false;
        } else if (!MY.validation.isEmail(emailValue)) {
            console.log('Invalid email');
            return false;
        } else if (!MY.validation.isNumber(numberValue)) {
            console.log('Invalid number');
            return false;
        }
    }

    me.isAllCompleted = function(data){
        let result = true;
        for (let i = 0; i < data.length; i++) {
            if (!MY.validation.isNotEmpty(data[i].value)) {
                result = false;
                break
            }
        }
        return result;
    }

    logKey = function (e) {
        if (e.keyCode == 27) {
            onClose();
        }
    }

    MY.form = me;
}());