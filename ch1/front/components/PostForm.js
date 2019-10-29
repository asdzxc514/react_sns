import React, { useCallback, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');
    const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);

    useEffect( () => {
        setText('');
    }, [postAdded === true]);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text,
            },
        });
    }, []);

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    return (
        <Form style={{ marginBottom: 20 }} encType="multipart/form-data" onSubmit={onSubmitForm}>
            <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText} />
            <div>
                <input type="file" multiple hidden />
                <Button>이미지 업로드</Button>
                <Button type="primary" style={{ float: 'right'}} htmlType="submit" loading={isAddingPost}>쨱짹</Button>
                <div>
                    {imagePaths.map((v) => (
                            <div key={v} style={{ display: 'inline-block' }}>
                            <img src={`http://localhost:3000/${v}`} style={{ width: '200px '}} alt={v} />
                            <Button>제거</Button>
                        </div>
                    ))}
                </div>
            </div>
        </Form>
    );
}

export default PostForm;