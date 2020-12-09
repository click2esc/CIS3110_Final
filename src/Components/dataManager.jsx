import React from 'react';
console.log("Starting dataManagerJSX");

class DataManager extends React.Component {
    state = {
        defaultValue: "",
        value: this.props.additemValue
    }; 
    
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }
    
    clearInput = () => {
        //Clear existing value in input
        document.getElementById("itemValue").value = "";
        
        //Updating local component state
        this.setState({value: ""});
    }
    
    addItem = () => {
        //Call method reference in Items component using props
        this.props.fooAddItem(this.state.value);
        this.clearInput();
    }
    
    render(){
        console.log("Render through dataManager");
        return(
            <div className="input-group mb-3">
                <input type="text" className="form-control" id="itemValue" placeholder="item"
                onChange={this.handleChange} />
                
                <div className="input-group-append">
                <button onClick={this.addItem} className="btn btn-outline-secondary" type="button"
                id="button-addon2">Add to List</button>
                </div>
            </div>
        ); 
    }
}


export default DataManager;