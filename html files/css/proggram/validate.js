function printerrtext(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}
// Defining a function to validate form
function validateForm() {
    // Retrieving the values of form elements
    var name = document.demoForm.name.value;
    var email = document.demoForm.email.value;
    var mobile = document.demoForm.mobile.value;
    var country = document.demoForm.country.value;
    var gender = document.demoForm.gender.value;
    var pswd = document.demoForm.pswd.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    // Defining errtext variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = pswdErr = true;
    // Validate name
    if (name == "") {
        printerrtext("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-z\.A-Z\s]+$/;
        if (regex.test(name) === false) {
            printerrtext("nameErr", "Please enter a valid name");
        } else {
            printerrtext("nameErr", "");
            nameErr = false;
        }
    }
    // Validate email address
    if (email == "") {
        printerrtext("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printerrtext("emailErr", "Please enter a valid email address");
        } else {
            printerrtext("emailErr", "");
            emailErr = false;
        }
    }
    // Validate mobile number
    if (mobile == "") {
        printerrtext("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if (regex.test(mobile) === false) {
            printerrtext("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printerrtext("mobileErr", "");
            mobileErr = false;
        }
    }
    // Validate Password
    if (pswd == "") {
        printerrtext("pswdErr", "Please enter your password");
    } else {
        var regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (regex.test(pswd) === false) {
            printerrtext("pswdErr", "Min : 6 chacracter in form Asd4$l");
        } else {
            printerrtext("pswdErr", "");
            pswdErr = false;
        }
    }
    // Validate country
    if (country == "Select") {
        printerrtext("countryErr", "Please select your country");
    } else {
        printerrtext("countryErr", "");
        countryErr = false;
    }
    // Validate gender
    if (gender == "") {
        printerrtext("genderErr", "Please select your gender");
    } else {
        printerrtext("genderErr", "");
        genderErr = false;
    }
    // Prevent the form from being submitted if there are any errtexts
    if ((nameErr || emailErr || mobileErr || countryErr || genderErr || pswdErr) == true) {
        return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
            "Full Name: " + name + "\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Country: " + country + "\n" +
            "Gender: " + gender + "\n";
        if (hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }


    let a;
    let Data;
    let time;
    setInterval(() => {
       
      a = new Date();
      let Data = a.toLocaleDateString();
      let time = a.getHours() +':'+ a.getMinutes() +':'+ a.getSeconds();  
      document.getElementById('time').innerHTML= time +" on "+Data ;
     }
      , 1000);
      
};