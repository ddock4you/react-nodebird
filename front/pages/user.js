import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { LOAD_USER_POSTS_REQUEST } from "../reducers/post";
import { Avatar, Card } from "antd";
import { LOAD_USER_REQUEST } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import PostCard from "../components/PostCard";

const User = ({ id }) => {
    const dispatch = useDispatch();
    const { mainPosts } = useSelector(state => state.post);
    const { me, userInfo } = useSelector(state => state.user);

    useEffect(() => {
        dispatch({
            type: LOAD_USER_REQUEST,
            data: id
        });
        dispatch({
            type: LOAD_USER_POSTS_REQUEST,
            data: id
        });
    }, []);
    console.log(me, userInfo);
    return (
        <div>
            {userInfo ? (
                <Card
                    actions={[
                        <div key="twit">
                            짹짹
                            <br />
                            {userInfo.Posts.length}
                        </div>,
                        <div key="following">
                            팔로잉
                            <br />
                            {userInfo.Followings.length}
                        </div>,
                        <div key="follower">
                            팔로우
                            <br />
                            {userInfo.Followers.length}
                        </div>
                    ]}
                >
                    <Card.Meta
                        avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                        title={userInfo.nickname}
                    />
                </Card>
            ) : null}
            {mainPosts.map(c => (
                <PostCard key={+c.createdAt} post={c} />
            ))}
        </div>
    );
};

User.propTypes = {
    id: PropTypes.number.isRequired
};

User.getInitialProps = async context => {
    console.log("hashag getInitialProps", context.query.id);
    // props로도 전달 가능!
    return { id: parseInt(context.query.id, 10) };
};

export default User;
