import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import {Card} from 'components/Card/Card.jsx';

class ConsumingLogs extends Component {	
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={2} />
                        <Col md={8} >
                            <Card plain
                                //title="Consuming Logs"
								content={
    <div>
        <h1>Events Should be Actionable</h1>
        <h4>
        The fact that Smart Contracts cannot monitor each-others logging means that a significant amount 
        of actionable data kept on the Blockchain is currently going to waste. With Kr8.io, contracts 
        can consume indexed events from other contracts allowing them to leverage this data for the first time.
        </h4><br/>
        <h3>
        Activity Tracking and Monitoring
        </h3>
        <p>
        It has not historically been possible to create a Smart Contract which tracks the activity of another unconnected
        contract without the use of outside data. But with Kr8.io, a contract can be trustlessly informed of external activity.
        Using Kr8.io you can even write a contract which executes it's business logic based on the activity of an unrelated
        contract.
        </p>
        <h3>
        Reactive Functionality
        </h3>
        <p>
        A simple example: You want to make a wager-contract which allows bets on the total activity of a new crypto-game. 
        </p>
        <p>
        You cannot install hooks into it's contract code for your wager and the game doesn't have any publicly accessible analytics
        variables. 
        </p>
        <p>
        But! The game's contract emits an event with a specific topic every time someone plays. 
        </p>
        <p>
        Although this would typically be an
        intractable problem, you can now have a client submit the logged events to your contract and check for their validity with Kr8.io. 
        </p>
    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default ConsumingLogs;