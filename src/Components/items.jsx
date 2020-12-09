import React from 'react';
import Item from './item';
import DataManager from './dataManager';
console.log("Starting itemsJSX");

class Items extends React.Component {
    state = {
        items: [
            {
                id: 1,
                value: "Example List Item Checked",
                isDone: false
            },
            {
                id: 2,
                value: "Example List Item Checked",
                isDone: true
            }
        ]
        
    };
    
    getTime(){ 
        let d = new Date();
        var n = d.getTime();
        return n;
    }
    //method called from item component
    handleDelete = item => {
        console.log("Deleted!");
        const items = this.state.items.filter((t) => {
            return t.id !== item;
        });
        this.setState({ items });
        //manipulate state
    }
    
    handleDone = item => {
        const items = [...this.state.items];
        console.log("Box Touched!");
        items.map((t) => {
            if (t.id === item.id) {
                t.isDone = !t.isDone;
            }
            return t;
        });
        this.setState({items});
        //when finished with update
    }
    //method called from dataManager component
    addNewItem = value => {
        if (value) {
            const items = [...this.state.items];
            items.push(
                {
                    id: this.getTime(),
                    value: value,
                    isDone: false
                }
            );
            this.setState({ addItemValue: "", items});
        } else {
            console.log("Please Add Item Text");
        }
        
    }
    
    render(){
        console.log("Render through Items");
        return(
            <table className="table table-striped">
                <tbody>
                {this.state.items.map((item, index) => (
                    <tr key={item.id}>
                        <Item index={index+1} item={item}
                         fooDelete={this.handleDelete} fooDoneDone={this.handleDone}/>
                    </tr>
                ))}
                
                <tr>
                  <td colSpan="4" className="text-center">
                    <DataManager fooAddItem={this.addNewItem}
                     dataManagerValue={this.state.dataManagerValue} />
                  </td>
                </tr>
                </tbody>
            </table>
        );
    }
}
// 
// 
export default Items;