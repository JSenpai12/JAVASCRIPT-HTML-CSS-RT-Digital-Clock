function UpdateClock() {
    let now = new Date();

    let TimeZone = "Asia/Manila";

    let date_options = {
        timeZone: TimeZone,
        weekday: "long"
    }

    let day = now.toLocaleDateString("en-US", date_options);

    let hourTime = now.toLocaleTimeString("en-us", {TimeZone, hour: "2-digit", hour12: true});
    let min = now.toLocaleDateString("en-us", {TimeZone, minute: "2-digit"});
    let sec = now.toLocaleTimeString("en-US", {TimeZone, second: "2-digit"});

    let [time, ampm] = hourTime.split(" ");
    let [date, minutes] = min.split(" ");


    let displayDay = document.querySelector('.day');
    let displayHour = document.querySelector('.hours');
    let displayMins = document.querySelector('.mins');
    let displaySecs = document.querySelector('.secs');
    let displayAmPm = document.querySelector('.am-pm');
    displayDay.innerText = `${day}`;
    displayHour.innerText = `${time}`;
    displayMins.innerText = `${minutes}`;
    displaySecs.innerText = `${sec}`;
    displayAmPm.innerText = `${ampm}`;
    
    
   console.log(sec);
    

};

setInterval(UpdateClock, 1000)

