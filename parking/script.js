const regex = /^[A-Za-z]+[\s][A-Za-z]+$/;
var textField = document.querySelector('#name');
var userName = document.getElementById("name").value;
var empId;
textField.setAttribute('pattern', regex);
textField.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        userName = document.getElementById("name").value;
        if (userName.length >= 2 && regex.test(userName)) {
            document.querySelectorAll('.gender').forEach((_element) => {
                _element.style.visibility = 'visible';
                document.getElementById('userGender').innerHTML = "Hi " + userName + ", Can I know your gender";
                document.querySelectorAll('.name').forEach((_element) => {
                    _element.style.visibility = 'hidden';
                });
            });
        }
        else {
            textField.setAttribute('title', validateName(regex, userName));
        }
    }
});

/**
 * will check whether name is valid or not
 * @param {*} inputRegex 
 * @param {*} name 
 * @returns 
 */
function validateName(inputRegex, name) {
    if (!(inputRegex.test(name))) {
        return "Please enter valid name";
    }
    else if (name.length < 2) {
        return "Length should be min. 2";
    }
    else {
        return "Invalid name";
    }
}

var emailRegex = /^[A-Za-z0-9\-\_\+\.]+[@][a-zA-Z\-]+[.][a-z]{2,3}$/;

/**
 * will display email field to user and hide gender field
 */
function showEmail() {
    document.querySelectorAll('.email').forEach((_element) => {
        _element.style.visibility = 'visible';
        document.getElementById('emailId').innerHTML = "Hi " + userName + ", Can I know your email";
    });
    document.querySelectorAll('.gender').forEach((_element) => {
        _element.style.visibility = 'hidden';
    });
}

var userEmail = document.querySelector('#email');
userEmail.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        if (emailRegex.test(userEmail.value)) {
            document.querySelectorAll('.password').forEach((_element) => {
                _element.style.visibility = 'visible';
                document.getElementById('pass').innerHTML = "Hi " + userName + ", Can I know your password";
            });
            document.getElementById('eyeButton').style.visibility = 'visible';
            document.querySelectorAll('.email').forEach((_element) => {
                _element.style.visibility = 'hidden';
            });
        }
        else {
            userEmail.setAttribute('title', validateEmail());
        }
    }
});

/**
 * 
 * @returns will check email is valid or not
 */
function validateEmail() {
    if (!(emailRegex.test(userEmail.value))) {
        return "Please enter valid email";
    }
}

var passRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\!\@\#\$\%\^\&\.\_])/;
var userPassword = document.querySelector('#password');
var passwordValue = "";
function showBorder() {
    passwordValue = userPassword.value;
    if ((passRegex.test(passwordValue)) && passwordValue.length >= 8 && passwordValue.length <= 11) {
        document.getElementById('password').style.border = '2px solid orange';
    }
    else if (passRegex.test(passwordValue) && passwordValue.length >= 12) {
        document.getElementById('password').style.border = '2px solid green';
    }
    else {
        document.getElementById('password').style.borderColor = 'red';
    }
}

userPassword.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        passwordValue = userPassword.value;
        if ((passRegex.test(passwordValue)) && passwordValue.length >= 8 && passwordValue.length <= 11) {
            document.getElementById('password').style.border = '2px solid orange';
        }
        else if (passRegex.test(passwordValue) && passwordValue.length >= 12) {
            document.getElementById('password').style.border = '2px solid green';
            document.querySelectorAll('.confirmPassword').forEach((_element) => {
                _element.style.visibility = 'visible';
            });
            document.querySelectorAll('.password').forEach((_element) => {
                _element.style.visibility = 'hidden';
            });
            document.getElementById('eyeButton').style.visibility = 'hidden';
        }
        else {
            document.getElementById('password').style.borderColor = 'red';
            userPassword.setAttribute('title', "Please enter strong password");
        }
    }
});

/**
 * 
 * @returns whether password is valid or not
 */
function validatePassword() {
    if ((passRegex.test(userPassword.value))) {
    }
    else {
        return "Please enter valid email";
    }
}

var confirmedPassword = document.querySelector('#confirm_password');
confirmedPassword.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        let confirmedPasswordValue = document.querySelector('#confirm_password').value;
        if (passwordValue == confirmedPasswordValue) {
            document.querySelectorAll('.contact').forEach((_element) => {
                _element.style.visibility = 'visible';
                document.getElementById('contact_No').innerHTML = "Hi " + userName + ", Can I know your contact no.";
            });
            document.querySelectorAll('.confirmPassword').forEach((_element) => {
                _element.style.visibility = 'hidden';
            });
        }
        else {

            confirmedPassword.setAttribute('title', "Password does not matches");
            alert("Password does not matches");
        }
    }
});

var contactNoRegex = /^[6-9][0-9]{9}/;
var userContact = document.querySelector('#contact_no');
userContact.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        if (contactNoRegex.test(userContact.value) && userContact.value.length == 10) {
            collapseForm();
        }
        else {
            alert("Invalid contact no.");
        }
    }
});

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
/**
 * will generate a random empId
 * @param {*} length ->length of empId which we req.
 * @returns random empId
 */
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

