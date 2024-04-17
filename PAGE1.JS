const delivery = document.getElementById('delivery');
const name1 = document.getElementById('name');
const phoneNumber = document.getElementById('phoneNumber');
const city = document.getElementById('city');
const street = document.getElementById('street');
const homeNumber = document.getElementById('homeNumber');
const floor = document.getElementById('floor');
const enter = document.getElementById('enter');
const notes = document.getElementById('notes');
const form2 = document.getElementById('form2');
const permit = document.getElementById('permit');
const take = document.getElementById('take');

delivery.onclick = () =>{ 
    form2.style.visibility = "visible";
    
};

function validateInput(input) {
    input.value = input.value.replace(/\D/g, '').slice(0, 10);
  }

phoneNumber.onchange = () =>{
    const details = JSON.parse(localStorage.getItem(phoneNumber.value));
    if(details != null){
        localStorage.setItem('phoneNumber',phoneNumber.value);
            name1.value = details.name;
            if(details.city)
                city.value = details.city;
            if(details.street)
                street.value = details.street;
            homeNumber.value = details.homeNumber;
            floor.value = details.floor;
            enter.value = details.enter;
            if(details.notes)
                notes.value = details.notes;
    }
   }
        permit.onclick = (event) =>{
            const user ={
                name: name1.value,
                city: city.value,
                street: street.value,
                homeNumber: homeNumber.value,
                floor: floor.value,
                enter: enter.value,
                notes: notes.value,
            }
            localStorage.setItem(phoneNumber.value, JSON.stringify(user));
            sessionStorage.setItem('phoneNumber', phoneNumber.value);
            sessionStorage.setItem('delivery', true);
        }
        take.onclick = () =>{
             details=JSON.parse(localStorage.getItem(phoneNumber.value));
             if(details!=null){
                details.name=name1.value;
                localStorage.setItem(phoneNumber.value, JSON.stringify(details));
                sessionStorage.setItem('phoneNumber', phoneNumber.value);
                sessionStorage.setItem('delivery', false);
             }
             else{
                const newUser={
                phoneNumber: phoneNumber.value,
                name: name1.value,
             }
                localStorage.setItem(phoneNumber.value, JSON.stringify(newUser));
                sessionStorage.setItem('phoneNumber', phoneNumber.value);
                sessionStorage.setItem('delivery', false);
            }
             
       
}
