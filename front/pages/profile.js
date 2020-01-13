import React from "react";
import { Form, Button, List, Card, Input, Icon } from "antd";
import NicknameEditForm from "../components/NicknameEditForm";

const Profile = () => {
    return (
        <div>
            <NicknameEditForm />
            <List
                style={{ marginBottom: "20px" }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{ width: "100%" }}>더보기</Button>}
                bordered
                dataSource={["팥우유", "헬로", "노드버드"]}
                renderItem={item => (
                    <List.Item style={{ marginTop: "20px" }}>
                        <Card actions={[<Icon key="stop" type="stop" />]}>
                            <Card.Meta description={item} />
                        </Card>
                    </List.Item>
                )}
            />
            <List
                style={{ marginBottom: "20px" }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: "100%" }}>더보기</Button>}
                bordered
                dataSource={["팥우유", "헬로", "노드버드"]}
                renderItem={item => (
                    <List.Item style={{ marginTop: "20px" }}>
                        <Card actions={[<Icon key="stop" type="stop" />]}>
                            <Card.Meta description={item} />
                        </Card>
                    </List.Item>
                )}
            />
        </div>
    );
};

export default Profile;