/**
 * will collapse form
 */
function collapseForm() {
    empId = generateString(5)
    alert("Employee id is " + empId);
    document.querySelectorAll('.contact').forEach((_element) => {
        _element.style.visibility = 'hidden';
    });
    document.getElementById('regSection').style.display = 'none';
    document.getElementById('vehicleRegSec').style.display = 'block';
}

/**
 * will check if form is valid or not
 */
function closeForm() {
    if (!typeof empId == undefined || (contactNoRegex.test(userContact.value) && userContact.value.length == 10)) {
        collapseForm();
    }
    else {
        alert("Form is incomplete");
    }
}

const vehicleNameRegex = /^[A-Z]{1}[A-Za-z\s]+/;
var vehicleName = document.querySelector('#company');
let vehicleValue;
vehicleName.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        vehicleValue = vehicleName.value;
        if (vehicleNameRegex.test(vehicleValue)) {
            document.querySelectorAll('.modelName').forEach((_element) => {
                _element.style.visibility = 'visible';
                document.querySelectorAll('.companyName').forEach((_element) => {
                    _element.style.visibility = 'hidden';
                });
            });
        }
        else {
            vehicleName.setAttribute('title', validateName(vehicleNameRegex, vehicleValue));
            alert("Please enter valid vehicle name\n" + "Vehicle name must start with capital letter");
        }
    }
});

var vehicleModel = document.getElementById('model');
vehicleModel.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        document.querySelectorAll('.vehicleType').forEach((_element) => {
            _element.style.visibility = 'visible';
            document.querySelectorAll('.modelName').forEach((_element) => {
                _element.style.visibility = 'hidden';
            });
        });
    }
});

function showVehicleNumber() {
    document.querySelectorAll('.vehicleNumber').forEach((_element) => {
        _element.style.visibility = 'visible';
        document.querySelectorAll('.vehicleType').forEach((_element) => {
            _element.style.visibility = 'hidden';
        });
    });
}

var vehicleNumberFiels = document.getElementById('VehicleNo');
vehicleNumberFiels.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        document.querySelectorAll('.empId').forEach((_element) => {
            _element.style.visibility = 'visible';
            document.querySelectorAll('.vehicleNumber').forEach((_element) => {
                _element.style.visibility = 'hidden';
            });
        });
    }
});

var empIdField = document.getElementById('empId');
empIdField.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        document.querySelectorAll('.identification').forEach((_element) => {
            _element.style.visibility = 'visible';
            document.querySelectorAll('.empId').forEach((_element) => {
                _element.style.visibility = 'hidden';
            });
        });
    }
});

var identificationField = document.getElementById('identification');
identificationField.addEventListener('keydown', function (event) {
    if (event.code == 'Enter') {
        collapseVehForm();
        document.querySelectorAll('.identification').forEach((_element) => {
            _element.style.visibility = 'hidden';
        });
    }
});

function collapseVehForm() {
    document.getElementById('vehicleRegSec').style.display = 'none';
    document.getElementById('pricing').style.display = 'block';
}

function showPass(vehicleType, vehicleInputField) {
    let pricing = document.getElementById(vehicleType);
    let price = pricing.value;
    pricing.addEventListener('change', function () {
        price = pricing.value;
    });
    document.getElementById(vehicleInputField).value = price;
}

/**
 * used for currency converter
 * @param {} planType->daily,monthly or yearly
 * @param {*} price ->price of the plan
 * @param {*} vehicleType ->type of vehicle eg. cycle, motorcycle, four wheeler
 */
function conversion(planType, price, vehicleType) {
    let pricing = document.getElementById(planType);
    const result = document.getElementById(price);
    const from = document.getElementById(vehicleType);
    let toCurrency = from.value;
    let amt = pricing.value;
    fetch(`https://api.exchangerate-api.com/v4/latest/${"INR"}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let rate = data.rates[toCurrency];
            let total = rate * amt;
            result.value = `${amt} ${"INR"} = ${total} ${toCurrency}`;
        });
}

function closeVehForm() {
    if (document.getElementById('identification').visibility == 'visible') {
        document.getElementById('vehicleRegSec').display = 'none';
        document.getElementById('pricing').display = 'block';
    }
}

/**
 * will display password field
 */
function showPass() {
    let value = document.getElementById('password').value;
    let inputType = document.getElementById('password');
    if (inputType.type == 'password')
        inputType.type = 'text';
    else {
        inputType.type = 'password';
    }
    let eyeType = document.getElementById('eyeButton');
    if (eyeType.attributes.src.value === 'images/eye-password-hide-svgrepo-com.svg') {
        eyeType.attributes.src.value = 'images/eye-view-interface-symbol-svgrepo-com.svg';
    }
    else {
        eyeType.src = "images/eye-password-hide-svgrepo-com.svg";
    }
}
