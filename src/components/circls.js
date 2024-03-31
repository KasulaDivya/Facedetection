import { Component } from "react";


class Circle extends Component {
    constructor() {
        super();

        this.state = {
            circles: [],
        };
    }

    addCircle = () => {
        this.setState(prevState => ({
            circles: [...prevState.circles, { color: false }]
        }));
    };

    toggleColor = (index) => {
        this.setState(prevState => ({
            circles: prevState.circles.map((circle, i) =>
                i === index ? { ...circle, color: !circle.color } : circle
            )
        }));
    };

    render() {
        const { circles } = this.state;

        return (
            <>
                <button onClick={this.addCircle}>Add circles</button>
                {circles.length > 0 ? (
                    circles.map((circle, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: circle.color ? "blue" : "pink",
                                width: 100,
                                height: 100,
                                border: "2px solid black",
                                borderRadius: "50%",
                                marginTop: "10px"
                            }}
                            onClick={() => this.toggleColor(i)}
                        >
                            {i}
                        </div>
                    ))
                ) : (
                    <h2>no circle</h2>
                )}
            </>
        );
    }
}

export default Circle;
