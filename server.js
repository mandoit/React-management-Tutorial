//https://www.youtube.com/watch?v=YO9CqrnxbFU 나동빈 7강 - Node.js Express 서버 개발환경 구축하기 [React와 Node.js를 활용한 고객 관리 시스템 개발 강의]
const express = require('express');
//const bodyParser=require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

/* 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//4.16 이상은 bodyParser 사용안함으로 아래와같이 변경함
위 const bodyParser 도 주석처리함
*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/hello', (req, res) => {
    res.send({ message: 'Hello Express! Kaju..' });
});

app.get('/api/customers', (req, res) => {
    res.send([
        {
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

    ]);
});


app.listen(port, () => console.log(`Server Started OK:Listening on port ${port}`));