import produce from "immer";

export const initialState = {
    mainPosts: [], // 화면에 보일 포스트들
    imagePaths: [], // 미리보기 이미지 경로
    addPostErrorReason: false, // 포스트 업로드 실패 사유
    isAddingPost: false, // 포스트 업로드 중
    postAdded: false, // 포스트 업로드 성공
    isAddingComment: false,
    addCommentErrorReason: "",
    commentAdded: false
};

export const LOAD_MAIN_POSTS_REQUEST = "LOAD_MAIN_POSTS_REQUEST";
export const LOAD_MAIN_POSTS_SUCCESS = "LOAD_MAIN_POSTS_SUCCESS";
export const LOAD_MAIN_POSTS_FAILURE = "LOAD_MAIN_POSTS_FAILURE";

export const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
export const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
export const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";

export const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
export const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
export const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";

export const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
export const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
export const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";

export const REMOVE_IMAGE = "REMOVE_IMAGE";

export const ADD_POST_REQUEST = "ADD_POST_REQUEST";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
export const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
export const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";

export const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
export const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
export const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";

export const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";

export const LOAD_COMMENTS_REQUEST = "LOAD_COMMENTS_REQUEST";
export const LOAD_COMMENTS_SUCCESS = "LOAD_COMMENTS_SUCCESS";
export const LOAD_COMMENTS_FAILURE = "LOAD_COMMENTS_FAILURE";

export const RETWEET_REQUEST = "RETWEET_REQUEST";
export const RETWEET_SUCCESS = "RETWEET_SUCCESS";
export const RETWEET_FAILURE = "RETWEET_FAILURE";

export const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
export const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
export const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";

