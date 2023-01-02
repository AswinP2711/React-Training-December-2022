import { useState } from "react";
import BounceLoader from "react-spinners/BounceLoader";

function AddVoter(props) {
  const initialValues = { name: "", age: "", gender: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const [Loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...formValues };
    newFormData[fieldName] = fieldValue;
    setFormValues(newFormData);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      if (
        formValues.name.length == 0 ||
        formValues.age.length == 0 ||
        formValues.gender.length == 0
      ) {
        alert("All fiels must be filled!!!");
      } else if (formValues.age < 18) {
        alert("Below age 18 is not eligible to vote!!!");
      } else {
        props.updateProduct(formValues);
      }
      setLoading(false);
    }, 5000);
  };

  return (
    <div>
      <h1>Add Voter</h1>
      <form onSubmit={submitHandle}>
        <label>
          Enter name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter Age:
          <input
            type="number"
            name="age"
            value={formValues.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Enter Gender: Male
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          Female
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" />
      </form>
      {Loading ? (
          <BounceLoader color="#36d7b7" />
        ) : (
          <div>
            
          </div>
        )}
    </div>
  );
}

export default AddVoter;
