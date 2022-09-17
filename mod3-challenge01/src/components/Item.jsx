import { Component } from "react";


export class Item extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="card m-1 border-3 border-secondary" style={{ width: "20em" }} onClick={() => { this.props.setCurrent(this.props.image) }}>
                <img src={this.props.image} className="card-img-top" alt="No hay imagen" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name} <span className="text-info">{this.props.status}</span></h5>
                    <p className="text-secondary">{this.props.species}</p>
                </div>
            </div>
        )
    }
}
