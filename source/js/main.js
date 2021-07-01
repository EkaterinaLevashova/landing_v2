(function() {

    let openFormButton = document.querySelector('.arrow-down');
    let form = document.querySelector('.form');
    let nav = document.querySelector('.nav');

    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault(); //действие по умолчанию (в данном случае переход нка страницу #) в случае если форма не сработает
            MY.form.open();
        })
    }

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (MY.form.isValid()) {
                console.log('All good');
            } else {
                console.log('Is not valid');
            }
        })
    }
}());