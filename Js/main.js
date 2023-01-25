function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
window.setTimeout(openForm, 4000);
// var submitButton = document.getElementById("submit_form");
// var form = document.getElementById("email_form");
// form.addEventListener("submit", function (e) {
//     setTimeout(function() {
//         submitButton.value = "Sending...";
//         submitButton.disabled = true;
//     }, 1);
// });
const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
  toastTrigger.addEventListener("click", () => {
    const toast = new bootstrap.Toast(toastLiveExample);

    toast.show();
  });
}
//update this with your $form selector
var form_id = "jquery_form";

var data = {
  access_token: "jnhoqtdu1bysvbqhc2o3y7dh",
};

function onSuccess() {
  // remove this to avoid redirect
  // window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
  closeForm();
  sendButton.val("سجّل الآن");
  sendButton.prop("disabled", false);
  if (toastTrigger) {
      const toast = new bootstrap.Toast(toastLiveExample);
      toast.show();
  }
}

function onError(error) {
  // remove this to avoid redirect
  // window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
  sendButton.val("سجّل الآن");
  sendButton.prop("disabled", false);
  // closeForm()
}

var sendButton = $("#" + form_id + " [name='send']");

function send() {
  sendButton.val("Sending…");
  sendButton.prop("disabled", true);

  var subject = $("#" + form_id + " [name='subject']").val();
  var first_name = $("#" + form_id + " [name='first_name']").val();
  var first_name_two = $("#" + form_id + " [name='first_name_two']").val();
  var reply_to = $("#" + form_id + " [name='reply_to']").val();
  var reply_to_two = $("#" + form_id + " [name='reply_to_two']").val();
  var extra_phone_number = $(
    "#" + form_id + " [name='extra_phone_number']"
  ).val();
  var extra_phone_number_two = $(
    "#" + form_id + " [name='extra_phone_number_two']"
  ).val();
  var country = $("#" + form_id + " [name='country']").val();
  var country_two = $("#" + form_id + " [name='country_two']").val();
  var message = "";
  if (first_name || reply_to || extra_phone_number | country) {
    message = `
                 Customer Name : ${first_name}
                 Email Address : ${reply_to}
                 Phone Number : ${country} ${extra_phone_number}
               `;
  } else {
    message = `
              Customer Name : ${first_name_two}
              Email Address : ${reply_to_two}
              Phone Number : ${country_two} ${extra_phone_number_two}
            `;
  }
  data["subject"] = "Jouri_Hills - Customer Details";
  data["text"] = message;

  $.post("https://postmail.invotes.com/send", data, onSuccess).fail(onError);

  return false;
}

sendButton.on("click", send);

var $form = $("#" + form_id);
$form.submit(function (event) {
  event.preventDefault();
});
