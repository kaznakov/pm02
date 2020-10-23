import React from "react";
import {render} from "react-dom";
import {injectGlobal} from "styled-components";
import axios from "axios";
import Button from '@material-ui/core/Button';
import Form from './Components/Form';
import Product from "./Product";
import {Provider} from "react-redux";
import store from "./Components/store";
import Header from "./Components/Header";
import MainFrame from "./MainFrame";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');
  * {
    font-family: Roboto, Helvetica, system-ui, Tahoma;
    outline: none;
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

class App extends React.Component {
    render() {
        return (
            <div>
                <MainFrame FrameBody={FrameBody}/>
            </div>
        );
    }
}

class FrameBody extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [], add: false
        };
    }

    sendData(values) {
        // Send a PUT request
        axios({
            method: 'put',
            url: 'http://localhost:3002/ticket',
            data: {
                ...values
            }
        });
        window.location.reload(); //обновление страницы после отправки данных
    }

    componentWillMount() {
        // Send a GET request
        axios
            .get("http://localhost:3002/ticket")
            .then(({data}) => {
                this.setState({
                    products: data
                });
            });
    }

    render() {
        return (
            <div>
                <div className="products">
                    {this.state.products && this.state.products.map((product, i) => (
                        <Product
                            key={i}
                            {...product}
                            accessLevel={this.props.accessLevel}
                        />
                    ))}
                </div>
                {this.props.accessLevel ? <Button variant="contained" color="primary"
                                                  onClick={() => this.setState({add: true})}>+</Button> : null}
                {this.state.add && <Form
                    onSubmit={values => this.sendData(values) /* функция которая позволяет забрать все данные из формы в объект values, использовать метод PUT*/}/>}
            </div>
        )
    }
}

render(<Provider store={store}><App/></Provider>, document.getElementById("root"));