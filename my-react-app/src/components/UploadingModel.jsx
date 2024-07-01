import { Form, Formik } from "formik";
import React from "react";
import AddInput from "./AddInput";
// import { Cross } from "../assets";
// import { setProject } from "../redux";
// import { useDispatch } from "react-redux";

const UploadingModel = ({ src, text, setOpenPopup }) => {
  // const dispatch = useDispatch();
  return (
    <>
      <div className="create_project_model"></div>
      <div className="box_project_model">
        <Formik
          initialValues={{ fileName: "", fileLink: "" }}
          //   validationSchema={createProjectValidationSchema}
          onSubmit={(values) => {
            // dispatch(setProject(values));
            setOpenPopup({ popup: false });
          }}
        >
          {() => (
            <Form className="uploading_form">
              <div>
                <div>
                  <img src={src} alt="" />
                  <h3>Upload {text}</h3>
                </div>
                <button onClick={() => setOpenPopup({ popup: false })}>
                  {/* <Cross /> */}Cross
                </button>
              </div>
              <div className="">
                <AddInput type={"text"} label={"Name"} name={"fileName"} />
                <AddInput type={"text"} label={"Link"} name={"fileLink"} />
              </div>
              <div className="uploading_form_buttons">
                <button type="submit">Upload</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default UploadingModel;
