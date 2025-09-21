"use client";

import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@carbon/react';

const CustomTabs = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Tabs selectedIndex={selected} onChange={({ selectedIndex }) => setSelected(selectedIndex)}>
      <TabList aria-label="Sample Tabs">
        <Tab>Tab One *</Tab>
        <Tab>Tab Two #</Tab>
        <Tab>Tab Three</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content for Tab One</TabPanel>
        <TabPanel>Content for Tab Two</TabPanel>
        <TabPanel>Content for Tab Three</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CustomTabs;
