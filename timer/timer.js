function timer(){
    var time = new Date(); //var = zmienna

    var day = time.getDate(); //getDate = dzień tygodnia
    if (day<10){
        day = "0" + day;
    }
    var month = time.getMonth()+1; //getMonth = miesiąc / +1 dlatego że jest od 0-11
    if (month<10){
        month = "0" + month;
    }
    var year = time.getFullYear(); //getFullYear = rok
    
    var hours = time.getHours(); //getHours = godziny
    if (hours<10){
        hours = "0" + hours;
    }
    var minutes = time.getMinutes(); //getMinutes = minuty
    if (minutes<10){
        minutes = "0" + minutes;
    }
    var seconds = time.getSeconds(); //getSeconds = sekundy
    if (seconds<10){
        seconds = "0" + seconds;
    }
    
    document.getElementById("timer").innerHTML = day+"/"+month+"/"+year+" | "+hours+":"+minutes+":"+seconds; //weż cały dokument i wyszukaj po nazwie klasy
    
    setTimeout("timer()", 1000); //wywołać inną fukncje po upływie zadanego czesu w milisekundach
}