document.getElementById("timeForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var year = parseInt(document.getElementById("year").value);
    var month = parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);

    var birthDate = new Date(year, month - 1, day);
    var currentDate = new Date();
    var timeDifference = currentDate.getTime() - birthDate.getTime();

    var seconds = Math.floor(timeDifference / 1000);
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    document.getElementById("result").innerHTML = "You have been on Earth for: <br>" +
        "Hours: " + hours + "<br>" +
        "Minutes: " + minutes + "<br>" +
        "Seconds: " + seconds;
});
