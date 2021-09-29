import React from 'react';//{Component}
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function Customer(props) {
    return (
        <TableRow>
            <TableCell>{props.id}</TableCell>
            <TableCell><img src={props.image} alt="profile"/></TableCell>
            <TableCell>{props.name}</TableCell>
            <TableCell>{props.birthday}</TableCell>
            <TableCell>{props.gender}</TableCell>
            <TableCell>{props.job}</TableCell>
            

        </TableRow>
    );
}


/* class Customer2 extends React.Component{
    render(){
        return (
            <div>
                <h2>홍길동</h2>
                <p>961222</p>
                <p>남자</p>
                <p>대학생</p>
            </div>
        )
    }
} */

export default Customer;