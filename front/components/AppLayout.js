import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import { Menu, Input, Button, Row, Col, Card, Avatar, Form } from "antd";
import LoginForm from "./LoginForm";
import UserProfile from "./UserProfie";
import { useSelector } from "react-redux";

const AppLayout = ({ children }) => {
    const { isLoggedIn } = useSelector(state => state.user);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/">
                        <a>노드버드</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="profile">
                    <Link href="profile">
                        <a>프로필</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search
                        enterButton
                        style={{
                            verticalAlign: "middle"
                        }}
                    />
                </Menu.Item>
            </Menu>
            <Link href="/signup">
                <a>
                    <Button>회원가입</Button>
                </a>
            </Link>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <Link href="https://github.com/ddock4you">
                        <a target="_blank">윤승현</a>
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node
};

export default AppLayout;
