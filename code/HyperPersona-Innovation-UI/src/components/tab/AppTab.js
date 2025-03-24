import React, { useState, useEffect } from "react";
import { Tabs, Tab, Box, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import "./AppTab.css"

const AppTab = ({ tabs, defaultTab, onChange, onCloseTab, ...rest }) => {
  const [value, setValue] = useState(defaultTab || 0);
  const [openedTabs, setOpenedTabs] = useState(tabs);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (onChange) onChange(newValue);
  };
  useEffect(() => {
    setOpenedTabs(tabs);
  }, [tabs]);
  const handleCloseTab = (index) => {
    const newTabs = openedTabs.filter((tab, tabIndex) => tabIndex !== index); // Remove the tab from the array
    let newValue = value;

    if (value === index) {
      // If closing the currently selected tab, select the previous tab
      newValue = index > 0 ? index - 1 : 0;
    } else if (value > index) {
      // Adjust value if closing a tab before the current tab
      newValue = value - 1;
    }

    setValue(newValue);
    if (onChange) onChange(newValue);

    if (newTabs.length === 0 && onChange) {
      // If there are no tabs left, trigger onChange with null value
      onChange(null);
    }
    setOpenedTabs(newTabs);

    // Invoke the onCloseTab function if provided
    if (onCloseTab) onCloseTab(newTabs);
  };

  return (
    <div className="tabs-container">
      <div className="tabs">
        <Tabs value={value} onChange={handleChange} {...rest}>
          {openedTabs.map((tab, index) => (
            <Tab
              key={index}
              label={
                <Box className={`tab-button ${value === index ? "active" : ""}`} sx={{ display: "flex", alignItems: "center" }}>
                  {tab.label}{tab.tabProps.closable &&
                    <IconButton
                    size="small"
                    sx={{ ml: 1 }}
                      onClick={() => handleCloseTab(index)} // Call handleCloseTab when the cross icon is clicked
                    >
                      <Close fontSize="small" />
                    </IconButton>
                  }

                </Box>
              }
              disabled={tab.tabProps.disabled}
            />
          ))}
        </Tabs>
      </div>

      {openedTabs.map((tab, index) => (
        <Box key={index} hidden={value !== index}>
          <div className="tab-content">{tab.content}</div>
        </Box>
      ))}
    </div>
  );
};

export default AppTab;
