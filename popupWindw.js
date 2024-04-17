
var i=1;
var countToPayment=0;

var toPayment = document.createElement('button');
    toPayment.id = 'toPayment';

    var postage = document.createElement('h6');
    var postageCount = document.createElement('h6');
    var emptyCard = document.createElement('h6');
bigShow = (card) => {
    i=1;
    const popupWindow = document.createElement('div');
    popupWindow.classList.add('popup-window');
    const imgAndName = document.createElement('div');
    const inText = document.createElement('div');
    const text = document.createElement('div');
    inText.id = "inText";

    imgAndName.id = "img-name";
    
    const upImg = document.createElement('img');
    upImg.src = card.querySelector('img').src;
    upImg.id = "upImg";
    
    popupWindow.appendChild(imgAndName);
    imgAndName.appendChild(upImg);
    imgAndName.appendChild(text);

    text.id = "text"
    text.style.marginRight = '20px';
    text.appendChild(inText);

    const upName = document.createElement('h4');
    upName.innerText = card.querySelector('h5').innerHTML;
    upName.style.marginTop = '85px';
    upName.style.color = '#f1f2ec';
    upName.style.marginBottom = '15px';
    inText.appendChild(upName);

    const closer = document.createElement('button');
    closer.innerHTML = "x";
    closer.id = "closer";
    closer.classList.add("delete");
    inText.appendChild(closer);

    if(card.querySelector('h6')) {
        const upd6 = document.createElement('h7');
        upd6.innerText = card.querySelector('h6').innerHTML;
        text.appendChild(upd6);
        upd6.style.color = '#f1f2ec';
        upd6.style.fontSize = '15px';
    }

    const upPrice = document.createElement('h4');
    upPrice.innerHTML = card.querySelector('h4').innerHTML;
    upPrice.style.marginTop = '20px';
    upPrice.style.marginBottom = '20px';
    upPrice.style.color = '#f1f2ec';
    text.appendChild(upPrice);

    const more = document.createElement('h5');
    more.innerHTML = "כמות לבחירה";
    more.style.color = '#f1f2ec';
    more.style.marginBottom = '10px';
    text.appendChild(more);

    const count = document.createElement('div');
    count.id = "count";
    text.appendChild(count);

    const plus = document.createElement('button');
    plus.innerHTML = "+";
    plus.id = "plus";
    count.appendChild(plus);

    const number = document.createElement('h5');
    number.innerHTML = i;
    number.style.marginLeft = '10px';
    number.style.marginRight = '10px';
    number.style.color = '#f1f2ec';
    count.appendChild(number);

    const minus = document.createElement('button');
    minus.innerHTML = "-";
    minus.id = "plus";
    count.appendChild(minus);

    plus.onclick = () =>{
        i++;
        number.innerHTML = i;
    }
    minus.onclick = () =>{
        if(i>1){
            i--;
            number.innerHTML = i;
        }
    }

    const remarks = document.createElement('h5');
    remarks.innerHTML = "הערות מיוחדות?";
    remarks.style.textAlign = 'start';
    remarks.style.marginRight = '30px';
    remarks.style.marginTop = '30px';
    remarks.style.fontWeight = 'bold';
    popupWindow.appendChild(remarks);

    const kitchenRemarks = document.createElement('textarea');
    kitchenRemarks.placeholder = "רשום הערות למטבח";
    kitchenRemarks.rows = 1;
    kitchenRemarks.id = "remarks";
    popupWindow.appendChild(kitchenRemarks);


    const costName = document.createElement('input');
    costName.placeholder = "רשום שם למנה";
    costName.id = "remarks";
    popupWindow.appendChild(costName);

    const add = document.createElement('button');
    add.innerHTML = "הוסף לעגלה >>";
    add.id = "add";
    popupWindow.appendChild(add);

    document.body.appendChild(popupWindow);
    popupWindow.style.display = 'block';
    popBlackWindow = document.createElement('div');
    popBlackWindow.id = "blackWindow";
    popBlackWindow.classList.add('popBlackWindow');
    document.body.appendChild(popBlackWindow);
    popBlackWindow.style.display = 'block';

    add.onclick = () => {
        sessionStorage.setItem('remarks', kitchenRemarks.value);
        sessionStorage.setItem('privateName', costName.value);
        sessionStorage.setItem('count', i.value);
        addToCard(card);
        document.body.removeChild(popBlackWindow);
        document.body.removeChild(popupWindow);
    }

    closer.onclick = () =>{
        document.body.removeChild(popBlackWindow);
        document.body.removeChild(popupWindow);
    }
}

popup = () => {
    const proCards = document.querySelectorAll('.oneCategory');
    proCards.forEach(card => {
     card.onclick = () => {
     bigShow(card);
     };
    });
    }

    const fullCard = document.getElementById('emptyOrFullCard');
    
    emptyCard.innerHTML = 'העגלה שלך ריקה';
    emptyCard.setAttribute('class', 'p-5 border-top text-center mt-3');
    fullCard.appendChild(emptyCard);
    let ifEmptyCardExists = 0;
    let numOfProductsInCard = 0;
    

