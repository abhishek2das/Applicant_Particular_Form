$(document).ready(function () {
    $(".qlf").click(function () {
        $(".p10").show(2000);
        $(".p12").hide(900);
        $(".pg").hide(900)
        $(".p-pg").hide(900)
    });
    $(".qlf12").click(function () {
        $(".p12").show(2000);
        $(".p10").hide(900)
        $(".pg").hide(900)
        $(".p-pg").hide(900)
    });
    $(".qlfg").click(function () {
        $(".pg").show(2000)
        $(".p12").hide(900);
        $(".p10").hide(900)
        $(".p-pg").hide(900)
    });
    $(".qlf-pg").click(function () {
        $(".p-pg").show(2000);
        $(".pg").hide(900);
        $(".p12").hide(900);
        $(".p10").hide(900);
    });
});

///////////////////////////////////////////////////




$("#rzp-button1").click(function () {

    var value1 = $("input[type=radio][name=Passport]:checked").val();
    var value2 = $("input[type=radio][name=Triangulor]:checked").val();


    let firstName = document.getElementById("inputfirstname").value;
    let lastName = document.getElementById("inputlastname").value;
    let birtday = document.getElementById("inputbirthday").value;
    let email = document.getElementById("inputEmailId").value;
    let mnumber = document.getElementById("inputNumber").value;
    let address = document.getElementById("inputAddress").value;
    let gender = document.getElementById("inputGender").value;
    let stay = document.getElementById("inputStay").value;
    let passport_yess_no = value1
    let Triangulor_yes_no = value2
    let upiID = document.getElementById("inputUpiId").value;



    let FirstN = "";
    let birth = "";
    let mail = "";
    let num = "";
    let addr = "";
    let gend = "";
    let stay1 = "";
    let PYessNo = "";
    let tYessNO = "";
    let upi = "";

    flag = true

    if (firstName == "" && flag == true) {
        FirstN = "Enter FirstName"
        document.getElementById("inputfirstname").focus();
        flag = false
    }
    if (birtday == "" && flag == true) {
        birth = "Enter Date of Birth"
        document.getElementById("inputbirthday").focus();
        flag = false
    }
    if (email == "" && flag == true) {
        mail = "Enter E-mail-ID"
        document.getElementById("inputEmailId").focus();
        flag = false

    }
    if (mnumber == "" && flag == true) {
        num = "Enter Contact Number"
        document.getElementById("inputNumber").focus();
        flag = false
    }
    if (address == "" && flag == true) {
        addr = "Enter Present Address"
        document.getElementById("inputAddress").focus();
        flag = false
    }
    if (gender == "NotSelected" && flag == true) {
        gend = "Select Gender"
        document.getElementById("inputGender").focus();
        flag = false
    }
    if (stay == "NotSelected" && flag == true) {
        stay1 = "Select stay , "
        document.getElementById("inputStay").focus();
        flag = false
    }
    if (passport_yess_no == undefined && flag == true) {
        PYessNo = "select Do you have a valid Passport or Not"
        document.getElementById("passport-yes").focus();
        flag = false

    }
    if (Triangulor_yes_no == undefined && flag == true) {
        tYessNO = "Have you ever been attend earlier any workshop with Triangulor or not"
        document.getElementById("triangulor1").focus();
        flag = false
    }
    if (upiID == "" && flag == true) {
        upi = "Enter your UPI-ID"
        document.getElementById("inputUpiId").focus();
        flag = false
    }
    if (firstName == "" || birtday == "" || email == "" ||
        mnumber == "" || address == "" || gender == "NotSelected" || stay == "NotSelected" || passport_yess_no == undefined || Triangulor_yes_no == undefined || upiID == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: "Please " + FirstN + " " + birth + " " + mail + " " + num + " " + addr + " " + gend + " " + stay1 + " " + PYessNo + " " + tYessNO + " " + upi
        })

    } else {
        barcodeimg();
    console.log("form submitted " + firstName + " " + lastName + " " + birtday + " " + email + " " + mnumber + " " + address + " " + gender + " " + stay + " " + passport_yess_no + " " + Triangulor_yes_no + " " + upiID)
    }
});
/////////////////////////////////////////////////////////////////////////////////////////////
function barcodeimg() {
  
        $(".ms").slideDown(1000);
        $(".ms1").hide();
        $(".body-hid").hide()
    $("#next1").click(function () {
        $(".ms1").slideDown(500);
        $(".ms").hide();

    })
}

