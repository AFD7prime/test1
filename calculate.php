<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $year = $_POST["year"];
    $month = $_POST["month"];
    $day = $_POST["day"];

    $birth_date = new DateTime("$year-$month-$day");
    $current_date = new DateTime();
    $time_difference = $current_date->diff($birth_date);

    $hours = $time_difference->days * 24;
    $minutes = $hours * 60;
    $seconds = $minutes * 60;

    echo "You have been on Earth for: <br>";
    echo "Hours: $hours <br>";
    echo "Minutes: $minutes <br>";
    echo "Seconds: $seconds";
}
?>
