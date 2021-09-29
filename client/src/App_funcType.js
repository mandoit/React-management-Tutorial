import React, { Component, useState } from 'react';//함수기반은 state 사용못한다고 하여 
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
import { useEffect } from "react"; //componentDidMound (클라스형 콤포넌트) 를 대체 하기 위해 추가

//함수형으로 바꾸려다가 포기(다음에 고수가되면)

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

//읽기전용상수 이용(const)
/*
const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '김길동',
  'birthday': '2000-01-20',
  'gender': '남자',
  'job': '대학생',
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '조길동',
  'birthday': '1986-01-20',
  'gender': '여자',
  'job': '사업가',
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '박호박',
  'birthday': '1975-12-25',
  'gender': '남자',
  'job': '자영업',
}

]
*/


function App(prop) {
 //props는 변경될 수 없는 변수 사용시 , state 는 변경될 수 있는 변수 인 경우
  useState={
    customers:""
  }


  /*-->오류남
  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err=>console.log(err));
  };*/
  //위 오류로 stackoverflow 대로 함
  useEffect(()=>{
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err=>console.log(err));
  },[])

   callApi = async () => {
    const response = await fetch("/api/customers");
    const body = await response.json();
  }


  const { classes } = prop;
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
          {customers.map(c => {
            //map 이용시는 꼭  key 를 고유값으로 넘겨라..
            return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />)
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

//export default App;
export default withStyles(styles)(App);
