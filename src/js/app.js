import React from 'react';
import Header from './header';
import TBXechoInput from './tbxechoinput';

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="App">
              <div className="container-fluid">
              	<div className="row">
              		<div className="col-md-12">
              			<div className="row">
              				<div className="col-md-4 offset-md-4">
                        <Header label="TBX echo server"/>
              					<p>
              						Send a message to the TBX server and get the echo response:
              					</p>
                        <TBXechoInput defaultValue=""/>
              				</div>
              			</div>
              		</div>
              	</div>
              </div>
            </div>
        );
    };

}

export default App;
