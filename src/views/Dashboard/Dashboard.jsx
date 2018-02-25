import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';
import { Grid, Row, Col } from 'react-bootstrap';


import {Card} from 'components/Card/Card.jsx';
import {StatsCard} from 'components/StatsCard/StatsCard.jsx';
import {Tasks} from 'components/Tasks/Tasks.jsx';
import Button from 'elements/CustomButton/CustomButton';

import {
    dataPie,
    legendPie,
    dataSales,
    optionsSales,
    responsiveSales,
    legendSales,
    dataBar,
    optionsBar,
    responsiveBar,
    legendBar
} from 'variables/Variables.jsx';

var Kr8Balance = "1,000";

var createBlockTable = function(){
	var blocks = [];
	for(var i = 0; i < 100; i++) {
		blocks.push((
		<Col lg={1}>
			<Card
				title="Already Packed"
				stats="12354854"
			/>
		</Col>
		));
	}
	
	return (
		<Row>
		{blocks}
		</Row>
	);
}

class Dashboard extends Component {	
    render() {
		
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
						<Col lg={10}/>
                        <Col lg={2}>
                            <StatsCard
                                bigIcon={<i className="pe-7s-safe text-warning"></i>}
                                statsText="My Kr8"
                                statsValue={Kr8Balance}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} >
                            <Card
                                id="blockViewer"
                                title="Block Viewer"
                                category="100 Most Recent"
								statsIcon="fa fa-history"
                                stats="Updated 3 minutes ago"
								content={createBlockTable()}
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
