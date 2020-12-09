import React from 'react';
console.log("Starting itemJSX");

class Item extends React.Component {
    
    render(){
        console.log("Added to list");
        return(
            <React.Fragment >
            <td style={{ width: 10}} className="text-center">
            {this.props.index}
            </td>
            <td style={{width: 15}} className="text-center">
            <input type="checkbox"
            defaultChecked={this.props.item.isDone} onChange={() => this.props.fooDoneDone(this.props.item)} />
            </td>
            <td>
            {
                this.renderitem()
            }
            </td>
            
            <td style={{width: 150}} className="text-center"><button onClick={ () => 
            this.props.fooDelete(this.props.item.id)} className="btn btn-danger btn-sm">Delete Now!</button>
            
            </td>
            </React.Fragment>
            );
    }
    
    renderitem(){
        if(this.props.item.isDone) {
            console.log("Strike Through Text");
        return <s>{this.props.item.value}</s>;
        } else {
            console.log("Bold Text");
        return <b>{this.props.item.value}</b>;
        }
    }
}

export default Item;