// import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import React, { Component } from 'react';
import Nav from './Components/Nav';
import HomePage from './Components/HomePage';
import KungFu from './Components/KungFu';
import PersonalTraining from './Components/PersonalTraining';
import Yoga from './Components/Yoga';
import Tarot from './Components/Tarot';
import MultiMediaArt from './Components/MultiMediaArt';
import ShowPosters from './Components/ShowPosters'
import Sketches from './Components/Sketches'

export class App extends Component {

  state = {
    images: ['https://media1.tenor.com/images/91e8516f89ea377be8f771c1d30fe574/tenor.gif?itemid=5735946','https://pmcvariety.files.wordpress.com/2018/12/toxic-avenger.jpg?w=681&h=383&crop=1','https://media2.giphy.com/media/6NAG3O1VDyUj6/giphy.gif','https://www.reactiongifs.us/wp-content/uploads/2014/03/you_talkin_to_me_robert_deniro.gif','https://media0.giphy.com/media/5eAnvHyewLV1m/giphy.gif','https://outline-prod.imgix.net/20190404-I43Z80hxDXOizldkH1s2?auto=format&q=60&w=2000&s=a5e8412c31d99b0610c69527c3a4432c', 'https://outline-prod.imgix.net/20190404-0CUA9tWXlYGHKujPu0EH?auto=format&q=60&w=2000&s=b1572eb32fc1eee0ca6eaa20a51ae8d1','https://outline-prod.imgix.net/20190404-t0UIhb2BBk2yx33TPI89?auto=format&q=60&w=2000&s=51d3b47805607e5902b76ba9b6e420ee','https://i1.wp.com/auralcrave.com/wp-content/uploads/2017/02/Lost-Highway.jpg?resize=810%2C515&ssl=1']
  }
  
  render(){
    const homePageImage = this.state.images[Math.floor(Math.random() * this.state.images.length)]
  
  return (
    <div className='top-wrap'>
      <Nav/>
      <br></br>
      <Switch>
        <Route path='/drawings' render={()=> <Sketches/> } />
        <Route path='/posters' render={()=> <ShowPosters/> } />
        <Route path='/kungfu' render={()=> <KungFu/>} />
        <Route path='/tarot' render={()=> <Tarot/>} />
        <Route path='/personaltraining' render={() => <PersonalTraining/> } />
        <Route path='/yoga' render={()=> <Yoga />}/>
        <Route path='/art' render={() => <MultiMediaArt/> }/>
        <Route path='/' render={()=> <HomePage homePageImage={homePageImage}/> }/>
      </Switch>
    </div>
   )
  }
}

export default App;
