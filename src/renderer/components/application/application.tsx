import * as React from "react";
import Button from "@material-ui/core/Button";

export interface State {
    open?: boolean;
}

export interface Props {
}

export class Application extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
        };

        this.click = this.click.bind(this);
    }

    render() {
        return (
            <Button
                variant="contained"
                color="primary"
                onClick={this.click}
            >
                Click me!
            </Button>
        );
    }

    private click(): void {
        alert("Hello world!");
    }
}
