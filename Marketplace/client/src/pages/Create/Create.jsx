import axios from "axios";
import React, { useState } from "react";
import "./create.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Link } from "react-router-dom";
function Create() {
  const ariaLabel = { "aria-label": "description" };

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [des, setDescription] = useState("");
  const [rate, setRate] = useState("");
  const [color, setColor] = useState("");
  const [last, setLast] = useState("");
  const [newp, setNewprice] = useState("");
  const [size, setSize] = useState("");
  const [seller, setSeller] = useState("");

  const add = (obj) => {
    axios
      .post("http://localhost:5000/api/product/add", obj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="post-form">
      <h1>Create a new Product</h1>

      <Input
        className="input-field"
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        className="input-field"
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        className="input-field"
        type="number"
        placeholder="Rate"
        onChange={(e) => setRate(e.target.value)}
      />
      <Input
        className="input-field"
        type="text"
        placeholder="color"
        onChange={(e) => setColor(e.target.value)}
      />
      <Input
        className="input-field"
        type="number"
        placeholder="last price"
        onChange={(e) => setLast(e.target.value)}
      />
      <Input
        className="input-field"
        type="number"
        placeholder="New price"
        onChange={(e) => setNewprice(e.target.value)}
      />
      <Input
        className="input-field"
        type="text"
        placeholder="Size"
        onChange={(e) => setSize(e.target.value)}
      />
      <Input
        className="input-field"
        type="text"
        placeholder="image"
        onChange={(e) => setImage(e.target.value)}
      />

      <div className="button-container">
        <button
          className="add-button"
          onClick={() => {
            let obj = {
              name: name,
              description: des,
              image: image,
              rate: rate,
              size: size,
              color: color,
              lastprice: last,
              newprice: newp,
            //   sellername: seller,
            };
            add(obj);
          }}
        >
          <Link to="/categories">Add</Link> 
        </button>
      </div>
    </div>
  );
}

export default Create;
