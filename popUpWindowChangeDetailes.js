
const penIconButton = document.getElementById('penIconButton');
    
penIconButton.onclick = () => {
        const popUpWindow = document.createElement('div');
        popUpWindow.id = 'popUpWindow';
        document.body.appendChild(popUpWindow);
        popUpWindow.classList.add('popup-window');
        popUpWindow.style.display = 'block';

        const popUpBlackWindowRight = document.createElement('div');
        popUpBlackWindowRight.id = 'popUpBlackWindowRight';
        document.body.appendChild(popUpBlackWindowRight);
        popUpBlackWindowRight.style.display = 'block'
        popUpBlackWindowRight.classList.add('popBlackWindow');

        const changeNameInput = document.createElement('input');
        changeNameInput.placeholder = "שם";
        changeNameInput.setAttribute('class', 'position-relative col-lg-3 col-md-3 col-sm-3 col-4');
        changeNameInput.id = 'changeNameInput';
        popUpWindow.appendChild(changeNameInput);

        const deleteButton = document.createElement('button');
            deleteButton.innerHTML = "x";
            deleteButton.classList.add('delete');
            deleteButton.id = 'deleteButton';
            popUpWindow.appendChild(deleteButton);

            deleteButton.onclick = () => {
                document.body.removeChild(popUpWindow);
                document.body.removeChild(popUpBlackWindowRight);
            }

        const takeOrDeliveryChange = document.createElement('div');
        const takeButton = document.createElement('button');
        const deliveryButton = document.createElement('button');
        takeOrDeliveryChange.setAttribute('class', 'position-relative d-flex justify-content-center mt-3');
        takeButton.setAttribute('class', 'btn btn-secondary mr-3 m-1 mt-3 p-3');
        deliveryButton.setAttribute('class', 'btn btn-secondary m-1 mt-3 p-3');
        takeButton.innerHTML = "איסוף עצמי";
        deliveryButton.innerHTML = "משלוח";
        takeOrDeliveryChange.appendChild(deliveryButton);
        takeOrDeliveryChange.appendChild(takeButton);
        popUpWindow.appendChild(takeOrDeliveryChange);
        const phoneNumber = sessionStorage.getItem('phoneNumber');

        let changeOneTime =0;
        deliveryButton.onclick = () => {
            if(changeOneTime === 0){
                changeOneTime = 1;
            const changeCity = document.createElement('input');
            changeCity.placeholder = "עיר";
            changeCity.setAttribute('class', 'changeDetails mt-5');
            popUpWindow.appendChild(changeCity);

            const changeStreet = document.createElement('input');
            changeStreet.placeholder = "רחוב";
            changeStreet.setAttribute('class', 'changeDetails mt-4');
            popUpWindow.appendChild(changeStreet);

            const changeHomeNumber = document.createElement('input');
            changeHomeNumber.placeholder = "מספר בית";
            changeHomeNumber.type = 'number';
            changeHomeNumber.setAttribute('class', 'changeDetails mt-4');
            popUpWindow.appendChild(changeHomeNumber);

            const changeFloor = document.createElement('input');
            changeFloor.placeholder = "קומה";
            changeFloor.type = 'number';
            changeFloor.setAttribute('class', 'changeDetails mt-4');
            popUpWindow.appendChild(changeFloor);

            const changeEnter = document.createElement('input');
            changeEnter.placeholder = "כניסה";
            changeEnter.type = 'number';
            changeEnter.setAttribute('class', 'changeDetails mt-4');
            popUpWindow.appendChild(changeEnter);

            const changeNotes = document.createElement('textarea');
            changeNotes.placeholder = "הערות לשליח";
            changeNotes.setAttribute('class', ' mt-4');
            changeNotes.id = 'changeNotes';
            popUpWindow.appendChild(changeNotes);

            const permitButton = document.createElement('button');
            permitButton.innerHTML = "אישור";
            permitButton.type = 'submit';
            permitButton.id = 'permitButton';
            permitButton.setAttribute('class', 'btn btn-secondary m-1');
            popUpWindow.appendChild(permitButton);

            

            permitButton.onclick = () =>{
                const user ={
                    name: changeNameInput.value,
                    city: changeCity.value,
                    street: changeStreet.value,
                    homeNumber: changeHomeNumber.value,
                    floor: changeFloor.value,
                    enter: changeEnter.value,
                    notes: changeNotes.value,
                }
                localStorage.setItem(phoneNumber, JSON.stringify(user));
                sessionStorage.setItem('delivery', 'true');
                deliveryOrTake();
                hello();
                document.body.removeChild(popUpWindow);
                document.body.removeChild(popUpBlackWindowRight);
            }
        }
    }
    takeButton.onclick = () =>{
        if(changeNameInput.value){
            const details=JSON.parse(localStorage.getItem(phoneNumber));
            if(details!=null){
                details.name=changeNameInput.value;
                localStorage.setItem(phoneNumber, JSON.stringify(details));
            }
            else
                localStorage.setItem(phoneNumber, changeNameInput.value);
        }
        sessionStorage.setItem('delivery', 'false');
        deliveryOrTake();
        hello();
        document.body.removeChild(popUpWindow);
        document.body.removeChild(popUpBlackWindowRight);
    }
}

const hello = () => {
    const visit = document.getElementById('visit');
        const details = JSON.parse(localStorage.getItem(sessionStorage.getItem('phoneNumber')));
        if(details.name){
            visit.innerHTML = "שלום "+ details.name;
    }
}
hello();
