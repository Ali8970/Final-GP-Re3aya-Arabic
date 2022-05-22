let contact = document.querySelector(".header ul li.active3 a");
contact.addEventListener("click", (e) => {
    e.preventDefault();
    let popupoverlay = document.createElement("div");
    popupoverlay.className = "popup-overlay";
    document.body.appendChild(popupoverlay);

    let popupbox = document.createElement("div");
    popupbox.className = "popup-box";

    let heading = document.createElement("h1");
    let headtxt = document.createTextNode("اتصل بنا");
    heading.appendChild(headtxt);
    popupbox.appendChild(heading);
    document.body.appendChild(popupbox);


    let form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");

    let inputname = document.createElement("input");
    inputname.required = true;
    inputname.className = "name";
    inputname.type = "text";
    inputname.placeholder = "الاسم";
    inputname.value = "";

    let email = document.createElement("input");
    email.required = true;
    email.className = "email";
    email.type = "email";
    email.placeholder = "الايميل";
    email.value = "";

    let inputnumber = document.createElement("input");
    inputnumber.required = true;
    inputname.className = "number";
    inputnumber.type = "text";
    inputnumber.placeholder = "الرقم";
    inputnumber.value = "";



    let textarea = document.createElement("textarea");
    textarea.required = true;
    textarea.className = "textarea";
    textarea.placeholder = "تعليقك";
    textarea.value = "";


    let submit = document.createElement("input");
    submit.className = "active2";
    submit.type = "submit";
    submit.value = "ارسال";



    form.appendChild(inputname);
    form.appendChild(email);
    form.appendChild(inputnumber);
    form.appendChild(textarea);
    form.appendChild(submit);

    popupbox.appendChild(form);
    document.body.appendChild(popupbox);

    let closebutton = document.createElement("span");
    closebutton.className = "close-button";
    let close = document.createTextNode("x");
    closebutton.appendChild(close);
    popupbox.appendChild(closebutton);
    document.body.appendChild(popupbox);
});


document.addEventListener("click", (e) => {
    if (e.target.className == "close-button" || e.target.className == "popup-overlay") {
        // e.target.parentNode.remove();
        document.querySelector(".popup-box").remove();
        document.querySelector(".popup-overlay").remove();
    }
})







let donate = document.querySelector(".header ul li.active4 a");
donate.addEventListener("click", (e) => {
    e.preventDefault();
    let popupoverlay = document.createElement("div");
    popupoverlay.className = "popup-overlay";
    document.body.appendChild(popupoverlay);

    let popupbox = document.createElement("div");
    popupbox.className = "popup-box";

    let heading = document.createElement("h1");
    heading.className = "head1";
    let headtxt = document.createTextNode("التبرع بالدم");
    heading.appendChild(headtxt);
    popupbox.appendChild(heading);
    document.body.appendChild(popupbox);

    let paragraph = document.createElement("p");
    let paragraphtxt = document.createTextNode("تبرع بالدم وانقذ حياة");
    paragraph.appendChild(paragraphtxt);
    popupbox.appendChild(paragraph);
    document.body.appendChild(popupbox);


    let form2 = document.createElement("form");
    form2.setAttribute("method", "post");
    form2.setAttribute("action", "submit.php");
    form2.className = "form2"

    let inputname = document.createElement("input");
    inputname.required = true;
    inputname.className = "name";
    inputname.type = "text";
    inputname.placeholder = "الاسم";
    inputname.value = "";

    let inputnumber = document.createElement("input");
    inputnumber.required = true;
    inputname.className = "number";
    inputnumber.type = "text";
    inputnumber.placeholder = "الرقم";
    inputnumber.value = "";

    let bloodtype = document.createElement("input");
    bloodtype.required = true;
    bloodtype.className = "bloodtype";
    bloodtype.type = "text";
    bloodtype.placeholder = "فصيلة الدم";
    bloodtype.value = "";

    let age = document.createElement("input");
    age.required = true;
    age.className = "age";
    age.type = "number"
    age.placeholder = "العمر";
    age.value = "";

    let loc = document.createElement("input");
    loc.required = true;
    loc.className = "location";
    loc.type = "text";
    loc.placeholder = "الموقع";
    loc.value = "";

    let fees = document.createElement("input");
    fees.required = true;
    fees.className = "fees";
    fees.type = "text";
    fees.placeholder = "السعر";
    fees.value = "";


    let photo = document.createElement("input");
    photo.required = true;
    photo.className = "custom-file-input";
    photo.type = "file";
    photo.value = "";


    let submit = document.createElement("input");
    submit.className = "active2";
    submit.type = "submit";
    submit.value = "ارسال";



    form2.appendChild(inputname);
    form2.appendChild(inputnumber);
    form2.appendChild(bloodtype);
    form2.appendChild(age);
    form2.appendChild(loc);
    form2.appendChild(fees);
    form2.appendChild(photo);
    form2.appendChild(submit);

    popupbox.appendChild(form2);
    document.body.appendChild(popupbox);

    let closebutton = document.createElement("span");
    closebutton.className = "close-button";
    let close = document.createTextNode("x");
    closebutton.appendChild(close);
    popupbox.appendChild(closebutton);
    document.body.appendChild(popupbox);



});


document.addEventListener("click", (e) => {
    if (e.target.className == "close-button" || e.target.className == "popup-overlay") {
        // e.target.parentNode.remove();
        document.querySelector(".popup-box").remove();
        document.querySelector(".popup-overlay").remove();
    }
})

