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