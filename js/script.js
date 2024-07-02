function tombol_submit() {
     let source_name = document.querySelector("#InputName");
     let source_role = document.querySelector("#InputRole");
     let source_avail = document.querySelector("#InputAvail");
     let source_age = document.querySelector("#InputAge");
     let source_location = document.querySelector("#Inputlocation");
     let source_exp = document.querySelector("#InputExp");
     let source_email = document.querySelector("#InputEmail");

     let target_name = document.querySelector("#name");
     let target_role = document.querySelector("#role");
     let target_avail = document.querySelector("#avail");
     let target_age = document.querySelector("#age");
     let target_location = document.querySelector("#location");
     let target_exp = document.querySelector("#exp");
     let target_email = document.querySelector("#email");


     let form_el = document.querySelector(".form-body");
     console.log(form_el);
    
     target_name.innerText = source_name.value;
     target_role.innerText = source_role.value;
     target_avail.innerText = source_avail.value;
     target_age.innerText = source_age.value;
     target_location.innerText = source_location.value;
     target_exp.innerText = source_exp.value;
     target_email.innerText = source_email.value;
     form_el.style.display = "none";
    
}
  
function show_form() {
    let form_el = document.querySelector(".form-body");
    console.log(form_el);
  
    form_el.style.display = "block";
}