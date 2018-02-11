var bio = {
    "name": "Sujin Park",
    "role": "Associate Product Manager(PM)\n",
    "contacts": {
        "mobile": "0082-10-8335-9309",
        "email": "sujin3441@gmail.com",
        "github": "sujin3441",
        "location": "Seoul, South Korea"
    },
    "welcomeMessage": "Welcome to my resume! :) \n",
    "skills": ["JavaScript", "SQL", "Python", "jQuery"],
    "biopic": "images/me.jpg",
};

var education = {
    "schools": [{
            "name": "University of Illinois",
            "location": "Urbana Champaign, IL, US",
            "degree": "BS",
            "majors": ["Psychology"],
            "dates": "Aug 2009 - May 2011",
            "url": "http://illinois.edu"
        },
        {
            "name": "Seoul National Univeristy",
            "location": "Seoul, South Korea",
            "degree": "Masters",
            "majors": ["Cognitive Psychology"],
            "dates": "Aug 2011 - Feb, 2014",
            "url": "https://www.snu.ac.kr/"
        }
    ],
    "onlineCourses": [{
        "title": "Intro to Programming Nanodegree",
        "school": "Udacity",
        "dates": "Deb 2015 - Apr 2016",
        "url": "https://www.udacity.com"
    }]
};

var work = {
    "jobs": [{
            "employer": "eBay",
            "title": "Product Manager",
            "location": "Seoul, South Korea",
            "dates": "May 2016 - Present",
            "description": "Responsible for managing affiliate AD(mostly CPP) in Gmarket/Auction and " +
                "troubleshooting everyday issues, improving internal admin system and eBay selling platform(ESM+) related to affiliate AD"
        },
        {
            "employer": "AKA",
            "title": "Editor",
            "location": "Seoul, South Korea",
            "dates": "Dec 2014 - Apr 2016",
            "description": "Led multinational 5-member team to develop 7 sets of A.I. testing engine " +
                "that provides automatic evaluation of TOEFL resulting in 94% similarity with actual TOEFL tests "
        }
    ]
};

var projects = {
    "projects": [{
            "title": "Game: Fill In The Blank",
            "dates": "Feb 2017",
            "description": "It's a game with 3 levels and you have to fill in each blank",
            "images": ["https://github.com/sujin3441/fill_in_the_blanks.git"]
        },
        {
            "title": "Movie Website",
            "dates": "Mar 2017",
            "description": "Shows you trailers of movies",
            "images": ["https://github.com/sujin3441/movie_website.git"]
        }
    ]
};

bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedEverything = formattedName + formattedRole + formattedWelcomeMessage + formattedImage;

    $("#header").append(formattedEverything);

    $(".flex-item:last").append(HTMLcontactGeneric);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    $("#header").append(HTMLskillsStart);

    bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
    });

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#footerContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#footerContacts").append(formattedLocation);

};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedJob = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        var formattedEverything = formattedJob + formattedTitle + formattedLocation + formattedDates + formattedDescription;

        $(".work-entry:last").append(formattedEverything);
    });
};

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        var formattedTitleDatesDescp = formattedTitle + formattedDates + formattedDescription;
        $(".project-entry:last").append(formattedTitleDatesDescp);

        project.images.forEach(function(image) {
            var formattedImages = HTMLprojectGithub.replace("%data%", project.images);
            $(".project-entry:last").append(formattedImages);
        });
    });
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", school.dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedURL = HTMLonlineURL.replace("%data%", school.url);
        var formattedEverything = formattedSchoolName + formattedSchoolDegree + formattedSchoolDates +
            formattedSchoolLocation + formattedURL;
        $(".education-entry:last").append(formattedEverything);

        school.majors.forEach(function(major) {
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", school.majors);

            $(".education-entry:last").append(formattedSchoolMajor);
        });
    });

    education.onlineCourses.forEach(function(course) {
        $(".education-entry:last").append(HTMLonlineClasses);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", course.title);

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedOnlineDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);
        var formattedEverything = formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates + formattedOnlineURL;

        $(".education-entry:last").append(formattedEverything);
    });
};

$("#mapDiv").append(googleMap);

// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

function main() {
  return 'Hello, World!';
}

main();

bio.display();
work.display();
projects.display();
education.display();