function doneButton() {
    transaction = document.getElementById("inputTransactionId").value;
    if ( transaction == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: "Please Enter Your Transaction-ID"
        });
    } else {
        finalss()
    }

}

function finalss() {
    $(".ms1").hide();
    $(".body-hid").show()
    dataSaveRequest()
}


function dataSaveRequest() {

    let firstName = document.getElementById("inputfirstname").value;
    let lastName = document.getElementById("inputlastname").value;
    let allName = firstName + " " + lastName
    var value1 = $("input[type=radio][name=Passport]:checked").val();
    var value2 = $("input[type=radio][name=Triangulor]:checked").val();
    let request = {
        "name": allName,
        "date_of_birth": document.getElementById('inputbirthday').value,
        "email": document.getElementById('inputEmailId').value,
        "contact_number": document.getElementById('inputNumber').value,
        "present_address": document.getElementById('inputAddress').value,
        "gender": document.getElementById('inputGender').value,
        "staying_with": document.getElementById('inputStay').value,
        "have_passport": value1,
        "have_attend_workshop": value2,




        "ed_qu_specialization1": document.getElementById("inputspecialization10th").value,
        "ed_qu_institute1": document.getElementById("inputinstitute10th").value,
        "ed_qu_passing_yr1": document.getElementById("inputpassing10th").value,
        "ed_qu_percentage1": document.getElementById("inputpercentage10th").value,

        "ed_qu_specialization2": document.getElementById('inputspecialization12th').value,
        "ed_qu_institute2": document.getElementById("inputinstitute12th").value,
        "ed_qu_passing_yr2": document.getElementById("inputpassing12th").value,
        "ed_qu_percentage2": document.getElementById("inputpercentage12th").value,

        "ed_qu_specialization3": document.getElementById("inputspecialization-g").value,
        "ed_qu_institute3": document.getElementById("inputinstitute-g").value,
        "ed_qu_passing_yr3": document.getElementById("inputpassing-g").value,
        "ed_qu_percentage3": document.getElementById("inputpercentage-g").value,

        "ed_qu_specialization4": document.getElementById("inputspecialization-pg").value,
        "ed_qu_institute4": document.getElementById("inputinstitute-pg").value,
        "ed_qu_passing_yr4": document.getElementById("inputpassing-pg").value,
        "ed_qu_percentage4": document.getElementById("inputpercentage-pg").value,

        "upi_id":document.getElementById("inputUpiId").value,
        "transaction_id":document.getElementById("inputTransactionId").value
    }

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "https://api.starsgyan.com/StarsGyanAPIQA/api/survey/application",
        data: JSON.stringify(request),
        success: function (data) {
            // $("#resultarea").text(data);
            console.log(JSON.stringify(data)); 
            if (data[0] == "Registered successfully") {
                // storeBasicData();
                // rzp1.open();
                // e.preventDefault();
                Swal.fire({
                    icon: 'success',
                    text: "We will update you about your registration with in a one hour by your E-mail ID: " + document.getElementById("inputEmailId").value,
                    // text: "payment id = " + response.razorpay_payment_id,
                    showConfirmButton: true,
                })
            }
        },
        error: function (error) {
            alert('error; ' + eval(JSON.stringify(error)))
        }
    });
}


function validateEmail(emailField) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField.value) == false) {
        emailField.value = "";

        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: "Please Enter the correct Email id Example@gamil.com"
        })
        return false;
    }

    return true;
}

function ValidateNo() {
    var phoneNo = document.getElementById('inputNumber');
    if (phoneNo.value.length < 10 || phoneNo.value.length > 10) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: "Please Enter the correct 10 digit Mobile Number"

        })
        document.getElementById('inputNumber').value = "";
        return false;
    }
}

function validatedate() {
    var bday = document.getElementById("inputbirthday").value;
    bday = parseInt(bday)
    if (bday > 2004) {

        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: "you are not eligible"
        });

    }
}
// function validateUpi(){
//     var vali = /^[\w\.\-_]{3,}@[a-zA-Z]{3,}/;

//     if (vali.test(emailField.value) == false) {
//         emailField.value = "";

//         Swal.fire({
//             icon: 'warning',
//             title: 'Oops...',
//             text: "Please Enter the correct Email id Example@gamil.com"
//         })
//         return false;
//     }

//     return true;
// }
