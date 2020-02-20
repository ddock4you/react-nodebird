import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";

const UserProfile = () => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        //useCallback을 쓰는 이유는 자식 컴포넌트에 props를 전달하기 때문에
        dispatch({
            type: LOG_OUT_REQUEST
        });
    }, []);

    return (
        <Card
            actions={[
                <Link href="/profile" key="twit">
                    <a>
                        <div>
                            짹짹
                            <br />
                            {me.Posts.length}
                        </div>
                    </a>
                </Link>,
                <Link href="/profile" key="following">
                    <a>
                        <div>
                            팔로잉
                            <br />
                            {me.Followings.length}
                        </div>
                    </a>
                </Link>,
                <Link href="/profile" key="follower">
                    <a>
                        <div>
                            팔로우
                            <br />
                            {me.Followers.length}
                        </div>
                    </a>
                </Link>
            ]}
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
