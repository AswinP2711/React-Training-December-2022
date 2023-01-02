import { useState } from "react";
import Product from "./products";

function MyForm(props) {
  const initialValues = { name: "", price: "", type: "" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...formValues };
    newFormData[fieldName] = fieldValue;
    setFormValues(newFormData);
  };

  const submitHandle=(e)=>{
    e.preventDefault();
    props.updateProduct(formValues);
  }
  return (
    <div>
      <form onSubmit={submitHandle}>
        <label>
          Enter Product name:
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter Product Price:
          <input
            type="number"
            name="price"
            value={formValues.price}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter Product Type:
          <input
            type="text"
            name="type"
            value={formValues.type}
            onChange={handleChange}
          />
        </label>
        <input type="submit" />
      </form>
      {/* {products.map((product) => (
        <Product
          name={product.name}
          price={product.price}
          type={product.type}
        />
      ))} */}
    </div>
  );
}

export default MyForm;
