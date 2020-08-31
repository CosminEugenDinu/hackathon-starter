

/* eslint-env jquery, browser */
$(document).ready(() => {

const form = document.getElementById('captcha-form-id');
const targetButton = document.getElementById('captcha-button-id')
implementRecaptcha(form, targetButton);

});
