"use strict";

let courses = [
    {
        CourseId: "PROG100",
        Title: "Introduction to HTML/CSS/Git",
        Location: "Classroom 7",
        StartDate: "09/08/22",
        Fee: "100.00",
    },
    {
        CourseId: "PROG200",
        Title: "Introduction to JavaScript",
        Location: "Classroom 9",
        StartDate: "11/22/22",
        Fee: "350.00",
    },
    {
        CourseId: "PROG300",
        Title: "Introduction to Java",
        Location: "Classroom 1",
        StartDate: "01/09/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROG400",
        Title: "Introduction to SQL and Databases",
        Location: "Classroom 7",
        StartDate: "03/16/23",
        Fee: "50.00",
    },
    {
        CourseId: "PROJ500",
        Title: "Introduction to Angular",
        Location: "Classroom 1",
        StartDate: "04/25/23",
        Fee: "50.00",
    }
];


function getcourseStartDate(courseId) {
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].CourseId === courseId) {
            return courses[i].StartDate
        }
    }
    // if none
    return "That course does not exist"
}

function getcourseTitle(courseId) {
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].CourseId === courseId) {
            return courses[i].Title;
        }
    }
    // if none
    return "no course found"
}

function getCourseUnderFiftyDollars() {
    let title = []
    for (let i = 0; i < courses.length; i++) {
        if (parseFloat(courses[i].Fee <= 50)) {
            title.push(courses[i].Title)
        }
    }
    return title
}

function getCourseInClassroom(classroom) {
    let title = []
    for (let i = 0; i < courses.length; i++) {
        if (courses[i].Location === classroom) {
            title.push(courses[i].Title)
        }
    }
    return title;

}

// When does the PROG200 course start ?
console.log("When does the PROG200? " + getcourseStartDate("PROG200"));
// What is the title of the PROJ500 course?
console.log("\nWhat is the title of the PROJ500 course? " + getcourseTitle("PROJ500"));
// What are the titles of the courses that cost $50 or less?
console.log("\nwhat are the titles of the courses that cost $50? " + getCourseUnderFiftyDollars());
// What classes meet in "Classroom 1"?
console.log("\nWhat classses meet in classroom 1? " + getCourseInClassroom("Classroom 1"));