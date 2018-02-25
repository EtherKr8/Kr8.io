import React, { Component } from 'react';

import { Grid, Row, Col } from 'react-bootstrap';
import {Card} from 'components/Card/Card.jsx';

class ComingSoon extends Component {	
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
        <h1>Kr8.io is Coming Soon!</h1>
        <h4>
        The Kr8.io contract is currently undergoing testing in order to improve core functionality
        and to ensure data security.
        </h4>
        <h3>
        Core Functionality is Complete
        </h3>
        <p>
        In it's current state the contract can: efficiently consume multiple RLP encoded block headers 
        from a single transaction, grant Kr8 tokens for each new valid block header provided, 
        can grant access to stored log blooms in exchange for Kr8 tokens, and has built in public methods 
        for validating log presence and emitting properly formatted logs.
        </p>
        <p>
        Our contract code is available for auditing on <a href="https://github.com/EtherKr8/Contracts">Github</a>.
        </p>
        <h3>
        Kr8 Tokens?
        </h3>
        <p>
        The core function of Kr8.io is to allow work (gas costs) to be split among multiple users. In order
        to accomplish this Kr8 tokens are used to incentivise the submission of block headers and are
        required to validate log presence from within a Smart Contract.
        </p>
        <p>
        This is NOT an ICO, and Kr8.io is not seeking funding. As far as our current plans go, Kr8 tokens
        will only be able to be acquired by submitting block headers to the contract, an action which we call
        "Packing Kr8s". Packing Kr8s will not cost any Ethereum other than the gas required for the transaction.
        </p>
        <p>
        Once the contract is ready to go live, you will be able to Pack Kr8s via this website by simply pushing
        a button. The app will prompt for a number of Kr8s to pack, which determines gas cost and Kr8 reward.
        Client-side web3 will then poll the blockchain for block-headers which have not already been processed and
        construct a transaction which you can sign with Parity/Metamask in browser.
        </p>
        <h3>Ongoing Research</h3>
        <p>
        One of the current unknowns about this service is how secure data stored in this way is, and how reliable
        log validation is. Because the system is using a bloom filter to determine data validity, there is a 
        small chance that data can give a false positive about it's validity. We are currently looking into exactly
        how small that chance is and if there is a feasible way for malicious users to manipulate the log bloom.
        </p>
        <p>
        One potential attack vector that we are examining, is that it may be possibile for one contract (A) to emit an 
        event concurrently with another contract (B), and for a malicious user to pass off the logs from A as the logs
        from B. We are currently researching ways to minimize the Kr8.io service's vulnerability to this kind of attack.
        </p>
        <h3>Future Developments</h3>
        <p>
        Post launch, there are a number of additional features that would be perfect extensions of the Kr8.io service.
        Current plans include a bounty system where contracts can provide Kr8 tokens as rewards for users who provide
        them with recently emmitted events which they are listening for.
        </p>
        <h3>Get In Touch</h3>
        <p>
        If you are interested in the Kr8.io service and want to learn more about it, please feel free to send me an email
        at <a href="mailto:contact@kr8.io">contact@kr8.io</a>. 
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

export default ComingSoon;
