import React, {Component} from 'react';
import { Grid } from 'react-bootstrap';

class Footer extends Component {
	render() {
		return (
            <footer className="footer">
                <Grid>
                    <p className="copyright pull-right">
                        &copy; {(new Date()).getFullYear()} <a href="http://www.kr8.io">www.Kr8.io</a>
                    </p>
                </Grid>
            </footer>
		);
	}
}

export default Footer;
