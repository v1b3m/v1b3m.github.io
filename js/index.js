const openNav = () => {
    document.getElementById('mySidenav').style.width = '250px';
};

const closeNav = () => {
    document.getElementById('mySidenav').style.width = '0';
};

const showMe = id => {
    const allDivs = ['projects', 'competetions', 'social', 'connect', 'awards'];
    const about = document.getElementById('about');
    about.style.display = 'none';
    const target = document.getElementById(id);

    for (let div of allDivs) {
        if (div != id) {
            document.getElementById(div).style.display = 'none';
        }
    }

    target.style.display = target.style.display == 'block' ? 'none' : 'block';
};

const ValidateEmail = email => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }
    return false;
};

const sendEmail = () => {
    const message = document.getElementById('message').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const url =
        'https://us-central1-personal-website-249113.cloudfunctions.net/send-email';

    if (checkEmail() && checkText('name') && checkText('message')) {
        fetch(url, {
            // mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                name,
                email,
                message
            }
        })
            .then(response => {
                console.log('Response', response);
            })
            .catch(error => {
                console.log('Error', error);
            });
    }
};

const checkText = text => {
    const textError = document.getElementById(`${text}-error`);
    const name = document.getElementById(text).value;

    if (name.length === 0) {
        textError.style.display = 'block';
        textError.innerHTML = `Please enter your ${text} here`;
        document.getElementById('submit').disabled = true;
        return false;
    } else {
        textError.style.display = 'none';
        document.getElementById('submit').disabled = false;
        return true;
    }
};

const checkEmail = () => {
    const email = document.getElementById('email').value;
    const error = document.getElementById('email-error');

    if (!ValidateEmail(email)) {
        error.style.display = 'block';
        error.innerHTML = 'Please enter a valid email address';
        document.getElementById('submit').disabled = true;
        return false;
    } else {
        error.style.display = 'none';
        document.getElementById('submit').disabled = false;
        return true;
    }
};
