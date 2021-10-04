import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts, getPostStates} from "../features/posts/postSlice";
import LoaderComponent from "./Loader.Component";
import ItemComponent from "./ItemComponent";

const AccountPage = () => {
    const {loading, posts} = useSelector(getPostStates);
    const dispatch = useDispatch();
    const [post, setPost] = useState({});

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    useEffect(() => {
        if (posts.length !== 0) {
            setPost(posts[0]);
        }
    }, [posts])

    return (
        <>
            {
                loading
                    ? (<LoaderComponent/>)
                    : (<>
                        {<ItemComponent
                            id={post.id}
                            title={post.title}
                            description={post.description}
                            category={post.category}
                            imageSrc={post.image}/>
                        }
                    </>)
            }
        </>
    );
};

export default AccountPage;
