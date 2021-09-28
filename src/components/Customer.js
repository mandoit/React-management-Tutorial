import React from 'react';//{Component}

function Customer(props) {
    return (
        <div>          
            <CustomerProfile id={props.id}
            image={props.image}
            name={props.name}
            />
            <CustomerInfo birthday={props.birthday}
            gender={props.gender}
            job={props.job}
            />
        </div>
    );
}

function CustomerProfile(props) {
    return (
        <div>
            <img src={props.image} alt="profile" />
            <h2>{props.name}({props.id})</h2>
        </div>
    );
}

function CustomerInfo(props) {
    return (
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
        </div>
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