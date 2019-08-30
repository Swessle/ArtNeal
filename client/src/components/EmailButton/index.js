import React, { Component } from "react"
import Button from "react-bootstrap/Button"

class EmailButton extends Component {
    render() {
        <div>
            <a target="_blank"
                href={`mailto:${
                    this.props.email
                    }?subject=Purchasing%20Your%20OW%20Artwork&amp;`}>
                <Button id="btn-orangeAddit" onClick="" size="md" type="submit">Contact</Button>
            </a>
        </div>
    }

}

export default EmailButton;