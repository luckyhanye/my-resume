import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Spin from 'antd/lib/spin';
import 'antd/lib/spin/style/index.css';
class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            productDate: []
        }
    }
    componentDidMount() {
        axios.get("https://raw.githubusercontent.com/luckyhanye/my-resume/master/src/blogData/product.json").then(res => this.setState({productDate: res.data}));
    }
    render() {
        return (
            <div className="production">
                <section className="work">
                    {this.state.productDate.length == 0
                        ? <div className="spinPosition">
                                <Spin size="large" tip="Loading..."/>
                            </div>
                        : this.state.productDate.map((item) => (
                            <figure className="product" key={Math.random()}>
                                <h4>{item.title}</h4>
                                <img src={`https://raw.githubusercontent.com/luckyhanye/my-resume/master/images/${item.imgName}.png`} alt={item.imgName}/>
                                <div className="product-title">
                                    <a href={`https://luckyhanye.github.io/${item.demoAddress}`}>演示demo</a>
                                    <a href={`https://github.com/luckyhanye/${item.codeAddress}`}>源码地址</a>
                                </div>
                                <figcaption>{item.desc}</figcaption>
                            </figure>
                        ))
                    }
                </section>
            </div>
        )
    }
}

export default Product;
