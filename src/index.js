import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {

    render() {
        console.log("render")
        return(
            <div >
              Hello!
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);