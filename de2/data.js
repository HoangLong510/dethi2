function check() {
    // Full Name
    var sName = document.getElementById("txtName").value;
    if (sName.length == 0) {
        alert("The Full name cannot be blank!");
        document.getElementById("txtName").focus();
        return false;
    }
    if (sName.charAt(0) === ' ') {
        alert("The Full name cannot start with a space!");
        document.getElementById("txtName").focus();
        return false;
    }
    var reName = /^[a-zA-Z ]+$/;
    if(!reName.test(sName)){
        alert("The Full name is incorrect!");
        document.getElementById("txtName").focus();
        return false;
    }

    // Last Name
    var sLastName = document.getElementById("txtLastName").value;
    if (sLastName.length == 0) {
        alert("The Last Name cannot be blank!");
        document.getElementById("txtLastName").focus();
        return false;
    }
    if (sLastName.charAt(0) === ' ') {
        alert("The Last Name cannot start with a space!");
        document.getElementById("txtLastName").focus();
        return false;
    }
    var reLastName = /^[a-zA-Z ]+$/;
    if(!reLastName.test(sLastName)){
        alert("The Last Name is incorrect!");
        document.getElementById("txtLastName").focus();
        return false;
    }

    // Country
    var sCountry = document.getElementById("vCountry").value;
    if (sCountry == 0) {
        alert("Please select your country!");
        document.getElementById("vCountry").focus();
        return false;
    }

    // Mail
    var sMail = document.getElementById("txtMail").value;
    if(sMail == 0){
        alert("The Email cannot be blank!");
        document.getElementById("txtMail").focus();
        return false;
    }
    var reMail = /^\w+[@]\w+[.]\w{3}([.]\w{2})?$/;
    if (!reMail.test(sMail)) {
        alert("Email is incorrect!");
        document.getElementById("txtMail").focus();
        return false;
    }

    // Phone
    var sPhone = document.getElementById("txtPhone").value;
    if(sPhone == 0){
        alert("The Phone number cannot be blank!");
        document.getElementById("txtPhone").focus();
        return false;
    }
    var rePhone = /^[0-9]{8,12}$/;
    if(!rePhone.test(sPhone)){
        alert("The Phone number must be digits only.\nFrom 8-12 numeric characters.");
        document.getElementById("txtPhone").focus();
        return false;
    }
    if(rePhone.test(sPhone)){
        alert("Congratulation!\nYour information has been sent successfully");
    }
}