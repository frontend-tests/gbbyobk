// Imports
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom'
// Classes
class TBXechoInput extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(evt){
        let messageValue = document.getElementById('TBXechoMessage').value;
        axios.get(`https://echo-serv.tbxnet.com/v1/echo?text=${messageValue}`)
            .then(resp => {
                ReactDOM.render("((( echo ))): "+resp.data.text+"!", document.getElementById('TBXechoApiData'));
                console.log(resp.data.text);
            })
            .catch(error => {
                ReactDOM.render("An Error Occurred during Echo", document.getElementById('TBXechoApiData'));
                console.log("An Error Occurred during Echo");
                alert("An Error Occurred during Echo");
            });
    }
    render(){
        return (
            <div className='TBXechoInput'>
                <input type="text" defaultValue="" id="TBXechoMessage"/>
                <button id="TBXechoButton" onClick={this.handleClick}>Make noise!</button>
                <h3 id="TBXechoApiData"></h3>
            </div>
        );
    };
}
// Exports
export default TBXechoInput;
