import React, { useState, useCallback, useEffect, memo, useRef } from "react";
import {
    Card,
    Icon,
    Button,
    Avatar,
    Form,
    Input,
    List,
    Comment,
    Popover
} from "antd";
import Link from "next/link";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import moment from "moment";
moment.locale("ko");

import {
    ADD_COMMENT_REQUEST,
    LOAD_COMMENTS_REQUEST,
    LIKE_POST_REQUEST,
    UNLIKE_POST_REQUEST,
    RETWEET_REQUEST,
    REMOVE_POST_REQUEST
} from "../reducers/post";
import PostImages from "../components/PostImages";
import PostCardContent from "../components/PostCardContent";
import { FOLLOW_USER_REQUEST, UNFOLLOW_USER_REQUEST } from "../reducers/user";
import CommentForm from "../components/CommentForm";
import FollowButton from "../components/FollowButton";

const CardWrapper = styled.div`
    margin-bottom: 20px;
`;

const PostCard = memo(({ post }) => {
    const [commentFormOpened, setCommentFormOpened] = useState(false);

    const id = useSelector(state => state.user.me && state.user.me.id);
    const dispatch = useDispatch();
    const liked = id && post.Likers && post.Likers.find(v => v.id === id);

    const onToggleComment = useCallback(() => {
        setCommentFormOpened(prev => !prev);
        if (!commentFormOpened) {
            dispatch({
                type: LOAD_COMMENTS_REQUEST,
                data: post.id
            });
        }
    }, []);

    const postMemory = useRef(id);

    console.log("id", id);
    useEffect(() => {
        console.log(
            "post useEffect",
            postMemory.current,
            postMemory.current === id
        );
    }, [post]);

    const onToggleLike = useCallback(() => {
        if (!id) {
            return alert("로그인이 필요합니다!");
        }
        if (liked) {
            // 좋아요 누른 상태
            dispatch({
                type: UNLIKE_POST_REQUEST,
                data: post.id
            });
        } else {
            // 좋아요 안 누른 상태
            dispatch({
                type: LIKE_POST_REQUEST,
                data: post.id
            });
        }
    }, [id, post && post.id, liked]);

    const onRetweet = useCallback(() => {
        if (!id) return alert("로그인이 필요합니다.");
        return dispatch({
            type: RETWEET_REQUEST,
            data: post.id
        });
    }, [id, post.id]);

    const onFollow = useCallback(
        userId => () => {
            dispatch({
                type: FOLLOW_USER_REQUEST,
                data: userId
            });
        },
        []
    );

    const onUnfollow = useCallback(
        userId => () => {
            dispatch({
                type: UNFOLLOW_USER_REQUEST,
                data: userId
            });
        },
        []
    );

    const onRemovePost = useCallback(
        userId => () => {
            dispatch({
                type: REMOVE_POST_REQUEST,
                data: userId
            });
        },
        []
    );

    return (
        <CardWrapper>
            <Card
                cover={post.Images[0] && <PostImages images={post.Images} />}
                actions={[
                    <Icon type="retweet" key="retweet" onClick={onRetweet} />,
                    <Icon
                        type="heart"
                        key="heart"
                        theme={liked ? "twoTone" : "outlined"}
                        twoToneColor="#eb2f96"
                        onClick={onToggleLike}
                    />,
                    <Icon
                        type="message"
                        key="message"
                        onClick={onToggleComment}
                    />,
                    <Popover
                        key="ellipsis"
                        content={
                            <Button.Group>
                                {id && post.UserId === id ? (
                                    <>
                                        <Button>수정</Button>
                                        <Button
                                            type="danger"
                                            onClick={onRemovePost(post.id)}
                                        >
                                            삭제
                                        </Button>
                                    </>
                                ) : (
                                    <Button>신고</Button>
                                )}
                            </Button.Group>
                        }
                    >
                        <Icon type="ellipsis" />
                    </Popover>
                ]}
                title={
                    post.RetweetId
                        ? `${post.User.nickname}님이 리트윗하셨습니다.`
                        : null
                }
                extra={
                    <FollowButton
                        post={post}
                        onUnfollow={onUnfollow}
                        onFollow={onFollow}
                    />
                }
            >
                {post.RetweetId && post.Retweet ? (
                    <Card
                        cover={
                            post.Retweet.Images[0] && (
                                <PostImages images={post.Retweet.Images} />
                            )
                        }
                    >
                        <span style={{ float: "right" }}>
                            {moment(post.createdAt).format("YYYY.MM.DD.")}
                        </span>
                        <Card.Meta
                            avatar={
                                // 동적인 라우터일 땐 객체 방식으로 주소를 입력
                                <Link
                                    href={{
                                        pathname: "/user",
                                        query: { id: post.Retweet.User.id }
                                    }}
                                    as={`/user/${post.Retweet.User.id}`}
                                >
                                    <a>
                                        <Avatar>
                                            {post.Retweet.User.nickname[0]}
                                        </Avatar>
                                    </a>
                                </Link>
                            }
                            title={post.Retweet.User.nickname}
                            description={
                                <PostCardContent
                                    postData={post.Retweet.content}
                                />
                            }
                        />
                    </Card>
                ) : (
                    <Card.Meta
                        avatar={
                            // 동적인 라우터일 땐 객체 방식으로 주소를 입력
                            <Link
                                href={{
                                    pathname: "/user",
                                    query: { id: post.User.id }
                                }}
                                as={`/user/${post.User.id}`}
                            >
                                <a>
                                    <Avatar>{post.User.nickname[0]}</Avatar>
                                </a>
                            </Link>
                        }
                        title={post.User.nickname}
                        description={
                            <PostCardContent postData={post.content} />
                        }
                    />
                )}
            </Card>
            {commentFormOpened && (
                <>
                    <CommentForm post={post} />
                    <List
                        header={`${
                            post.Comments ? post.Comments.length : 0
                        } 댓글`}
                        itemLayout="horizontal"
                        dataSource={post.Comments || []}
                        renderItem={item => (
                            <li>
                                <Comment
                                    author={item.User.nickname}
                                    avatar={
                                        <Link
                                            href={{
                                                pathname: "/user/",
                                                query: { id: post.User.id }
                                            }}
                                            as={`/user/${post.User.id}`}
                                        >
                                            <a>
                                                <Avatar>
                                                    {item.User.nickname[0]}
                                                </Avatar>
                                            </a>
                                        </Link>
                                    }
                                    content={item.content}
                                />
                            </li>
                        )}
                    />
                </>
            )}
        </CardWrapper>
    );
});

PostCard.propTypes = {
    post: PropTypes.shape({
        User: PropTypes.object,
        content: PropTypes.string,
        img: PropTypes.string,
        createdAt: PropTypes.string
    }).isRequired
};

export default PostCard;
