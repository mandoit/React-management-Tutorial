//import React, { Component } from 'react';
import React from 'react';
import './App.css';
import Customer from "./components/Customer"

//데이터 변조 방지: 읽기전용상수 이용(codnst)
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


function App() {
  return (
    customers.map(c => {
      //map 이용시는 꼭  key 를 고유값으로 넘겨라..
      return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)
    })
  );
}

export default App;
