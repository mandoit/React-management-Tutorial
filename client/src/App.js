import React, {Component} from 'react';
import './App.css';
import Customer from "./components/Customer";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
//npm install @mui/styles-->도로지움 npm uninstall @mui/styles, npm uninstall @mui/material
//npm install @material-ui/core 이거 설치함

/*
const styles = theme =>({
  root:{
    width:'100%',
    marginTop: theme.spacing(13),
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
})*/ //안돼서 아래처럼 교체
const styles = theme=>( {
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

//데이터 변조 방지: 읽기전용상수 이용(codnst)


class App extends Component {

  state ={
    customers:""
  }

  componentDidMount(){
     this.callApi()
     .then(res => this.setState({customers:res}))
     .catch(err=>console.log(err));
  }
  callApi=async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }


  render() {
    const { classes } = this.props;//아래 괄호안에서 classes.root 와 같이 사용할 변수를 여기에 정의 하느라 {}로 감쌈
    return (
      <Paper className={classes.root} >
        <Table className={classes.table}>
          <TableHead><tr>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell></tr>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => {
              //map 이용시는 꼭  key 를 고유값으로 넘겨라..
              return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)
            }): ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}




//export default App;
export default withStyles(styles)(App);
