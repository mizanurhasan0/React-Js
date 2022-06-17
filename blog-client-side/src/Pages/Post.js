import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Post.css";
import { AuthContext } from "../Helper/AuthContext";

export const Post = () => {
  let apiLink = "http://localhost:3001";
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const { authState } = useContext(AuthContext);

  const naigation = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(apiLink + `/posts/byId/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setPostObject(response.data);
      });
    axios.get(apiLink + `/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const initialValues = {
    commentBody: "",
    PostId: id,
  };
  const validationSchema = Yup.object().shape({
    commentBody: Yup.string().required("Input Your comment about your product"),
    PostId: Yup.string().required(),
  });

  const onSubmit = (data, formikApi) => {
    axios
      .post(apiLink + "/comments", data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        if (response.data.error) {
          alert("Error");
        } else {
          setComments([
            ...comments,
            { commentBody: data.commentBody, username: response.data.username },
          ]);
          formikApi.resetForm();
        }
      });
  };
  const deleteComment = (id) => {
    axios
      .delete(apiLink + `/comments/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        setComments(
          comments.filter((val) => {
            return val.id !== id;
          })
        );
        alert("Delete Successfully");
      });
  };
  const deletePost = () => {
    console.log(id);
    axios
      .delete(`http://localhost:3001/posts/${id}`, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        console.log(response);

        alert(response.data);
        naigation("/");
      });
  };
  const updateTitle = (option) => {
    if (option === "title") {
      const newTitle = prompt("Title Update");
      if (newTitle === "null" || newTitle === null || newTitle === "") {
        alert("Enter Your Title ");
      } else {
        axios.put(
          "http://localhost:3001/posts/title",
          { newTitle: newTitle, id: id },
          { headers: { accessToken: localStorage.getItem("accessToken") } }
        );
        setPostObject({ ...postObject, title: newTitle });
      }
    } else if (option === "body") {
      const bodyText = prompt("Update Your body Text");
      if (bodyText === "null" || bodyText === null || bodyText === "") {
        alert("Input your body Field");
      } else {
        axios.put(
          "http://localhost:3001/posts/body",
          { newBodyText: bodyText, id: id },
          { headers: { accessToken: localStorage.getItem("accessToken") } }
        );
        setPostObject({ ...postObject, postText: bodyText });
      }
    }
  };
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div
            className="postTitle"
            onClick={() => {
              if (authState.username === postObject.username) {
                updateTitle("title");
              }
            }}
          >
            {" "}
            {postObject.title}{" "}
          </div>
          <div
            className="body"
            onClick={() => {
              if (authState.username === postObject.username) {
                updateTitle("body");
              }
            }}
          >
            {postObject.postText}
          </div>
          <div className="postFooter">
            {postObject.username}{" "}
            {authState.username === postObject.username && (
              <button onClick={deletePost}>Delete</button>
            )}
          </div>
        </div>
      </div>
      <div className="rightSide">
        <h2>Comment Section</h2>
        <div className="commentSection">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              <ErrorMessage name="commentBody" component="span" />
              <Field
                autoComplete="off"
                id="inputComment"
                className="commentInput"
                name="commentBody"
                placeholder="Ex. Comment..."
              />
              <button type="submit" className="btnSubmit">
                + Comment
              </button>
            </Form>
          </Formik>
        </div>
        <div className="listOfComments">
          {comments.map((data, key) => {
            return (
              <div key={key} className="comnent">
                <h3>
                  {data.commentBody}- User:{data.username}
                </h3>
                {authState.username === data.username && (
                  <button
                    className="btn-delete"
                    onClick={() => deleteComment(data.id)}
                  >
                    X
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
