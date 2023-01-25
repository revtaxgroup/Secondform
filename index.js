function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    checkedValue:document.getElementById("checkedValue").value,
    checkedValue1:document.getElementById("checkedValue1").value,
    checkedValue2:document.getElementById("checkedValue2").value,
    // slum1:document.getElementById("slum1").value,
  };

  const serviceID = "service_3gwsmne";
  const templateID = "template_r9vx004";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("checkedValue").value,
        document.getElementById("checkedValue1").value,
        document.getElementById("checkedValue2").value,
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}

