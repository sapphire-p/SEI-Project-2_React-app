import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Homepage from './components/Homepage'
import Recommendations from './components/Recommendations'
import PodcastShow from './components/PodcastShow'
import GenreRecommendations from './components/GenreRecommendations'
import RandomPodcast from './components/RandomPodcast'




const App = () => {



  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/recommendations' component={Recommendations} />
        <Route exact path='/podcastshow/:id' component={PodcastShow} />
        <Route exact path='/genrerecommendations' component={GenreRecommendations} />
        <Route exact path='/randompodcast' component={RandomPodcast} />
      </Switch>
    </BrowserRouter>
  )
}

export default App


/* To access and use the Listen Notes API key, use: */
// process.env.REACT_APP_ListenNotesKey
// Use the above instead of the key itself