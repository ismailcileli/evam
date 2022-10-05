import React, { useState } from "react";

export const PopUp = () => {
  let date = new Date();
  let options = { year: "numeric", month: "numeric", day: "numeric" };
  const [inputValues, setInputValue] = useState({
    name: "",
    description: "",
    createdAt: date.toLocaleString("tr-TR", options),
    formName: "",
    age: "",
    surname: "",
    id: Date.now(),
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }
  const handleSubmit = (e) => {
    localStorage.setItem(inputValues.id, JSON.stringify(inputValues));
  };

  return (
    <div
      className="modal fade"
      id="exampleModalCenter"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Add New Form
            </h5>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="col-form-label">From Name: *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="formName"
                    name="formName"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.form}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Description: *</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.description}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Name: *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.fields}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Surname: *</label>
                  <input
                    type="text"
                    className="form-control"
                    id="surname"
                    name="surname"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.surname}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="col-form-label">Age:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="age"
                    name="age"
                    onChange={(e) => handleChange(e)}
                    value={inputValues.age}
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="submit"
                    className="btn btn-success"
                    id="submit-button"
                  >
                    submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </form>
            </div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
