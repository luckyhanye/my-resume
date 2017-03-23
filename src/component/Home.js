import React from 'react';
class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <section className="index">
                    <ul>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>基本信息
                                </dt>
                                <dd>
                                    <span>个人信息:</span>高侠 / 女 / 27岁
                                </dd>
                                <dd>
                                    <span>应聘岗位:</span>前端工程师
                                </dd>
                                <dd>
                                    <span>现居住地:</span>河北秦皇岛
                                </dd>
                                <dd>
                                    <span>目前情况:</span>可随时到岗
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>联系方式
                                </dt>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-phone"></i>
                                        联系电话:
                                    </span>
                                    13488658170
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-weixin"></i>
                                        联系微信:
                                    </span>
                                    g13488658170
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-QQ"></i>
                                        联系QQ:
                                    </span>
                                    404133902
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-gmail"></i>
                                        联系邮箱:
                                    </span>
                                    hanye_1001@sina.com
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-github"></i>
                                        github:
                                    </span>
                                    <a href="https://github.com/luckyhanye">https://github.com/luckyhanye</a>
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-markdown"></i>
                                        Markdown笔记:
                                    </span>
                                    <a href="https://luckyhanye.github.io/">https://luckyhanye.github.io/</a>
                                </dd>
                                <dd>
                                    <span>
                                        <i className="iconfont icon-icon"></i>
                                        简历源码:
                                    </span>
                                    <a href="https://github.com/luckyhanye/my-resume">https://github.com/luckyhanye/my-resume</a>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>主要技能
                                </dt>
                                <dd className="skill">
                                    <ul>
                                        <li className="primary">HTML</li>
                                        <li className="primary">CSS</li>
                                        <li className="primary">Javascript</li>
                                        <li className="primary">jQuery</li>
                                        <li className="secondary">git</li>
                                        <li className="secondary">React</li>
                                        <li className="secondary">Ajax</li>
                                        <li className="secondary">JSON</li>
                                        <li className="secondary">ES6</li>
                                        <li className="know">HTTP</li>
                                        <li className="secondary">PS/AI</li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>技能详解
                                </dt>
                                <dd className="detail-skill">
                                    <ul>
                                        <li>
                                            <div className="round"></div>
                                            <h4>HTML / CSS</h4>
                                            <p>能够编写语义化的HTML，熟练运用div+css 浮动布局，flexbox 弹性布局。</p>
                                            <p>webpack自动化工具的运用， 进行模块化开发。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>Javascript</h4>
                                            <p>熟悉原生的Javascript，对原型，原型链，对象，闭包等都有一些了解。能脱离jQuery等库编写一些常见的功能，如轮播图，计算器，购物车等等。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>jQuery</h4>
                                            <p>熟悉jQ的用法，能使用jQuery完成常见功能的开发。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>git</h4>
                                            <p>有自己的github账号，能使用git实现代码的上传、分支合并、克隆、等一些操作。</p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>React /  Ajax / JSON  / ES6</h4>
                                            <p>能使用ES6语法和React库进行模块化的开发，能实现基本的页面布局和常见的功能，轮播，TODOMVC等。掌握了 React-router实现页面的无刷新体验 、axios或者JQ 来实现Ajax请求数据实现页面的局部刷新，Ant-design /Material-ui组件库的运用等。 </p>
                                        </li>
                                        <li>
                                            <div className="round"></div>
                                            <h4>PS/AI</h4>
                                            <p>熟练使用PS、AI等设计软件，进行基本的网页设计</p>
                                        </li>
                                    </ul>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>
                                    <i className="iconfont icon-biaoti"></i>自我评价
                                </dt>
                                <dd>
                                  <p>我是一个积极向上，乐观开朗的人，对计算机非常感兴趣，做事认真，责任心强。喜欢脚踏实地，做一些专注的事情。对学习充满热情，不断进步提升。</p>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </section>
            </div>
        )
    }
}

export default Home;
