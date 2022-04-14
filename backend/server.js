const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// .env 환경변수 사용하기
require('dotenv').config();

// express 서버 & 서버를 띄울 포트 만들기
const app = express();
const port = process.env.PORT || 5000;

// 미들웨어
app.use(cors());
app.use(express.json());  // json 파싱

// mongoDB 설정
const uri = process.env.ATLAS_URI;  // 데이터베이스 uri
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB database connection established successfully`);
})

// 라우터
const exerciseRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

// Server static assets if in production
if(process.env.NODE_ENV === 'production'){
    // Set static folder
    // All the javascript and css files will be read and served from this folder
    app.use(express.static('frontend/build'));

    // index.html for all page routes
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirname, '../frontend', 'build', 'index.html'));
    })
}

// 특정 포트에서 수신 대기 & 서버 시작
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})
