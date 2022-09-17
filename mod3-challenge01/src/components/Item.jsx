import { Component } from "react";


export class Item extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="card m-1" style={{ width: "20em" }} key={this.props.id} onClick={() => { this.props.setCurrent(this.props.image) }}>
                <img src={this.props.image} className="card-img-top" alt="No hay imagen" />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name} <span className="text-info">{this.props.status}</span></h5>
                </div>
            </div>
        )
    }
}
