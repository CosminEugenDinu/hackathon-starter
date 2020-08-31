
(function implementRecaptcha(form, targetButton){
// set globals
window.implementRecaptcha = implementRecaptcha;
// the name of captcha callback is the name from express-recaptcha 'cb', like new Recaptcha('site_key', 'secret_key', {callback: 'cb'})
window.captchaCallback = captchaCallback;

const recaptchaResponseInput = document.createElement('input');
recaptchaResponseInput.setAttribute('name', 'g-recaptcha-response');
recaptchaResponseInput.setAttribute('type', 'hidden');
const notifications = document.createElement('div');

let google_responded = false;
let warnings_rendered = false;


// check if Google recaptcha script is loaded
try {
    if (grecaptcha) {
        // if reference "grecaptcha" exists
        const time = 2 // seconds
        wait(time*1000).then(()=>{
            // if passed too long and no result 
            if ( ! google_responded){
                console.error(`Too slow response from Google recaptcha; over ${time} seconds.`);
                const userMsg = "Internet too slow or no connection";
                // check first if form exists
                form && renderWarnings(userMsg, form.parentNode);
            }})
        }
    }
catch (ReferrenceError) {
    console.error('Error loading grecaptcha from Google recaptcha.');
    renderWarnings("You may not have internet.", form.parentNode);
}

// global callback called by then method 
// of grecaptcha.execute('site_key', {action:'homepage'})
function captchaCallback(token){
    google_responded = true;
    if (!form || !targetButton)
        return;

    removeWarnings(notifications);
    recaptchaResponseInput.setAttribute('value', token);
    form.appendChild(recaptchaResponseInput);
    targetButton.setAttribute('class', 'btn btn-success');
    targetButton.setAttribute('type', 'submit')
}


function renderWarnings(msg, parentElement){
    if (warnings_rendered) return;

    const warningMsg = document.createElement('div');
    warningMsg.setAttribute('class', 'alert alert-danger');
    warningMsg.innerHTML = msg;
    const reloadBtn = document.createElement('button', {type:'button'});
    reloadBtn.setAttribute('class', 'btn btn-primary');
    reloadBtn.innerHTML = "Refresh";
    reloadBtn.onclick = () => location.reload();

    notifications.appendChild(warningMsg);
    notifications.appendChild(reloadBtn);
    // form.parentNode.appendChild(notifications);
    parentElement.appendChild(notifications);

    warnings_rendered = true;

    return notifications;
}

function removeWarnings(parentElement){
    if (! warnings_rendered) return;

    while (parentElement.firstChild)
        parentElement.removeChild(parentElement.firstChild);
    
    warnings_rendered = false;
}

// wrapper over setTimeout: to handle errors
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
} 

})()
