import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import {Card} from 'components/Card/Card.jsx';

class WhatIsKr8 extends Component {	
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={2} />
                        <Col md={8} >
                            <Card plain
                                //title="Kr8.io Reduces Gas Costs"
								content={
    <div>
        <h1>Can a Smart Contract Read from Events?</h1>
        <h4>
        Opposed to what you may have been told in the past, yes they can!
        </h4>
        <h4>
        Kr8.io grants Ethereuem Smart Contracts limited access to data stored on the blockchain 
        via event logs. This functioality allows them to monitor logging from external contracts 
        and, for certain types of data, can allow them to store usable data for up to 75x less gas.
        </h4><br/>
        <h3>
        Everything on the Blockchain can be Validated
        </h3>
        <p>
        The creation of Kr8.io began with a simple concept: that if a Smart Contract can write 
        data to the logs, and the logs are stored on the blockchain, there should be <i>some way</i>
        to read that data as well.
        </p>
        <p>
        Normally, Smart Contracts are restricted to reading data from storage variables. 
        So, even though it can store data by using an event log, it cannot ever read them. 
        </p>
        <p>
        The solution lies in the block-header. A data structure which contains both the information 
        required to reconstruct the block's hash and a bloom filter for that block's log topics. 
        A bloom filter is a special data structure which can be used to check for the presence 
        of a piece of data quickly, while not containing that data itself.
        </p>
        <h3>The Trick to Reading Logs</h3>
        <p>
        It's easy enough for a Smart Contract to get ahold of a block-header, you just need it to be
        passed in as transaction data. This is trustless, since you can prove it's validity 
        by hashing it within the Contract code, which results in that blocks already known hash. 
        This same technique is used to populate historical blockhash oracles.
        </p>
        <p>
        Since a Smart Contract can trustlessly access the block-header, it then only needs a way to
        derive the presence of a specific item of logged data. A normal log operation won't do, since
        we only can confirm which topics were logged to with the block header. But, if the Contract 
        logs both the data payload <i>and</i> simultaneously uses a hash of the data payload as
        a topic, it is possible to verify that a data payload was logged within a block, provided you 
        have the header.
        </p>
        <p>
        So, in theory, by requiring users to send a block header and the relevant logged data 
        as parameters to a transaction method, it is possible to confirm that that the data they pass in 
        is valid and was logged by that contract.
        </p>
        <p>
        Putting these pieces together over the course of a couple weeks of research, I was able to
        develop a functional proof-of-concept that was able to store a 10kb data payload in the Ropsten
        test net and subsequently validate it's existence trustlessly at a cost of 83k gas for the
        storage operation. An astounding savings when compared to the 6.4 million gas thic would have 
        cost using a storage variables! 
        </p> 
        <h3>Read/Write Tradeoffs</h3>
        <p>
        An unfortunate side effect of requiring data to be passed into the smart contract is that 
        the gas cost per byte of transaction data is higher than the cost per byte of 
        reading from storage. Which limits the applicable use cases for this technique to data which 
        does not need to be read frequently.
        </p>
        <p>
        When you combine the validating a block header is also costly as it requires an 
        additional 500+ bytes to be passed in with the transaction, the cost savings provided by the 
        proof-of-concpet all but evaporated for everything except for massive data payloads.
        </p>
        <p>
        The biggest problem for the proof of concept was the cost of validating the header. If you
        needed to read/validate the same data repeatedly, it added a huge amount of  work. Yet the 
        only alternative, would be recording the Log Blooms into storage after processing the header.
        </p>
        <h3>Putting it All Together</h3>
        <p>
        Obviously, recording the 256-byte Bloom Filter into storage, at a cost of 160k gas, in order 
        to prevent writing a comparable sized data payload is nonsense...
        </p>
        <p>
        But, what if you're not the only one using that validated header data? If even a few other 
        people need to be able to check for logs in the same header, it becomes quite economical to
        record the Log Bloom's from the block headers in storage.
        </p>
        <p>
        Kr8.io facilitates splitting the gas cost of recording log blooms into storage between multiple 
        people, letting Smart Contracts store data for fraction of the cost.
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

export default WhatIsKr8;
