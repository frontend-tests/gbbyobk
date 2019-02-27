import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <h1 className='Header'>{this.props.label}</h1>
        );
    };
}

export default Header;
