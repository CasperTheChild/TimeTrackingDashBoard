// Colors
const root = document.documentElement; // Access to the root

const DesaturatedBlue = getComputedStyle(root).getPropertyValue('--Desaturated-blue').trim();
const DarkBlue = getComputedStyle(root).getPropertyValue('--Dark-Blue').trim();


//  Start

document.addEventListener('DOMContentLoaded', () => {
    // Fetch the data
    fetch('./data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        updateActivityCards(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  });
  
  // Function to update activity cards
  function updateActivityCards(data) {
    // Loop through each activity in the JSON data
    data.forEach((activity) => {
      const { title, timeframes } = activity;
  
      // Format title for class names (e.g., "Self Care" -> "Self-Care")
      const className = title.replace(' ', '-');
  
      // Find the corresponding activity card by its class
      const card = document.querySelector(`.ActivityCard.${className}`);
      if (card) {
        // Update daily stats
        const dailyStat = card.querySelector('.DaylyStat');
        dailyStat.querySelector('.current').textContent = `${timeframes.daily.current}hrs`;
        dailyStat.querySelector('.previous').textContent = `Previous - ${timeframes.daily.previous}hrs`;
  
        // Update weekly stats
        const weeklyStat = card.querySelector('.WeeklyStat');
        weeklyStat.querySelector('.current').textContent = `${timeframes.weekly.current}hrs`;
        weeklyStat.querySelector('.previous').textContent = `Previous - ${timeframes.weekly.previous}hrs`;
  
        // Update monthly stats
        const monthlyStat = card.querySelector('.MonthlyStat');
        monthlyStat.querySelector('.current').textContent = `${timeframes.monthly.current}hrs`;
        monthlyStat.querySelector('.previous').textContent = `Previous - ${timeframes.monthly.previous}hrs`;
      } else {
        console.warn(`No card found for activity: ${title}`);
      }
    });
  }
//  End

// Properties

var DayButton = document.querySelector(".Dayly");
var WeekButton = document.querySelector(".Weekly");
var MonthButton = document.querySelector(".Monthly");

var DayStat = document.querySelectorAll(".DaylyStat");
var WeekStat = document.querySelectorAll(".WeeklyStat");
var MonthStat = document.querySelectorAll(".MonthlyStat");

var DayIsOn = false;
var WeekIsOn = true;
var MonthIsOn = false;

var cards = document.querySelectorAll(".BlackBackground");
    
var settings = document.querySelectorAll(".SetImg");

// Default 

WeekButton.style.color = "white";
DayStat.forEach(stat => stat.style.display = "none");
MonthStat.forEach(stat => stat.style.display = "none");

// Functions6.

function DayClicked() {     // Changes to another time interval stats
    DayButton.style.color = "white";
    WeekButton.style.color = DesaturatedBlue;
    MonthButton.style.color = DesaturatedBlue;

    DayIsOn = true;

    DayStat.forEach(stat => stat.style.display = "inline");
    if (WeekIsOn) {
        WeekStat.forEach(stat => stat.style.display = "none");
        WeekIsOn = false;
    }
    if (MonthIsOn) {
        MonthStat.forEach(stat => stat.style.display = "none");
        MonthIsOn = false;
    }
}

function WeekClicked() {     // Changes to another time interval stats
    DayButton.style.color = DesaturatedBlue;
    WeekButton.style.color = "white";
    MonthButton.style.color = DesaturatedBlue;

    WeekIsOn = true;

    WeekStat.forEach(stat => stat.style.display = "inline");
    if (DayIsOn) {
        DayStat.forEach(stat => stat.style.display = "none");
        DayIsOn = false;
    }
    if (MonthIsOn) {
        MonthStat.forEach(stat => stat.style.display = "none");
        MonthIsOn = false;
    }
}

function MonthClicked() {     // Changes to another time interval stats
    DayButton.style.color = DesaturatedBlue;
    WeekButton.style.color = DesaturatedBlue;
    MonthButton.style.color = "white";

    MonthIsOn = true;

    MonthStat.forEach(stat => stat.style.display = "inline");
    if (DayIsOn) {
        DayStat.forEach(stat => stat.style.display = "none");
        DayIsOn = false;
    }
    if (WeekIsOn) {
        WeekStat.forEach(stat => stat.style.display = "none");
        WeekIsOn = false;
    }
}

DayButton.addEventListener("click", DayClicked);
WeekButton.addEventListener("click", WeekClicked);
MonthButton.addEventListener("click", MonthClicked);

DayButton.addEventListener("mouseover", function() {
    DayButton.style.color = "white";
});

DayButton.addEventListener('mouseout', function() {
  DayButton.style.color = DesaturatedBlue;
});

WeekButton.addEventListener("mouseover", function() {
    WeekButton.style.color = "white";
});

WeekButton.addEventListener('mouseout', function() {
  WeekButton.style.color = DesaturatedBlue;
});

MonthButton.addEventListener("mouseover", function() {
    MonthButton.style.color = "white";
});

MonthButton.addEventListener('mouseout', function() {
  MonthButton.style.color = DesaturatedBlue;
});

cards.forEach(card => {
  card.addEventListener('mouseover', function() {
      card.style.backgroundColor = DesaturatedBlue;
  });

  card.addEventListener('mouseout', function() {
      card.style.backgroundColor = DarkBlue;
  });
});

settings.forEach(setting => {   
  setting.addEventListener('mouseover', function (event) {
    event.stopPropagation();
        if (event.target === setting) { // I don't know how to fix it;( It doesn't work when the mouse on the image
            event.target.style.filter = "brightness(2)";
        }
    });

  setting.addEventListener('mouseout', function (event) {
    event.stopPropagation();
        if (event.target === setting) { 
            event.target.style.filter = "brightness(1)";
        }
    });
});

