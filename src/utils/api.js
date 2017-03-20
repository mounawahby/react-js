import * as request from 'request-promise'

/* FREE JSON API EXAMPLE */

/* NEWS: https://newsapi.org/ */


export const SPORT_API_KEY = 'e92fc1b74ddf4b9b887ec3b71c6dbc0c'

export const ENDPOINTS = {

    SPORT_API_URL: 'https://newsapi.org/v1/articles?source=fox-sports&sortBy=top&',
    PIXABAY_API_URL: 'https://pixabay.com/api/'

}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    })
}