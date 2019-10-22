import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
// import { loginAction, logoutAction } from '../reducers/user';

const Home = () => {
    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    const dispatch = useDispatch();
        
    // TODO: 액션 예시를 보여주기 위해 썼으니 제거
    // useEffect(() => { 
    //   dispatch(loginAction);
    //   dispatch(logoutAction);
    //   dispatch(loginAction);
    // }, []);
  
    useEffect( () => {
        dispatch({
            type: 'HELLO_SAGA',
        });
        dispatch({
            type: 'HELLO_SAGA',
        });
        dispatch({
            type: 'HELLO_SAGA',
        });
        dispatch({
            type: 'HELLO_SAGA',
        });
        dispatch({
            type: 'HELLO_SAGA',
        });
    }, []);

    return (
        <div>
            {isLoggedIn && <PostForm />}
            {mainPosts.map((c) => {
            return (
                <PostCard key={c} post={c} />
            );
            })}
        </div>
    );
};
  
export default Home;