export default (state = initialState, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case UPLOAD_IMAGES_REQUEST: {
                break;
                // return {
                //     ...state
                // };
            }
            case UPLOAD_IMAGES_SUCCESS: {
                action.data.forEach(p => {
                    draft.imagePath.psuh(p);
                });
                // draft 또다른 표현 방법
                // draft.imagePaths = draft.imagePaths.concat(action.data);
                break;
                // return {
                //     ...state,
                //     imagePaths: [...state.imagePaths, ...action.data]
                // };
            }
            case UPLOAD_IMAGES_FAILURE: {
                break;
                // return {
                //     ...state
                // };
            }
            case REMOVE_IMAGE: {
                const index = draft.imagePaths.findIndex(
                    (v, i) => action.index
                );
                draft.imagePaths = splice(index, 1);
                break;
                // return {
                //     ...state,
                //     imagePaths: state.imagePaths.filter(
                //         (v, i) => i !== action.index
                //     )
                // };
            }
            case ADD_POST_REQUEST: {
                (draft.isAddingPost = true),
                    (draft.addPostErrorReason = ""),
                    (draft.Added = false);
                break;
                // return {
                //     ...state,
                //     isAddingPost: true,
                //     addPostErrorReason: "",
                //     postAdded: false
                // };
            }
            case ADD_POST_SUCCESS: {
                draft.isAddingPost = false;
                draft.mainPosts.unshift(action.data);
                draft.postAdded = true;
                draft.imagePaths = [];
                break;
                // return {
                //     ...state,
                //     isAddingPost: false,
                //     mainPosts: [action.data, ...state.mainPosts],
                //     postAdded: true,
                //     imagePaths: []
                // };
            }
            case ADD_POST_FAILURE: {
                draft.isAddingPost = false;
                draft.addPostErrorReason = action.error;
                break;
                // return {
                //     ...state,
                //     isAddingPost: false,
                //     addPostErrorReason: action.error
                // };
            }
            case ADD_COMMENT_REQUEST: {
                draft.isAddingComment = true;
                draft.addCommentErrorReason = "";
                draft.commentAdded = false;
                break;
                // return {
                //     ...state,
                //     isAddingComment: true,
                //     addCommentErrorReason: "",
                //     commentAdded: false
                // };
            }
            case ADD_COMMENT_SUCCESS: {
                const postIndex = draft.mainPosts.findIndex(
                    v => v.id === action.data.postId
                );
                draft.mainPosts[postIndex].Comments.push(action.data.comment);
                draft.isAddingComment = false;
                draft.commentAdded = true;
                break;
                // const postIndex = state.mainPosts.findIndex(
                //     v => v.id === action.data.postId
                // );
                // const post = state.mainPosts[postIndex];
                // const Comments = [...post.Comments, action.data.comment];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = { ...post, Comments };
                // return {
                //     ...state,
                //     isAddingComment: false,
                //     mainPosts,
                //     commentAdded: true
                // };
            }
            case ADD_COMMENT_FAILURE: {
                draft.isAddingComment = false;
                draft.addCommentErrorReason = action.error;
                // return {
                //     ...state,
                //     isAddingComment: false,
                //     addCommentErrorReason: action.error
                // };
            }
            case LOAD_COMMENTS_SUCCESS: {
                const postIndex = draft.mainPosts.findIndex(
                    v => v.id === action.data.postId
                );
                draft.mainPosts[postIndex].Comments = action.data.comments;
                break;

                // const postIndex = state.mainPosts.findIndex(
                //     v => v.id === action.data.postId
                // );
                // const post = state.mainPosts[postIndex];
                // const Comments = action.data.comments;
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = { ...post, Comments };
                // return {
                //     ...state,
                //     mainPosts
                // };
            }
            // a
            case LOAD_MAIN_POSTS_REQUEST:
            case LOAD_HASHTAG_POSTS_REQUEST:
            case LOAD_USER_POSTS_REQUEST: {
                draft.mainPosts = !action.lastId ? [] : state.mainPosts;
                draft.hasMorePost = action.lastId ? state.hasMorePost : true;
                break;
                // return {
                //     ...state,
                //     // 페이지 처음 들어왔을 땐 초기화하고 기존 게시글 보고 있는
                //     // 상태에서 스크롤 내릴 땐 기존 게시글들 유지
                //     mainPosts: action.lastId === 0 ? [] : state.mainPosts,
                //     hasMorePost: action.lastId ? state.hasMorePost : true
                // };
            }
            case LOAD_MAIN_POSTS_SUCCESS:
            case LOAD_HASHTAG_POSTS_SUCCESS:
            case LOAD_USER_POSTS_SUCCESS: {
                action.data.forEach(d => {
                    draft.mainPosts.push(d);
                });
                draft.hasMorePost = action.data.length === 10;
                break;
                // return {
                //     ...state,
                //     mainPosts: state.mainPosts.concat(action.data),
                //     hasMorePost: action.data.length === 10 // 스크롤을 더 활성화할지 말지 결정
                // };
            }
            case LOAD_MAIN_POSTS_FAILURE:
            case LOAD_HASHTAG_POSTS_FAILURE:
            case LOAD_USER_POSTS_FAILURE: {
                break;
            }
            case LIKE_POST_REQUEST: {
                break;
            }
            case LIKE_POST_SUCCESS: {
                const postIndex = draft.mainPosts.findIndex(
                    v => v.id === action.data.postId
                );
                draft.mainPosts[postIndex].Likers.unshift({
                    id: action.data.userId
                });
                break;
                // const postIndex = state.mainPosts.findIndex(
                //     v => v.id === action.data.postId
                // );
                // const post = state.mainPosts[postIndex];
                // const Likers = [{ id: action.data.userId }, ...post.Likers];
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = { ...post, Likers };
                // return {
                //     ...state,
                //     mainPosts
                // };
            }
            case LIKE_POST_FAILURE: {
                break;
                // return {
                //     ...state
                // };
            }
            case UNLIKE_POST_REQUEST: {
                break;
                // return {
                //     ...state
                // };
            }
            case UNLIKE_POST_SUCCESS: {
                const postIndex = draft.mainPosts.findIndex(
                    v => v.id === action.data.postId
                );
                const likeIndex = draft.mainPosts[postIndex].Likers.findIndex(
                    v => v.id === action.data.userId
                );
                draft.mainPosts[postIndex].Likers.splice(likeIndex, 1);

                // const postIndex = state.mainPosts.findIndex(
                //     v => v.id === action.data.postId
                // );
                // const post = state.mainPosts[postIndex];
                // const Likers = post.Likers.filter(
                //     v => v.id !== action.data.userId
                // );
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = { ...post, Likers };
                // return {
                //     ...state,
                //     mainPosts
                // };
            }
            case UNLIKE_POST_FAILURE: {
                break;
                // return {
                //     ...state
                // };
            }
            case RETWEET_REQUEST: {
                break;
                // return {
                //     ...state
                // };
            }
            case RETWEET_SUCCESS: {
                draft.mainPosts = draft.mainPosts.unshift(action.data);
                break;
                // return {
                //     ...state,
                //     mainPosts: [action.data, ...state.mainPosts]
                // };
            }
            case RETWEET_FAILURE: {
                break;
                // return {
                //     ...state
                // };
            }
            case REMOVE_POST_REQUEST: {
                // return {
                //     ...state
                // };
            }
            case REMOVE_POST_SUCCESS: {
                const index = draft.mainPosts.findIndex(
                    v => v.id === action.data
                );
                draft.mainPosts.splice(index, 1);
                // return {
                //     ...state,
                //     mainPosts: state.mainPosts.filter(v => v.id !== action.data)
                // };
            }
            case REMOVE_POST_FAILURE: {
                break;
                // return {
                //     ...state
                // };
            }
            default: {
                break;
                // return {
                //     ...state
                // };
            }
        }
    });
};

// export default reducer;
