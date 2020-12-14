/* in-content.js
*
* This searches the coaching report to find the score a student received, and then injects HTML
* to display the grade to the student.
* */

/*
 * WGU Uses Angular to render their coaching assessments. Unfortunately angular is slow...
 * This means that Chrome/Firefox/Safari all will trigger this script early when it thinks
 * the page has loaded, but in reality, Angular hasn't initialized or render its DOM yet.
 * 
 * It takes approximately 3-5 seconds to load XHR requests from WGU that provides the 
 * assessment data. So we need to poll every 1/4 second until we have the data. On the
 * surface this is very inelegant, but in testing it seems to be working well. It stops polling
 * after the XHR is recieved, so no long term performance is impacted.
 */

var checkLoaded = setInterval(function() {
    var assessmentBars = document.getElementsByClassName("assessment__progress-bar__progress")
    if (assessmentBars.length) {
       clearInterval(checkLoaded);
       getWidthAndDisplay(assessmentBars)
    }
 }, 250);

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
