let nameBase = 'Anonymous';
const nameType = document.querySelector('#name-input');
const nameText = document.querySelector('#name-output');

const nameTypeAdd = (event) => {
    if (event.currentTarget.value === '') {
        nameText.textContent = nameBase;
    }
    else {
    nameText.textContent = event.currentTarget.value
    }
};

nameType.addEventListener('change', nameTypeAdd);
