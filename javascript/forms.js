if (localStorage.getItem("plan") == null) {
  document.getElementById("plan-info").innerHTML =
    "Postpaid Plan, Price - ₹401";
} else {
  document.getElementById("plan-info").innerHTML = localStorage.getItem("plan");
  localStorage.removeItem("plan");
}

var alertD = document.getElementById("alert-dialog");
alertD.style.display = "none";

var alertText = document.getElementById("alert-text");



document.getElementById("submit-btn").onclick = function () {
  var name1 = document.getElementById("name1").value;
  var phone1 = document.getElementById("phone1").value;
  var phoneNumber = document.getElementById("phone-number").value;
  // var email1 = document.getElementById("email").value;
  var postCode = document.getElementById("post-code").value;
  var address1 = document.getElementById("address1").value;
  if (
    name1.length == 0 ||
    name1 == "" ||
    phone1 == "" ||
    phoneNumber == "" ||
    postCode == "" ||
    address1 == "" ||
    phone1.length == 0 ||
    phoneNumber.length == 0 ||
    postCode.length == 0 ||
    address1.length == 0
  ) {
    alert(
      "Warning! - Some fields are empty! please check "
    );
  } else {
    alert("Successfully");
  }
};
