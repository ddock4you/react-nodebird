import React, { useCallback } from "react";
import Link from "next/link";
import { Input, Button, Form } from "antd";
import { useInput } from "../pages/signup";
import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";

const loginForm = () => {
    const dispatch = useDispatch();
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");
    const { isLoggingIn } = useSelector(state => state.user);
    const onSubmitForm = useCallback(
        e => {
            e.preventDefault();
            dispatch({
                type: LOG_IN_REQUEST,
                data: {
                    id,
                    password
                }
            });
        },
        [id, password]
    );

    return (
        <Form onSubmit={onSubmitForm}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input
                    name="user-id"
                    required
                    value={id}
                    onChange={onChangeId}
                />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <Input
                    name="user-password"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                />
            </div>
            <div style={{ marginTop: "10px" }}>
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>
                    로그인
                </Button>
                <Link href="/signup">
                    <a>
                        <Button>회원가입</Button>
                    </a>
                </Link>
            </div>
        </Form>
    );
};

export default loginForm;
