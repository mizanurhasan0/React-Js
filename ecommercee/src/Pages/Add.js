import React, { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShopify } from "@fortawesome/free-brands-svg-icons";
import "../Designs/add.css";
import axios from "axios";
import { serverApi, img_headers } from "../TinnyHelper/TinyHelper";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../Helper/GlobalContext";
import { toast } from "react-toastify";

export const Add = () => {
  const navigate = useNavigate();
  const { globalVariable, setGlobalVariable, products, setProducts } =
    useContext(GlobalContext);

  const [selectedImage, setSelectedImage] = useState();

  const initialValues = {
    title: "",
    brand: "",
    specification: "",
    description: "",
    reg_price: "",
    dis_price: "",
    image: "",
    qty: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("-"),
    brand: Yup.string().required("-"),
    specification: Yup.string().required("-"),
    description: Yup.string().required("-"),
    reg_price: Yup.number().min(1, "-").required("-"),
    dis_price: Yup.number().min(1, "-").required("-"),
    qty: Yup.string().required("-"),
  });

  const onSubmit = (data) => {
    if (selectedImage) {
      const bodyFormData = new FormData(data.target);
      bodyFormData.append("title", data.title);
      bodyFormData.append("brand", data.brand);
      bodyFormData.append("specification", data.specification);
      bodyFormData.append("description", data.description);
      bodyFormData.append("reg_price", data.reg_price);
      bodyFormData.append("dis_price", data.dis_price);
      bodyFormData.append("image", selectedImage);
      bodyFormData.append("qty", data.qty);

      // console.log(bodyFormData.get("title"));
      axios
        .post(serverApi + "product", bodyFormData, img_headers)
        .then((response) => {
          // console.log(response.data);
          if (response.data.error) {
            toast.error("Error arise!" + response.data.error);
          } else {
            toast.success(response.data.message);
            setGlobalVariable({ ...globalVariable, activeNav: 1 });
            navigate("/");
          }
        });
    }
  };

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken") || !globalVariable.status) {
      navigate("/login");
      setGlobalVariable({ ...globalVariable, activeNav: 4 });
    }
  }, []);
  return (
    <div className="AppAdd">
      <div className="CreateBox">
        <FontAwesomeIcon
          className="loginIcon"
          icon={faShopify}
          color="#ff5c72"
        />
        <h1>Insert New Product</h1>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="formContainer">
            <div className="imageUploadBox">
              <Field
                type="file"
                onChange={imageChange}
                className="inputField"
                name="image"
                // required
              />

              {selectedImage && (
                <img
                  className="previewImage"
                  src={URL.createObjectURL(selectedImage)}
                  alt=""
                />
              )}
            </div>
            <label>Product Title</label>
            <br />
            <Field
              autoComplete="off"
              id="inputCreatePost"
              className="inputField"
              name="title"
              placeholder="(Ex. Product name...)"
            />
            <ErrorMessage name="title" component="span" />
            <label>Brand Name </label>
            <br />
            <ErrorMessage name="brand" component="span" />
            <Field
              autoComplete="off"
              className="inputField"
              id="inputCreatePost"
              name="brand"
              placeholder="(Ex. Hp,Dell...)"
            />
            <ErrorMessage name="brand" component="span" />
            <div className="mini_field">
              <div>
                <label>Qunatity</label>
                <br />
                <Field
                  autoComplete="off"
                  className="inputField"
                  id="inputCreatePost"
                  name="qty"
                  placeholder="(Ex. 1,2,3, ...)"
                />
                <ErrorMessage name="qty" component="span" />
              </div>
              <div>
                <label>Regular Price</label>
                <br />
                <Field
                  autoComplete="off"
                  className="inputField"
                  id="inputCreatePost"
                  name="reg_price"
                  placeholder="(Ex. 2022...)"
                />
                <ErrorMessage name="reg_price" component="span" />
              </div>
              <div>
                <label>Dicount Price</label>
                <br />
                <Field
                  autoComplete="off"
                  className="inputField"
                  id="inputCreatePost"
                  name="dis_price"
                  placeholder="(Ex. 2022...)"
                />
                <ErrorMessage name="dis_price" component="span" />
              </div>
            </div>
            <label>Product Specification</label>
            <br />
            <Field
              as="textarea"
              autoComplete="off"
              className="inputField textareaField"
              id="inputCreatePost"
              name="specification"
              placeholder="(Ex. Specification...)"
            />
            <ErrorMessage name="specification" component="span" />
            <label>Product Description</label>
            <br />
            <Field
              as="textarea"
              autoComplete="off"
              className="inputField textareaField"
              id="inputCreatePost"
              name="description"
              placeholder="(Ex. Product Description...)"
            />
            <ErrorMessage name="description" component="span" />
            <button type="submit">Add Product</button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