const addToCard = (card) => {
    numOfProductsInCard++;

    //אם זה משלוח אז להוסיף תגית של דמי משלוח
    if(sessionStorage.getItem('delivery') === 'true' && numOfProductsInCard === 1){
        
        postage.innerHTML = 'דמי משלוח';
        postage.setAttribute('class', 'text-right gold pt-2 pb-3');

        
        postageCount.innerHTML = '15₪';
        fullCard.appendChild(postage);
        fullCard.appendChild(postageCount);
        postageCount.setAttribute('class', 'border-bottom text-right pb-2');
    }

    //אם מוחקים את כול המוצרים בעגלה אז למחוק את הדמי משלוח והכפתור של לתשלום
    const deletePostage = () => {
        if(sessionStorage.getItem('delivery') === 'true') {
            fullCard.removeChild(postage);
            fullCard.removeChild(postageCount);
        }
        fullCard.removeChild(toPayment);
   }
         
    const allTheDose = document.createElement('div');
    allTheDose.setAttribute('class', 'd-flex flex-wrap justify-content-between border-bottom pt-3 pb-3'); 
    fullCard.prepend(allTheDose);

    const cardNameAndImg = document.createElement('div');
    cardNameAndImg.id = "cardNameAndImg";
    cardNameAndImg.setAttribute('class', 'd-flex flex-wrap mt-3');
    allTheDose.appendChild(cardNameAndImg);

    const cardImg = document.createElement('img');
    cardImg.src = card.querySelector('img').src;
    cardImg.setAttribute('class', 'border-radius-all ml-3')
    cardImg.style.height = '50px'
    cardImg.style.width = '50px';
    cardNameAndImg.appendChild(cardImg);

    const cardNameAndPrice = document.createElement('div');
    cardNameAndPrice.style.width = '100px';
    cardNameAndPrice.setAttribute('class', 'text-right');
    cardNameAndImg.appendChild(cardNameAndPrice);

    cardNameAndButtonsFlex = document.createElement('div');

    const cardName = document.createElement('h6');
    cardName.innerText = card.querySelector('h5').innerText;
    cardName.setAttribute('class', 'Bold text gold');
    cardName.style.marginTop = '0 !important';
    cardNameAndPrice.appendChild(cardName);

    const cardPrice1 = document.createElement('div');
    cardPrice1.setAttribute('class', 'd-flex');
    cardNameAndPrice.appendChild(cardPrice1);

    let cardPrice = document.createElement('h6');
    cardPrice.innerHTML = parseInt(card.querySelector('h4').innerHTML)*i + '₪';
    cardPrice1.appendChild(cardPrice);

    if(sessionStorage.getItem('privateName')){
        const cardPrivateName = document.createElement('h6');
        cardPrivateName.innerHTML = '| '+ sessionStorage.getItem('privateName');
        cardPrice1.appendChild(cardPrivateName);
    }

    const remark = document.createElement('h6');
    remark.innerHTML = "הערות:";
    remark.setAttribute('class', 'gold text');
    if(sessionStorage.getItem('remarks'))
        cardNameAndPrice.appendChild(remark);

    const cardRemark = document.createElement('h7');
    cardRemark.innerHTML = sessionStorage.getItem('remarks')
    cardNameAndPrice.appendChild(cardRemark);

    const doseDetails = document.createElement('div');
    doseDetails.setAttribute('class', 'd-flex flex-wrap mt-3');
    doseDetails.id = 'doseDetails';
    allTheDose.appendChild(doseDetails);

    const changeDoseDetailButton = document.createElement('button');
    changeDoseDetailButton.id = 'penIconButton';
    changeDoseDetailButton.style.height = '30px';
    changeDoseDetailButton.style.padding = '7px';
    changeDoseDetailButton.setAttribute('class', 'border-0');
    doseDetails.appendChild(changeDoseDetailButton);

    const changeDoseDetailIcon = document.createElement('i');
    changeDoseDetailIcon.setAttribute('class', 'fas fa-pen');
    changeDoseDetailIcon.id = 'penIcon';
    changeDoseDetailButton.appendChild(changeDoseDetailIcon);

    changeDoseDetailButton.onclick = () => {
        bigShow(card);
        fullCard.removeChild(allTheDose);
    }

    const minusButton = document.createElement('button');
    if(i === 1){
        minusButton.innerHTML = "x";
    }
    else{
        minusButton.innerHTML = "-";
    }
    minusButton.id = "plus";
    minusButton.style.backgroundColor = 'rgba(223, 108, 108)'
    doseDetails.appendChild(minusButton);

    minusButton.onclick = () =>{
        i = cardNumber.innerHTML;
        console.log("i", i);
        if(i == 1){
            fullCard.removeChild(allTheDose);
            
            numOfProductsInCard--;
            console.log("numOfProductsInCard", numOfProductsInCard)
            if(numOfProductsInCard === 0){
                console.log("No products");
                deletePostage();
                    emptyCard.innerHTML = 'העגלה שלך ריקה';
                    emptyCard.setAttribute('class', 'p-5 border-top text-center mt-3');
                    fullCard.appendChild(emptyCard);
            }
            else{
                countToPayment -= parseInt(card.querySelector('h4').innerHTML);
                toPayment.innerHTML = "לתשלום: "+'₪'+ countToPayment;
                sessionStorage.setItem('forPay', countToPayment);
            }
        }
        else{
            i--;
            if(i === 1){
                minusButton.innerHTML = 'x';
            }
            cardNumber.innerHTML = i;
            cardPrice.innerHTML = parseInt(card.querySelector('h4').innerHTML)*i+ '₪';
            countToPayment -= parseInt(card.querySelector('h4').innerHTML);
            toPayment.innerHTML = "לתשלום: "+'₪'+ countToPayment;
            sessionStorage.setItem('forPay', countToPayment);
        }
    }

    
    const cardNumber = document.createElement('h5');
    cardNumber.innerHTML = i;
    cardNumber.style.paddingLeft = '9px';
    cardNumber.style.paddingTop = '1.5px';
    cardNumber.style.backgroundColor = '#f1f2ec';
    cardNumber.style.color = 'black';
    cardNumber.id = "plus";
    
    doseDetails.appendChild(cardNumber);

    const plusButton = document.createElement('button');
    plusButton.innerHTML = "+";
    plusButton.id = "plus";
    plusButton.style.backgroundColor = 'rgb(153,226,167)';
    doseDetails.appendChild(plusButton);

    plusButton.onclick = () => {
        i = cardNumber.innerHTML;
        i++;
        cardNumber.innerHTML = i;
        cardPrice.innerHTML = parseInt(card.querySelector('h4').innerHTML)*i+ '₪';
        countToPayment += parseInt(card.querySelector('h4').innerHTML);
        toPayment.innerHTML = "לתשלום: "+'₪'+ countToPayment;
        minusButton.innerHTML = '-';
        sessionStorage.setItem('forPay', countToPayment);
    }
   
    //כפתור לתשלום
    
    if(numOfProductsInCard === 1){
        countToPayment = 0;
        fullCard.removeChild(emptyCard);
        fullCard.appendChild(toPayment);
        if(sessionStorage.getItem('delivery') === 'true')
            countToPayment += 15;
        countToPayment += parseInt(card.querySelector('h4').innerHTML)*i;
        toPayment.innerHTML = "לתשלום: "+'₪'+ countToPayment;
        sessionStorage.setItem('forPay', countToPayment);
    }
    else{
        console.log(countToPayment)
        countToPayment += parseInt(card.querySelector('h4').innerHTML)*i;
        toPayment.innerHTML = "לתשלום: "+'₪'+ countToPayment;
        sessionStorage.setItem('forPay', countToPayment);
    }

    toPayment.onclick = () => {
        window.location.href = "./payment.html"
    }
}


