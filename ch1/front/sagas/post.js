import { all, fork, call, put } from 'redux-saga/effects';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FATURE, LOG_IN_FAILURE } from '../reducers/user';



function loginAPI(){

}

function* login(){
    try {
         yield call(loginAPI);
         yield put({ // put 은 dispatch 동일
             type: LOG_IN_SUCCESS,
         });
    } catch(e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* watchLogin(){
    yield takeLatest(LOG_IN, login);
}

export default function* postSaga(){
    yield all([
        fork(watchLogin),
    ]);
}


// claa 은 함수 동기적 호출
// fork는  함수 비동기적 호출
// put 은 dispatch 동일