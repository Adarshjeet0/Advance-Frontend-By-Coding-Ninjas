// Create component here to display the Basic information such as 
// Name: Email: Phone: Address:
// Make sure to include these in your code with semicolon
import {Component} from 'react';
export default class Hero extends Component{
    render(){
        return (
            <>
                <p>Name: Pranav</p>
                <p>Email: pranav@gmail.com</p>
                <p>Phone: 8383838832</p>
                <p>Address: Lucknow</p>
            </>
        );
    }
}