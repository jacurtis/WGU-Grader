/* in-content.js
*
* This searches the coaching report to find the score a student received, and then injects HTML
* to display the grade to the student.
* */

// var totalTime = 0.0
var checkLoaded = setInterval(function() {
    // totalTime += 0.25
    var assessmentBars = document.getElementsByClassName("assessment__progress-bar__progress")
    if (assessmentBars.length) {
       clearInterval(checkLoaded);
       getWidthAndDisplay(assessmentBars)
    }
    // console.log("Checked: Total - "+totalTime+"seconds")
 }, 250); // check every 250ms (aka quarter-second)

 // Function to get width
 function getWidthAndDisplay(assessmentBars) {
    var elem = assessmentBars[0]
    var grade = elem.style.width
    
    let parsedGrade = parseFloat(grade)
    if (parsedGrade >= 67 && parsedGrade <= 84) {
        elem.style.zIndex = 201
    }
    elem.innerHTML += `<div style="
                                text-align: right; 
                                margin-right: 10px; 
                                font-size:2rem; 
                                color:white; 
                                font-weight: bold;"
                        >${grade}</div>`
 }
