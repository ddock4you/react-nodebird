import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";

const UserProfile = () => {
    const dispatch = useDispatch();
    const { me } = useSelector(state => state.user);

    const onLogout = useCallback(() => {
        //useCallback을 쓰는 이유는 자식 컴포넌트에 props를 전달하기 때문에
        dispatch({
            type: "LOG_OUT_REQUEST"
        });
    }, []);

    return (
        <Card
        // actions={[
        //     <div key="twit">
        //         짹짹
        //         <br />
        //         {me.Post.length}
        //     </div>,
        //     <div key="following">
        //         팔로잉
        //         <br />
        //         {me.Followings.length}
        //     </div>,
        //     <div key="follower">
        //         팔로우
        //         <br />
        //         {me.Followers.length}
        //     </div>
        // ]}
        >
            <Card.Meta
                avatar={<Avatar>{me.nickname[0]}</Avatar>}
                title={me.nickname}
            />{" "}
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;
