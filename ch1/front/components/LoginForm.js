import React, { useCallback } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { useInput } from '../pages/signup';
import { loginAction } from '../reducers/user';


const LoginForm = () => {

    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const dispatch = useDispatch();

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch(loginAction);
    }, [id, password]);

    return (
        <Form onSubmit={onSubmitForm} style={{ padding: '15px' }}>
            <div>
                <label htmlFor="user-id">아이디</label><br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label><br />
                <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
            </div>
            <div style={{ marginTop: '15px' }}>
                <Button type="primary" htmlType="submit" loading={false} style={{ marginRight: '5px' }}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
        </Form>
    );
};
export default LoginForm;

