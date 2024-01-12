let days1 = document.querySelector("#discount1 .days");
let hours1 = document.querySelector("#discount1 .hours");
let minutes1 = document.querySelector("#discount1 .minutes");
let seconds1 = document.querySelector("#discount1 .seconds");

let days2 = document.querySelector("#discount2 .days");
let hours2 = document.querySelector("#discount2 .hours");
let minutes2 = document.querySelector("#discount2 .minutes");
let seconds2 = document.querySelector("#discount2 .seconds");

let countdownDate = new Date("January 16, 2024 00:00:00").getTime()

let countdownInterval = setInterval(function () {

    let currentDate = new Date().getTime()

    let timeRemaining = countdownDate - currentDate

    let d = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    let h = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let m = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    let s = Math.floor((timeRemaining % (1000 * 60)) / 1000)

    days1.innerHTML = d < 10 ? "0" + d : d
    hours1.innerHTML = h < 10 ? "0" + h : h
    minutes1.innerHTML = m < 10 ? "0" + m : m
    seconds1.innerHTML = s < 10 ? "0" + s : s

    days2.innerHTML = d < 10 ? "0" + d : d
    hours2.innerHTML = h < 10 ? "0" + h : h
    minutes2.innerHTML = m < 10 ? "0" + m : m
    seconds2.innerHTML = s < 10 ? "0" + s : s

}, 1000);