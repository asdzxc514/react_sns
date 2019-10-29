import { all, fork, call, put, takeLatest, takeEvery, take, delay } from 'redux-saga/effects';
import axios from 'axios';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE } from '../reducers/user';

// login
function loginAPI(){ // 서버에 요청을 보내는 부분    
    return axios.post('/login');
}

function* login(){
    try {
        //  yield call(loginAPI);
        yield delay(1000);
         yield put({ // put 은 dispatch 동일
             type: LOG_IN_SUCCESS,
         });
    } catch(e) {  //loginAPI 실패
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);
}


// signUp
function signUpAPI(){ // 서버에 요청을 보내는 부분
    return axios.post('/signUp');
}

function* signUp(){
    try {
         yield call(signUpAPI);
         yield delay(1000);
         throw new Error('에러에러');
         yield put({ // put 은 dispatch 동일
             type: SIGN_UP_SUCCESS,
         });
    } catch(e) {  //signUpAPI 실패
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e
        });
    }
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}



export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
    ])
}


// claa 은 함수 동기적 호출
// fork는  함수 비동기적 호출
// put 은 dispatch 동일