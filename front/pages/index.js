import React, { useEffect, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostForm from "../containers/PostForm";
import PostCard from "../containers/PostCard";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
    const { me } = useSelector(state => state.user);
    const { mainPosts, hasMorePost } = useSelector(state => state.post);
    const dispatch = useDispatch();
    // 프론트단에서 리덕스 액션을 한 번만 호출되게 수정
    const countRef = useRef([]);

    const onScroll = useCallback(() => {
        // console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight)
        if (
            window.scrollY + document.documentElement.clientHeight >
            document.documentElement.scrollHeight - 300
        ) {
            if (hasMorePost) {
                const lastId = mainPosts[mainPosts.length - 1].id;
                if (!countRef.current.includes(lastId)) {
                    dispatch({
                        type: LOAD_MAIN_POSTS_REQUEST,
                        lastId
                    });
                    countRef.current.push(lastId);
                }
            }
        }
    }, [hasMorePost, mainPosts.length]);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [mainPosts.length]);

    return (
        <div>
            {me && <PostForm />}
            {mainPosts.map(c => {
                return <PostCard key={c.id} post={c} />;
            })}
        </div>
    );
};

Home.getInitialProps = async context => {
    // console.log(Object.keys(context.store));
    context.store.dispatch({
        type: LOAD_MAIN_POSTS_REQUEST
    });
};

export default Home;
