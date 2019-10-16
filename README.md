# react_sns


#### react_sns / front

`npm init`  // 노트 프로젝트 만들겠다, package.json 편하게 만들기위해 사용


// 설치  
`npm i react react-dom next`  
`npm i -D nodemon webpack`  
`npm i -D eslint` // 협업시 필요함 (코드의 통일성)

<br>

// 파일추가
.eslintrc (코딩스타일 설정가능)
``` json
{
    "parserOptions": {
        "ecmaVersion": 2019,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint: recommended",
        "plugin: react/recommended"
    ],
    "plugins": [
        "import",
        "react-hooks"
    ]
}
```


// 설치  
`npm i -D eslint-plugin-import eslint-plugin-react eslint-plugin-react-hooks`  
`npm i -g next`  
```json
// package.json
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  },
```
`npm i antd`  // 디자인 https://ant.design/docs/react/introduce  
`npm i prop-types'  
'npm i redux react-redux@next' // 7.1이상이면 @next 안붙여도됨  


Redux (state) -> React의 state는 쓰지 않아도 돼요 
안정성, state 통제 용이  

{ 
    isLoggedIn: false, // 로그인 여부 -<  => A, c   
    user: {}, // 로그인한 사용자 B, C   
    mainPost: [], // 메인 게시글들 -> C  
    mainPost: [], // 메인 게세글들  
    ...  
} -> store  

store 는 state, action, reducer가 합쳐진 개념  

Action -> state를 바꾸는 행동 ex) 로그인 액션  
Dispatch -> Action을 실행     ex) 로그인 액션 dispatch   
Reducer -> Action의 결과로 state를 어떻게 바꿀지 정의  
ex) 로그인 액션 dispatch 시 -> isLoggedIn state를 true로  

redux : 코드량은 많지만 예상치 못한 동작이 생길 일은 없다.

```js
export const initialState = {
    isLoggedIn : false,
    user: {},
}

const LOG_IN = 'LOG_IN'; // 액션의 이름

const loginAction = {  // 실제 액션
    type: LOG_IN,
    data: {
        nickname: 'hyejin',
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case loginAction: {
            return {
                ...state,
                isLoggedIn: MediaStreamTrackAudioSourceNode,
                user: action.data,
            }
        }
    }
}

export default reducer;


// 사용할때는 
import { useDispatch } from 'react-redux';

dispatch(loginAction);
```


`npm i next-redux-wrapper`  
`npm i redux-saga` // 비동기 통신을 사용하기 위해  
