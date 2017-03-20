import React, { Component } from 'react'

import './SportCard.css'

class SportCard extends Component {

    render() {

        const { title, text, picture } = this.props

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image sport-img-container">
                    <img alt="" className="sport-img" src={ picture } />
                    <span className="card-title">
                        { title }
                    </span>
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="sport-data">
                            <p>
                                <i className="material-icons">info</i>
                                <span>{ text }</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default SportCard