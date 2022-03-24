import { Tab } from "@material-ui/core";
import {Tabs} from '@material-ui/core';

import { TabPanel } from "@material-ui/lab";


import React from "react";

const Home=()=>{
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return(
        <div>
  <Tabs value={value} onChange={handleChange} indicatorColor={"primary"}>
            <Tab label="Item One" value={1} />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
          
          <TabPanel value={1} >
        Item One
      </TabPanel>
        {/* {value === 1 && <TabContainer>Item Two</TabContainer>}
        {value === 2 && <TabContainer>Item Three</TabContainer>} */}
        </div>
    )
}
export default Home