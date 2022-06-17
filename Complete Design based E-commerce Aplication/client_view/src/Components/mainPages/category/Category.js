import axios from "axios";
import React, { useContext, useState } from "react";
import { GlobalState } from "../../../GlobalState";

export const Category = () => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [categories] = state.CategoriesApi.categories;
  const [callback, setCallback] = state.CategoriesApi.callback;
  const [category, setCategory] = useState("");

  const [onEdit, setOnEdit] = useState(false);
  const [id, setID] = useState("");

  // const [id, setID] = useState('')

  const createCategory = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        // console.log(id + "-" + category);
        const res = await axios.put(
          `/categories/${id}`,
          { name: category },
          {
            headers: { Authorization: token },
          }
        );

        console.log(res.data.msg);
      } else {
        const res = await axios.post(
          "/categories",
          { name: category },
          {
            headers: { Authorization: token },
          }
        );
        console.log(res.data.msg);
      }

      setCallback(!callback);
      setCategory("");
      setOnEdit(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const deleteCategory = async (id) => {
    try {
      const res = await axios.delete(`/categories/${id}`, {
        headers: { Authorization: token },
      });
      console.log(res.data.msg);
      setCallback(!callback);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const editCategory = async (id, name) => {
    setID(id);
    setCategory(name);
    setOnEdit(true);
  };
  return (
    <div className="categories">
      <form onSubmit={createCategory}>
        <label htmlFor="category">Category</label>
        <input
          type="text"
          name="category"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">{onEdit ? "Update" : "Create"} </button>
      </form>
      {categories.length === 0 ? (
        "<div>Empty category</div>"
      ) : (
        <div className="col">
          {categories.map((category) => (
            <div className="row" key={category._id}>
              <p>{category.name}</p>
              <div>
                <button
                  onClick={() => editCategory(category._id, category.name)}
                >
                  Edit
                </button>
                <button
                  style={{ background: "rgb(121, 28, 14)" }}
                  onClick={() => deleteCategory(category._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
