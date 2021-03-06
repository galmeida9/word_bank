import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom';
import InteractiveList from './InteractiveList';
import KanjiDefinitionScreen from './KanjiDefinitionScreen';
import DefinitionScreen from './DefinitionScreen';
import WordBank from './WordBank';
import Practice from './Practice';
import Settings from './Settings';
import FlashCards from './FlashCards';

export class JapaneseScreen extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact render={(props) => (
                        <InteractiveList {...props} itemToSearch={this.props.itemToSearch} loadingAnimation={this.props.loadingAnimation} />
                    )}/>
                    <Route path="/kanjiDefinition/:name" component={KanjiDefinitionScreen}/>
                    <Route path="/Definition/:name" component={DefinitionScreen}/>
                    <Route exact path="/wordBank" component={WordBank}/>
                    <Route exact path="/practice" component={Practice}/>
                    <Route exact path="/flashcards" component={FlashCards}/>
                    <Route exact path="/settings" render={(props) => (
                        <Settings {...props} theme={this.props.theme} />
                    )}/>
                </Switch>
            </div>
        )
    }
}

export default JapaneseScreen
