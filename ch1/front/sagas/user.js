import { all, fork, call, put, takeLatest, takeEvery, take, delay } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

const HELLO_SAGA = 'HELLO_SAGA';

function loginAPI(){
    // 서버에 요청을 보내는 부분
}

function* login(){
    try {
         yield call(loginAPI);
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
 
function* watchLogin(){
    yield takeLatest(LOG_IN, login);
}

function* hello() {
    yield delay(1000);
    yield put({
        type: 'BYE_SAGA',
    });
}


function* watchHello() {
    yield takeLatest(HELLO_SAGA, hello);
}


function* watchSignUp() {

}

export default function* userSaga(){
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
        fork(watchHello),
    ])
}


// claa 은 함수 동기적 호출
// fork는  함수 비동기적 호출
// put 은 dispatch 동일