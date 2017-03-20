
/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'



const Materialize = window.Materialize

const APP_TITLE = 'Latest Sport Headlines'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS, SPORT_API_KEY } from './utils/api'

//components
import SportCard from './components/SportCard'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor(props) {
        super(props)
        this.state = {
            sport: undefined,
            sources: []
        }
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{APP_TITLE}</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>

                <div className="App-content">
                    <div className="center-align">
                        <div><img src="http://www.rockdalepublicschool.nsw.edu.au/wp-content/uploads/2016/06/balls.png" className="sportPic" /></div>
			
                        <form onSubmit={this.fetchSport}>

                            <button type="submit" className="waves-effect waves-light btn">
                                Click Here For Sports Headlines
                            </button>

                        </form>

                    </div>

                    <div className="row" style={{ marginTop: 20 }} >
                        <div className="col s12 m6 offset-m3">
                            {this.displaySport()}
                        </div>
                    </div>
                </div>


            </div>
        )
    }


  
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchSport = async (event) => {

        event.preventDefault()

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            let _sport = await get(ENDPOINTS.SPORT_API_URL, {
                //YOU NEED TO PROVIDE YOUR "APIXU" API KEY HERE, see /utils/api.js file to grab the DOCUMENTATION file
                apiKey: 'e92fc1b74ddf4b9b887ec3b71c6dbc0c',
                source: 'fox-sports'
            })

            this.setState({
                sport: _sport
            })

        }
        catch (error) {
            Materialize.toast(error, 8000, 'error-toast')
            console.log('Failed fetching data: ', error)
        }

    }


    //handle display of the received sport object
    displaySport = () => {
        const sport = this.state.sport



        if (sport) {

            console.log(sport)

            var tab = sport.articles.map(function (element) {


                var image = element.urlToImage;
                var pic = new Image();
                pic = image

                return <SportCard title={element.title} 
				author={element.author} 
				text={element.description}
				picture={pic} 
				 
				publishedAt={element.publishedAt} />
                
            })
            return tab;
        }



        return null
    }

}

export default App

