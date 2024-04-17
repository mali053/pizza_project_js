
const openingHour = 10;
const closingHoer = 23;

closeOrOpen = () => {
    var currentTime = new Date;
    if(currentTime.getHours() >= closingHoer || currentTime.getHours() < openingHour){
        imageOpen.innerHTML = '<img src="./תמונות/close.png"/>';
        weOpen.innerHTML = "אנחנו סגורים!";
        weOpen.style.fontWeight = 'bold';
        weOpen.style.fontSize = '12px';
        willBeClose.innerHTML = "המסעדה תפתח בעוד:";
        willBeClose.style.fontSize = '12px';
        timer.style.backgroundColor = 'rgba(223, 108, 108)'
        var nextOpeningHour = currentTime.getHours() < openingHour ? openingHour : openingHour + 24;
        hour.innerHTML = nextOpeningHour - currentTime.getHours()-1;
        minute.innerHTML = 59-currentTime.getMinutes();
        second.innerHTML = 59-currentTime.getSeconds();
    }
    else{
        imageOpen.innerHTML = '<img src="./תמונות/open.png"/>';
        weOpen.innerHTML = "אנחנו פתוחים!";
        weOpen.style.fontSize = '12px';
        weOpen.style.fontWeight = 'bold';
        willBeClose.style.fontSize = '12px';
        willBeClose.innerHTML = "המסעדה תסגר בעוד:";
        timer.style.backgroundColor = 'rgb(153,226,167)';
        hour.innerHTML = closingHoer-currentTime.getHours()-1;
        minute.innerHTML = 59-currentTime.getMinutes();
        second.innerHTML = 59-currentTime.getSeconds();
    }
}

setInterval(closeOrOpen, 1000);