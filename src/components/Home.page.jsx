import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {appendPartialPosts, fetchPosts, getPostStates, setPartialPosts} from "../features/posts/postSlice";
import LoaderComponent from "./Loader.Component";
import ItemComponent from "./ItemComponent";
import useInView from "react-cool-inview";

const HomePage = () => {
    const {loading, posts, partialPosts, currentAppender, errors} = useSelector(getPostStates);
    const dispatch = useDispatch();

    const {observe, unobserve} = useInView({
        // For better UX, we can grow the root margin so the data will be loaded earlier
        rootMargin: "50px 0px",
        // When the last item comes to the viewport
        onEnter: ({unobserve, observe}) => {
            if (partialPosts.length !== posts.length) {
                dispatch(appendPartialPosts(posts.slice(currentAppender * 5, (currentAppender + 1) * 5)))
                observe();
            } else {
                unobserve();
            }
        },
    });

    useEffect(() => {
        dispatch(fetchPosts());
        return () => {
            unobserve();
        }
    }, []);

    useEffect(() => {
        if (posts.length !== 0) {
            dispatch(setPartialPosts(posts.slice(0, 5)));
        }
    }, [posts]);


    return (
        <>
            {
                loading
                    ? (<LoaderComponent/>)
                    : (<>
                        {partialPosts.map(post => {
                            return <ItemComponent
                                id={post.id}
                                key={post.image}
                                title={post.title}
                                description={post.description}
                                category={post.category}
                                imageSrc={post.image}/>
                        })}
                        <div ref={observe} style={{border: "1px solid transparent"}}/>
                    </>)
            }
        </>
    );
};

export default HomePage;
