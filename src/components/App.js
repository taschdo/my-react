import React, {Component} from 'react'
import ArticleList from './ArticleList/index'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    state = {
        reverted: false
    };
    articles = articles.slice();
    render() {
        return (
            <div>
                <h1 align="center" className="jumbotron">
                    Quick start
                    <button className="btn btn-danger ml-3" onClick = {this.revert}>Revert</button>
                </h1>
                <ArticleList articles={this.articles}/>
            </div>
        )
    }

    revert = () => {
        this.articles.reverse();
        this.setState({
           reverted: !this.state.reverted
    })
    }
}

export default App