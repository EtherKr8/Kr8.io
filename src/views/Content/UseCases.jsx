import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import {Card} from 'components/Card/Card.jsx';

class UseCases extends Component {	
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={2} />
                        <Col md={8} >
                            <Card plain
								content={
                                    <div>
                                        <h1>Storing Data "in the Bloom"</h1>
                                        <h3>
                                        Kr8.io is a Smart Contract which implements public methods which can be used to reduce gas 
                                        costs incurred by reading and writing certain types of data.
                                        </h3>
                                        <h2>Use Cases</h2>
                                        <p>
                                        Reading/validating data stored in the log blooms costs more gas than reading data from a storage 
                                        variable, so data which is large in size and which is read infrequently will see the biggest 
                                        benefits over time.
                                        </p>
                                        <p>
                                        Additionally, logged data cannot be modified; and, there is no way to ensure that a user has sent 
                                        a contract the most recently recorded data if multiple versions are available without incurring 
                                        additional gas costs. Kr8.io cannot be used to store mutable state data without taking additional 
                                        precautions, as a malicious user could easily “go back in time” by providing the Smart Contract with 
                                        stale state data.
                                        </p>
                                        <p>
                                        The ideal data usage of Kr8.io is to store immutable data which is either large in size or 
                                        needs to be written frequently, such as proofs of purchase, software licenses, admission tickets,
                                        or any time-dependant factual data.
                                        </p>
                                        <h4>
                                        Wagers
                                        </h4>
                                        <p>
                                        Because wagers are typically not able to be modified after they are placed, and are only read by 
                                        the Smart Contract when the wager has concluded, they are a particularly compelling usage of kr8.io. 
                                        </p>
                                        <p>
                                        Gambling DApps suffer acutely from the gas cost of storage, and reducing the cost of placing a wager by 
                                        20-fold can significantly reduce the minimum stakes required to offset the cost of the transaction.
                                        </p>
                                        <h4>
                                        Oracles
                                        </h4>
                                        <p>
                                        Data Oracles and Kr8.io are a match made in heaven. Currently, Oracles must either bear the full 
                                        cost of storage for each update they make to their data feed or require that a client Smart 
                                        Contract send a request to the Oracle to retrieve the current data from data off-chain.
                                        </p>
                                        <h4>
                                        Game Unlocks
                                        </h4>
                                        <p>
                                        Achievements and other unlockables are a common mechanic in modern game design, and being able to
                                        record these at a significantly reduced cost will allow for them to make their way into the Ethereum
                                        gaming ecosystem. Achievements are immutable, as they aren't ever revoked, and they are unlikely
                                        to need to be read by Smart Contract code, except when a player is attempting to content that it 
                                        gates.
                                        </p>
                                        <h4>
                                        Executable Code
                                        </h4>
                                        <p>
                                        Currently, a common pattern in Ethereum Development is the deployment of template contracts, which
                                        other contracts use as libraries by copying the EVM bytecode which they contain. But an even more 
                                        flexible approach would be to write the executable bytecode to Kr8.io storage.
                                        </p>
                                        <p>
                                        Simply create a contract that accepts arbitrary executable code from a transaction, and then only
                                        executes that code if it is contained in a trusted Kr8.io log. With this pattern it is possible to 
                                        deploy new code to your contracts quickly, without having to deploy new contracts or libraries.
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

export default UseCases;
