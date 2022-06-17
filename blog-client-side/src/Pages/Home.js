import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../Helper/AuthContext";

export const Home = () => {
  const [listOfPost, setListOfPost] = useState([]);
  const [likePosts, setLikePosts] = useState([]);
  const { authState, setAuthState } = useContext(AuthContext);

  let navigate = useNavigate();

  const apiLink = "http://localhost:3001";
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      navigate("/login");
    } else {
      axios
        .get(apiLink + "/posts", {
          headers: { accessToken: localStorage.getItem("accessToken") },
        })
        .then((response) => {
          setListOfPost(response.data.listOfPosts);
          setLikePosts(
            response.data.likedPosts.map((like) => {
              return like.PostId;
            })
          );
        });
    }
  }, []);

  const likeThePost = (PostId) => {
    axios
      .post(
        apiLink + "/likes",
        { PostId: PostId },
        {
          headers: { accessToken: localStorage.getItem("accessToken") },
        }
      )
      .then((response) => {
        setListOfPost(
          listOfPost.map((post) => {
            if (post.id === PostId) {
              if (response.data.liked) {
                return { ...post, Likes: [...post.Likes, 0] };
              } else {
                const likeArray = post.Likes;
                likeArray.pop();
                return { ...post, Likes: likeArray };
              }
            } else {
              return post;
            }
          })
        );
        if (likePosts.includes(PostId)) {
          setLikePosts(
            likePosts.filter((id) => {
              return id !== PostId;
            })
          );
        } else {
          setLikePosts([...likePosts, PostId]);
        }
      });
  };
  return (
    <div className="wrapper-grid">
      {listOfPost.map((val, key) => {
        return (
          <div className="container" key={key}>
            <h1 className="title">{val.title}</h1>
            <p
              className="description"
              onClick={() => {
                navigate(`/post/${val.id}`);
              }}
            >
              {val.postText}
            </p>
            <h4 className="footer">
              <Link to={`/profile/${val.UserId}`} className="footerName">
                {" "}
                {val.username}
              </Link>

              {/* <button
                className={
                  likePosts.includes(val.id) ? "btn-like" : "btn-unlike"
                }
                onClick={() => likeThePost(val.id)}
              >
                Like
              </button> */}
              <input
                className={
                  likePosts.includes(val.id) ? "btn-like" : "btn-unlike"
                }
                value={!likePosts.includes(val.id) ? "Like" : "Unlike"}
                type="button"
                onClick={() => likeThePost(val.id)}
              />
              <label>{val.Likes.length}</label>
            </h4>
          </div>
        );
      })}
    </div>
  );
};
