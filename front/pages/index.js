import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { LOAD_MAIN_POSTS_REQUEST } from "../reducers/post";

const Home = () => {
    const dispatch = useDispatch();
    const { me } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    // console.log(mainPosts);
    useEffect(() => {
        dispatch({
            type: LOAD_MAIN_POSTS_REQUEST
        });
    }, []);

    return (
        <div>
            {me && <PostForm />}
            {mainPosts.map(c => {
                return <PostCard key={c.id} post={c} />;
            })}
        </div>
    );
};

export default Home;
