import React from 'react';
import { Form, Input, Button, List, Card, Icon } from 'antd';

const Profile = () => {
    return (
        <div>
            <Form style={{ marginBottom: '20px', border: '1px soid #d9d9d9' }}>
                <Input addonBefore="닉네임" style={{ width: '60%', marginRight: '10px' }}/>
                <Button type="primary">수정</Button>
            </Form>
            <List 
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={['hyejin', '바보', '노드버드오피셜']}
                renderItem={item => (
                    <List.Item style={{ marginTop: '20px'}}>
                        <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />

            <List 
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={['hyejin', '바보', '노드버드오피셜']}
                renderItem={item => (
                    <List.Item style={{ marginTop: '20px'}}>
                        <Card actions={[<Icon key="stop" type="stop" />]}><Card.Meta description={item} /></Card>
                    </List.Item>
                )}
            />
        </div>
    );
}

export default Profile;