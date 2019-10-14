export const initialState = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'hyejin',
        },
        content: '첫 게시글',
        img: 'https://tistory1.daumcdn.net/tistory/3056738/attach/9cbf16da067d4e38b6483d4685181dcb',
    }],
    imagePaths: [],
};

const ADD_POST = 'ADD_POST';
const ADD_DUMMY = 'ADD_DUMMY';

const addPost = {
    type: ADD_POST,
};

const addDummy = {
    type: ADD_DUMMY,
    data: {
        content: 'Hello',
        UserId: 1,
        User: {
            nickname: 'hyejin',
        },
    },
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state, 
            };
        }
        case ADD_DUMMY: {
            return {
                ...state,
                mainPosts: [ action.data, ...state.mainPosts ],
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }
};