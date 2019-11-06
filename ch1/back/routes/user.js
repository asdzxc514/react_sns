const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./models');


// API는 다른 서비스가 내 서비스의 기능을 실행 할 수 있게 열어둔 창구
router.get('/', (req, res) => { //  /api/user/

});

router.post('/', async (req, res, next) => { // POST /api/user 회원가입
    try {
        await db.User.fideOne({
            where: {
                userId: req.body.userId,
            },
        });
        if (exUser) {
            return res.send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12); // salt는 10~13 으로 많이함 (높을수록 해킹 어렵 = 비밀번호 생성도 어렵)
        const newUser = await db.User.create({
            nickname: req.bodty.nickname,
            userId: req.bodty.userId,
            password: hashedPassword,
        });
        console.log(newUser);
        return res.status(200).json(newUser);

    } catch(e) {
        console.error(e);
        // return res.status(403).send(e);
        // 에러 처리를 여기서
        return next(e);
    }
});

router.get('/:id', (req, res) => { // 남의 정보 가져오는 것 ex) /3

});

router.post('/logout', (req, res) => { //  /api/user/logout

});

router.post('/login', (req, res) => {

});

router.get('/:id/follow', (req, res) => { //  /api/user/3/follow

});

router.post('/:id/follow', (req, res) => {

});

router.delete('/:id/follow', (req, res) => {

});

router.delete('/:id/follower', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});


module.exports = router;