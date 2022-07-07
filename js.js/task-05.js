const nameType = document.querySelector('#name-input');
const nameText = document.querySelector('#name-output');

nameType.addEventListener('input', function (event) {
    nameText.textContent = event.currentTarget.value;

    if (event.currentTarget.value === '') {
        nameText.textContent = 'Anonymous';
    }
    return
});

/*
let nameBase = 'Anonymous';
const nameType = document.querySelector('#name-input');
const nameText = document.querySelector('#name-output');

const nameTypeAdd = (event) => {
    if (event.currentTarget.value === '') {
        nameText.textContent = nameBase;
    }
    else {
    }
};

nameType.addEventListener('change', nameTypeAdd);
*/



