const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');

dotenv.config();
const app = express();
db.sequelize.sync();
passportConfig();

// 미들웨어
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: true,
    credentials: true,
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false, // 매번 새션 강제 저장
    saveUninitialized: false, // 빈 값도 저장    
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true, // 자바스크립트로 쿠키에 접근못하게 막는것 (해커들로부터 보호)
        secure: false, // https 를 쓸 때 true 로 변경해야함
    },
    name: 'rtssck'
}));
app.use(passport.initialize());
app.use(passport.session());

// API는 다른 서비스가 내 서비스의 기능을 실행 할 수 있게 열어둔 창구
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);

app.listen(1225, () => {
    console.log('server is running on http://localhost:1225');
});

