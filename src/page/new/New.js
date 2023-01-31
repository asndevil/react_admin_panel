import React, { useState } from "react";
import SideBar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./newUser.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import AvatarEditor from "react-avatar-editor";
import { Box } from "@mui/system";
import { Button, Slider } from "@mui/material";

const New = ({ input, title }) => {
  let editor = "";
  const [pictures, setPicture] = useState({
    cropperOpen: true,
    img: null,
    zoom: 2,
    croppedImg:
      "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=",
  });

  const handleSlider = (e, value) => {
    setPicture({ ...pictures, zoom: value });
  };
  const handleCancel = () => {
    setPicture({ ...pictures, cropperOpen: false });
  };
  const handleSave = () => {
    if (setEditorRef) {
      console.log("editor: ", editor);
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();

      setPicture({
        ...pictures,
        img: null,
        cropperOpen: false,
        croppedImg: croppedImg,
      });
    }
  };

  const handleFileChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    console.log(url);
    setPicture({
      ...pictures,
      img: url,
      cropperOpen: true,
    });
  };
  //editor ref
  const setEditorRef = (ed) => {
    editor = ed;
    console.log((editor = ed));
  };

  return (
    <section className="new__users">
      <SideBar />
      <div className="new__users__container">
        <Navbar />
        <div className="top">
          <h2>{title}</h2>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={pictures.croppedImg}
              alt="upload__image"
              className="upload__image"
            />
            {pictures.cropperOpen === true ? (
              <Box display="block">
                <AvatarEditor
                  ref={setEditorRef}
                  image={pictures.img}
                  width={200}
                  height={200}
                  border={50}
                  color={[255, 255, 255, 0.6]} // RGBA
                  rotate={0}
                  scale={pictures.zoom}
                />
                <Slider
                  aria-label="raceSlider"
                  value={pictures.zoom}
                  min={1}
                  max={10}
                  step={0.1}
                  onChange={handleSlider}
                ></Slider>
                <Box>
                  <Button variant="contained" onClick={handleCancel}>
                    Cancel
                  </Button>
                  <Button onClick={handleSave}>Save</Button>
                </Box>
              </Box>
            ) : null}
          </div>
          <div className="right">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image
                  <DriveFolderUploadOutlinedIcon
                    className="icon"
                    style={{ cursor: "pointer" }}
                  />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>

              {input
                ? input.map((input) => (
                    <div className="formInput" key={input.id}>
                      <label htmlFor={input.label}>{input.label}</label>
                      <input
                        type={input.type}
                        name={input.name}
                        placeholder={input.placeholder}
                      />
                    </div>
                  ))
                : ""}
              <button>send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default New;
