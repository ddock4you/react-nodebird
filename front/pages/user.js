import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Avatar, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LOAD_USER_REQUEST } from "../reducers/user";
import { LOAD_USER_POSTS_REQUEST } from "../reducers/post";
import PostCard from "../components/PostCard";

const User = () => {
    const { mainPosts } = useSelector(state => state.post);
    const { me, userInfo } = useSelector(state => state.user);

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
    const id = parseInt(context.query.id, 10);
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
            data: id
    });
    context.store.dispatch({
        type: LOAD_USER_POSTS_REQUEST,
            data: id
    });
    return { id };
};

export default User;
