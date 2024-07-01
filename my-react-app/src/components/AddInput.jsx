import { ErrorMessage, Field } from "formik";
export default function AddInput({ label, type, placeholder, name }) {
  return (
    <div className="addInput">
      <label htmlFor={name} className="formik_new_project_label">
        {label}
      </label>
      <Field
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className="formik_new_project_input"
      />
      <div className="formik_new_project_error_message h-5">
        <ErrorMessage name={name} />
      </div>
    </div>
  );
}
