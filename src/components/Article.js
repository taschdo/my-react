import React, {Component, PureComponent} from 'react';
import { Container, Row, Col, Alert, Button } from 'bootstrap-4-react';

class Article extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: props.defaultOpen,
            count: 0
        }
    }

    //shouldComponentUpdate(nextProps, nextState) {
    //    return this.state.isOpen !== nextState.isOpen
    //}

    componentWillMount() {
        console.log('---', 'mounting');
    }

    componentWillReceiveProps(nextProps) {
        console.log('---', 'will receive props');
        if(nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
            isOpen: nextProps.defaultOpen
        });
    }

    componentWillUpdate() {
        console.log('---', 'will update');
    }

    render() {
        const {article} = this.props;
        const body = this.state.isOpen && <section align="justify">{article.text}</section>;
        const button = this.state.isOpen ? 'close' : 'open';
        return (
            <Container>
                <Row>
                    <Col>
                        <h2 onClick={this.incrementCounter}>
                            {article.title}
                            clicked {this.state.count}
                            <Button className="float-right" primary sm onClick={this.handleClick}>{button}</Button>
                        </h2>
                    </Col>
                </Row>
                <Row style={{marginBottom: '20px'}}>
                    <Col>{body}</Col>
                </Row>
                <Row>
                    <Col>
                        <Alert primary>Дата время месяц год: {(new Date(article.date)).toDateString()}</Alert>
                        <Alert primary>Primary Alert</Alert>
                        <Alert secondary>Secondary Alert</Alert>
                        <Alert success>Success Alert</Alert>
                        <Alert danger>Danger Alert</Alert>
                        <Alert warning>Warning Alert</Alert>
                        <Alert info>Info Alert</Alert>
                        <Alert dark>Dark Alert</Alert>
                    </Col>
                </Row>
            </Container>
        )
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count+1
        });
    };

    handleClick = () => {
        console.log('----', 'clicked');
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

}

export default Article