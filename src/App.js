import React, { Component } from 'react';
import './App.css';

import { Header } from './components/Header'
import ProfileBody from './components/ProfileBody'
import Youtube from 'react-youtube'

class App extends Component {
  render() {
    const profileProps = {
      socialStats:hugh.socialStats,
      card:hugh.card,
      profileImg:hugh.profileImg,
      infoParagraphs:hugh.infoParagraphs
    }
    const videoId = "_k_1sW75M2I"
    const youtubeOpts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 0,
        modestbranding:1,
        listType:"user_uploads",
        list:"UCYjktLnPZi4LHSz1QXwc4dA"
      }
    }
    return (
  <div className="app">
    
     <div className="container">
      
      <Header 
          name={ hugh.name } 
          stats={ hugh.carrerStats } 
          headerImage = { hugh.coverImg }
          tags={ hugh.titles }
          />
      <ProfileBody {...profileProps}/>
    </div>
    <Youtube className="youtube" videoId={ videoId } opts={ youtubeOpts }/>
  </div>
    );
  }
}

const hugh = {
  name:"Hugh Jackman",
  titles:["Actor", "Producer", "Writer"],
  coverImg:"https://s17.postimg.org/ypm5ye95r/image.jpg",
  profileImg:"https://s17.postimg.org/xcbukrwdr/Hugh_Jackman_f.jpg",
  socialStats:[
  {
    name:"followers",
    value:"3.5k"
  },
  {
    name:"following",
    value:"1.9k"
  }
  ],
  card:{
    title:"Movies",
    list:[
      "https://s12.postimg.org/c0ryp65lp/m1f.jpg",
      "https://s14.postimg.org/6ts0it3xt/m2f.jpg",
      "https://s13.postimg.org/ri499o2zr/m3f.jpg"
    ]},
  infoParagraphs:[
    "Hugh Michael Jackman is an Australian actor, singer and producer. Jackman has won international recognition for his roles in variety of film genres.",
    "In Broadway theatre, Jackman won a Tony Award for his role in The Boy from Oz. A four-time host of the Tony Awards themselves, he won an Emmy Award for one of these appearances. Jackman also hosted the 81st Academy Awards on 22 February 2009."
  ],
  carrerStats:[
   {
    title:"TV Series", 
    number:56
  },
   {
    title:"Play", 
    number:29
  },
   {
    title:"Musicals", 
    number:11
  },
  ]
}

export default App;
