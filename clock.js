console.log("hello world")

let firstName = prompt("Adınızı Giriniz:","")
document.querySelector("#myName").innerHTML = `${firstName.toUpperCase()}`

let sex = prompt("Cinsiyetinizi Giriniz(F/M):","")
sex = sex.toUpperCase()
if (sex == "M") {
    alert(`Hoşgeldin bugün çok yakisiklisin ${firstName}`)
} else if (sex == "F") {
    alert(`Hoşgeldin bugün çok güzelsin ${firstName}`)    
} else {
    alert(`hepimiz fazla güzeliz ${firstName}`)
}


function showTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
        if(d==1) {
            d = "Pazartesi"
        } else if (d==2) {
            d = "Sali"
        } else if (d==3) {
            d = "Carsamba"
        } else if (d==4) {
            d = "Perşembe"
        } else if (d==5) {
            d = "Cuma"
        } else if (d==6) {
            d = "Cumartesi"
        } else if (d==0) {
            d = "Pazar"
        }
    m = checkTime(m);
    s = checkTime(s);
    document.querySelector("#myClock").innerHTML = h + ":" + m + ":" + s +" "+ d;
    setTimeout(showTime, 1000);

}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
