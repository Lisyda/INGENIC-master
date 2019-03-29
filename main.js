'use strict';

//NEWS ITEMS - EVENTUALLY, THESE SHOULD GO TO A DATABASE
var news = [
    [{
        id: 'ingenic-third-meeting',
        title: '3rd Workshop on Gender Equality in CS at Third Level',
        artdate: '5 February 2019',
        datetime: '2019-02-05',
        image: '/images/IngenicMeeting3.jpg',
        alttext: 'Third INGENIC meeting',
        text: '<p>The Irish Network for Gender Equality in Computing (INGENIC) held its 3rd meeting in DCU on Friday 11th' +
            '            January. The meeting was chaired by Dr. Monica Ward from the School of Computing, DCU. The group is composed' +
            '            of interested academic members of national third level organisations. Their main aims are to:</p>' +
            '        <ul>' +
            '            <li>Help increase the enrolment of females on third level computing programmes.</li>' +
            '            <li>Improve on the experience of female students within computing programmes.</li>' +
            '            <li>Identify and develop supports for staff development in line with national and international' +
            '                recommendations for improving gender diversity and equality.' +
            '            </li>' +
            '            <li>Support collaborative approaches to address their aims.</li>' +
            '        </ul>' +
            '        <p>Three guest speakers gave extremely interesting talks. Sandra Healy, DCU\'s Head of Diversity and Inclusion,' +
            '            gave an insightful presentation on the Athena Swan process. Jennifer Ryan (IDA) informed the group about the' +
            '            IDA\'s work on gathering information on females in STEM initiatives across different sectors: primary school,' +
            '            secondary school, third level, working and returners. Joe English (Professional Development Service for' +
            '            Teachers - PDST) gave an overview of the roll-out of the new Leaving Cert Computer Science curriculum and' +
            '            the Continuous Professional Development (CPD) they have delivered to teachers. Overall, the meeting was very' +
            '            productive and members will continue to work on collaborative initiatives focusing on increasing gender' +
            '            equality in computing and relevant projects in the female in computing domain.</p>' +
            '        <p>The Irish Network for Gender Equality in Computing (INGENIC) was founded by Dr Susan McKeever (TU Dublin) and' +
            '            Dr Catherine Mooney (UCD) in 2017 in response to what they saw as a need to coordinate efforts to address' +
            '            Gender Equality in Computing across all third level institutions in the Republic of Ireland. Previous' +
            '            workshops have been held in DIT in June 2018 and the School of Computer Science in UCD in September' +
            '            2018.</p>',
    },
    {
        id: 'sample-news',
        title: 'Sample News',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/news1.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    },
    {
        id: 'sample-news',
        title: 'Sample News',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/image3.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    },
    {
        id: 'sample-news',
        title: 'Sample News',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/news3.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    }],
    [{
        id: 'sample-news',
        title: 'Sample News',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/news4.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    },
    {
        id: 'sample-news',
        title: 'Sample News',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/image1.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    },
    {
        id: 'sample-news',
        title: 'Sample News',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/news2.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    },
    {
        id: 'sample-news',
        title: 'Sample News',
        artdate: '25 March 2019',
        datetime: '2019-03-25',
        image: '/images/image2.jpg',
        alttext: 'Sample Alt',
        text: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu purus eu ex lacinia dignissim' +
            '                efficitur ut justo. Phasellus orci nisl, euismod ac porttitor vitae, cursus sit amet ante. Praesent sit amet' +
            '                tempor est. Phasellus nibh quam, aliquet a luctus eleifend, blandit a tortor. Suspendisse eros purus,' +
            '                egestas dignissim justo eget, tincidunt porttitor dolor. Suspendisse lectus erat, mattis vel augue eu,' +
            '                vulputate sodales urna. Fusce ac porta sapien. Sed finibus nunc a mi vehicula mattis. Maecenas tincidunt,' +
            '                velit vitae gravida tempor, nulla arcu elementum lectus, at viverra nunc nisl mattis quam.</p>'
    }]
];

var newslinks = [["ingenic-third-meeting", "sample-news", "sample-news", "sample-news"], ["sample-news", "sample-news", "sample-news", "sample-news"]];

//require
var express = require("express");


var port = process.env.PORT || 8083;

var app = express();

app.set("view engine", "ejs");
app.set("views", "templates");
app.use(express.static("static"));


//HOMEPAGE
app.get('/', function (req, res) {
    res.render('index.ejs');
});

//ABOUT
app.get('/about', function (req, res) {
    res.render('about');
});

//CONTACT
app.get('/contact', function (req, res) {
    res.render('contact');
});

//NEWS
app.get('/news', function (req, res) {
    res.render('news', {"newslinks": newslinks, "item": news});
});

//NEWS ITEMS
app.get('/news/:id', function (req, res) {
    for (var i in news) {
        for (var j in news) {
            if (req.params.id === news[i][j].id) {
                res.render("newsitem.ejs", {"item": news[i][j]});
            }
        }
    }
});

//RESOURCES
app.get('/resources', function (req, res) {
    res.render('resources');
});


//UNIVERSITIES INVOLVED
app.get('/universities', function (req, res) {
    res.render('universities');
});

//CURRENT COURSES
app.get('/courses', function (req, res) {
    res.render('courses');
});


//set the server to listen on a port
app.listen(port);


console.log("server running http://localhost:" + port);

