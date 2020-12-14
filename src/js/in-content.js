/* in-content.js
*
* This file has an example on how to communicate with other parts of the extension through a long lived connection (port) and also through short lived connections (chrome.runtime.sendMessage).
*
* Note that in this scenario the port is open from the popup, but other extensions may open it from the background page or not even have either background.js or popup.js.
* */

var totalTime = 0.0
var checkLoaded = setInterval(function() {
    totalTime += 0.25
    var assessmentBars = document.getElementsByClassName("assessment__progress-bar__progress")
    if (assessmentBars.length) {
       clearInterval(checkLoaded);
       getWidthAndDisplay(assessmentBars)
    }
    console.log("Checked: Total - "+totalTime+"seconds")
 }, 250); // check every 250ms (aka quarter-second)

 // Function to get width
 function getWidthAndDisplay(assessmentBars) {
    var elem = assessmentBars[0]
    var grade = elem.style.width
    let parsedGrade = parseFloat(grade)
    if (parsedGrade >= 67 && parsedGrade <= 84) {
        elem.style.zIndex = 201
    }
    elem.innerHTML += `<div style="text-align: right; margin-right: 10px; font-size:2rem; color:white; font-weight: bold;">${grade}</div>`
 }