const takeOrDelivery = document.getElementById('takeOrDelivery');
    const address = document.getElementById('address');
    const timeToMake = document.getElementById('timeToMake');
    
    const deliveryOrTake = () => {
        const toTakeOrToDelivery = sessionStorage.getItem('delivery');
        const details = JSON.parse(localStorage.getItem(sessionStorage.getItem('phoneNumber')));
        if(toTakeOrToDelivery === 'true'){
            takeOrDelivery.innerHTML = "כתובת למשלוח";
            address.innerHTML = details.street+ ", " + details.homeNumber +", "+ details.city ;
            timeToMake.innerHTML = "זמן משוער למשלוח: 75 דקות";
            if(numOfProductsInCard != 0){
        
                postage.innerHTML = 'דמי משלוח';
                postage.setAttribute('class', 'text-right gold pt-2 pb-3');
        
                
                postageCount.innerHTML = '15₪';
                fullCard.appendChild(postage);
                fullCard.appendChild(postageCount);
                postageCount.setAttribute('class', 'border-bottom text-right pb-2');
                countToPayment +=15;
                toPayment.innerHTML = "לתשלום: "+'₪'+ countToPayment;
                sessionStorage.setItem('forPay', countToPayment);
            }
    }
    else{
        takeOrDelivery.innerHTML = "כתובת לאיסוף עצמי";
        address.innerHTML = "נתיבות המשפט 77 מודיעין עילית";
        timeToMake.innerHTML = "זמן משוער להכנה 25 דקות";
        if(numOfProductsInCard != 0){
            fullCard.removeChild(postage);
            fullCard.removeChild(postageCount);
            countToPayment +=15;
            toPayment.innerHTML = "לתשלום: "+'₪'+ countToPayment;
            sessionStorage.setItem('forPay', countToPayment);
        }
    }
}

deliveryOrTake();
