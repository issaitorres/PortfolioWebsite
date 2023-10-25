import spa_1 from "../Assets/port_spa_1.png";
import spa_2 from "../Assets/port_spa_2.png";
import spa_3 from "../Assets/port_spa_3.png";
import moviegoer_1 from "../Assets/moviegoer_1.png";
import moviegoer_2 from "../Assets/moviegoer_2.png";
import moviegoer_3 from "../Assets/moviegoer_3.png";
import neets_1 from "../Assets/neets_1.png";
import neets_2 from "../Assets/neets_2.png";
import neets_3 from "../Assets/neets_3.png";
import playlistinfo_1 from "../Assets/playlistinfo_1.png";
import playlistinfo_2 from "../Assets/playlistinfo_2.png";
import pledge_1 from "../Assets/pledge_1.png";
import pledge_2 from "../Assets/pledge_2.png";
import pledge_3 from "../Assets/pledge_3.png";

// we want to add an iframe to the carousel instead of having a link to the demo
export const projectData = [
    {
        title: "Spotify Playlist Analyzer Website",
        content: {
            "video": "https://www.youtube.com/embed/uLeDY14m6lQ?si=rPioRu42tSxogRiS",
            "images": [spa_1, spa_2, spa_3]
        },
        desc: "MERN full-stack web application that uses the Spotify API to display information on any public playlist. Features user authentication, CRUD functionality, React, and hosted on Render.",
        tags: ["React", "MongoDB", "Render", "Axios", "Javascript", "", ""],
        info: {
            website: "https://spotifyplaylistanalyzer.onrender.com/",
            github: "https://github.com/issaitorres/PlaylistProject"
        },
    },
    {
        title: "Moviegoers Website",
        content: {
            "video": "https://www.youtube.com/embed/HWit3Dp_DU4",
            "images": [moviegoer_1, moviegoer_2, moviegoer_3]
        },
        desc: "Front-End web application that accesses The Movie Database API and displays popular movies implemented using React and Axios.",
        tags: ["React", "Axios", "Javascript", "HTML", "CSS"],
        info: {
            website: "https://moviegoers-tmdb.netlify.app/",
            github: "https://github.com/issaitorres/Portfolio/tree/master/Moviegoers-website"
        },
    },
    {
        title: "Pledge Website",
        content: {
            "video": "https://www.youtube.com/embed/DSQnUkFTqWY?si=wNFzQxR0nI9xAIQV",
            "images": [pledge_1, pledge_2, pledge_3]
        },
        desc: "Full-stack web application that highlights CRUD functionality implemented using React and MySQL. *Hosted on Heroku so might take a couple extra seconds to load.",
        tags: ["React", "MySQL", "Javascript", "HTML", "CSS"],
        info: {
            website: "https://thepledgeorganization.netlify.app/",
            github: "https://github.com/issaitorres/Portfolio/tree/master/pledge_website_CRUD"
        },
    },
    {
        title: "Neets (Responsive Website)",
        content: {
            "video": null,
            "images": [neets_1, neets_2, neets_3]
        },
        desc: "Front-End web application that displays a made up company website that highlights CSS and React components",
        tags: ["React", "Javascript", "HTML", "CSS"],
        info: {
            website: "https://neets.netlify.app/",
            // demo: "https://youtu.be/HWit3Dp_DU4", - missing demo - this link is to movigoers - look at hard drive!
            github: "https://github.com/issaitorres/Portfolio/tree/master/Moviegoers-website"
        },
    },
    {
        title: "Playlist Info Website",
        content: {
            "video": "https://www.youtube.com/embed/61rJDjxWDd0?si=PQDd8JmNyRBCNpSj",
            "images": [playlistinfo_1, playlistinfo_2]
        },
        neets_3,
        desc: "Full-Stack web application created with Django that displays information about Youtube playlists integrated with the Youtube Data API. *Hosted on Heroku so might take a couple extra seconds to load.",
        tags: ["Python", "Django", "HTML", "CSS"],
        info: {
            github: "https://github.com/issaitorres/Portfolio/tree/master/playlist_website"
        },
    },
];
