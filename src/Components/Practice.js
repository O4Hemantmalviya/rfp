import { Delete, SettingsPhoneTwoTone } from "@material-ui/icons";
import { Button } from "bootstrap";
import React from "react";
import { useState } from "react";

import FormInput from "./Frominput";
import Table from "./Table";

const Pra = () => {
  const [tableData, setTableData] = useState([]);
  const [formInputData, setformInputData] = useState({
    fullName: "",
    Role: "",
    emailAddress: "",
    Mobile: "",
  });

  const Delete = (index)=>{
  
    const rows = [tableData];
    rows.splice(index, 1);
    setTableData(rows)
}

  const handleChange = (evnt) => {
    const newInput = (data) => ({
      ...data,
      [evnt.target.name]: evnt.target.value,
    });
    setformInputData(newInput);
  };

  const handleSubmit = (evnt) => {
    evnt.preventDefault();

    const checkEmptyInput = !Object.values(formInputData).every(
      (res) => res === ""
    );
    if (checkEmptyInput) {
      const newData = (data) => [...data, formInputData];
      setTableData(newData);

      const emptyInput = {
        fullName: "",
        Role: "",
        emailAddress: "",
        Mobile: "",
      };

      setformInputData(emptyInput);
    }
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <FormInput
              handleChange={handleChange}
              formInputData={formInputData}
              handleSubmit={handleSubmit}
             
            />
            <Table tableData={tableData}
                 Delete={Delete}   
            />
          </div>
          <div className="col-sm-4">
              
          </div>
        </div>
      </div>
      <div></div>
    </React.Fragment>
  );
};
export default Pra;
