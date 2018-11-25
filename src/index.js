import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component {
    foo(e) {
        console.log(e.target.value)
    }

    render() {
        console.log("render")
        return(
            <div >
                Hello!
                <select onChange={this.foo}>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>

                <select style={{"display": "inline"}} onChange={ (e) => console.log(e.target.value) }>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                </select>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);