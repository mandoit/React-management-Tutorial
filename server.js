//https://www.youtube.com/watch?v=YO9CqrnxbFU 나동빈 7강 - Node.js Express 서버 개발환경 구축하기 [React와 Node.js를 활용한 고객 관리 시스템 개발 강의]
const express = require('express');
//const bodyParser=require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

/* 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//4.16 이상은 bodyParser 사용안함으로 아래와같이 변경함
위 const bodyParser 도 주석처리함
*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/hello',(req, res)=>{
    res.send({message:'Hello Express! Kaju..'});
});
console.log("server start");
app.listen(port,()=> console.log(`Listening on port ${port}`));