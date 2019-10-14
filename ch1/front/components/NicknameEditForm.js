import React from 'react';
import { Form, Input, Button } from 'antd';

const NicknameEditForm = () => {
    return (
        <Form style={{ marginBottom: '20px', border: '1px soid #d9d9d9' }}>
            <Input addonBefore="닉네임" style={{ width: '60%', marginRight: '10px' }}/>
            <Button type="primary">수정</Button>
        </Form>
    );
}

export default NicknameEditForm;
            