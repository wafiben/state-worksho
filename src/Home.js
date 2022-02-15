import React, { Component } from 'react'

export default class Home extends Component {
    componentWillUnmount(){
        console.log('unmount')
    }
    render() {
        return (
            <div>
                <h1>this is home page </h1>
            </div>
        )
    }
}
