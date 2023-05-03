import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

interface SidebarProps {
  selectedRowDetail: {
    email: string;
    businessname: string;
  }[];
  sidebarDetail: {
    key: string;
    value: string;
  }[];
}

const Sidebar = ({ selectedRowDetail, sidebarDetail }: SidebarProps) => {
  const [copiedButtonIndex, setCopiedButtonIndex] = useState("");
  function copyToClipboard(key: string, text: string) {
    navigator.clipboard.writeText(text);
    setCopiedButtonIndex(key);
    // TODO: timeout needs to be reset after function re runs
    setTimeout(() => {
      setCopiedButtonIndex("");
    }, 2000);
  }

  return (
    <Tabs
      selectedTabClassName="tab_selected"
      focusTabOnClick={false}
      className="sidebar_container"
    >
      <TabList className="tab_list">
        <Tab className="tab">Details</Tab>
        <Tab className="tab">Transactions</Tab>
      </TabList>
      <TabPanel>
        {!sidebarDetail ? (
          <p>Loading...</p>
        ) : (
          sidebarDetail.map((item) => {
            return (
              <div key={item.key} className="sidebar_items">
                <p className="title">{item.key}</p>
                <span>
                  <p className="subtitle">{item.value}</p>
                  <button
                    className="copy"
                    onClick={() => copyToClipboard(item.key, item.value)}
                  >
                    {item.key === copiedButtonIndex ? "Copied!" : "Copy"}
                  </button>
                </span>
              </div>
            );
          })
        )}
      </TabPanel>
      <TabPanel>
        {!selectedRowDetail ? (
          <p>Loading...</p>
        ) : (
          selectedRowDetail.map((item) => {
            return (
              <div key={item.email} className="sidebar_items">
                <p className="title">{item.email}</p>
                <span>
                  <p className="subtitle">{item.businessname}</p>
                  <button
                    className="copy"
                    onClick={() =>
                      copyToClipboard(item.email, item.businessname)
                    }
                  >
                    {item.email === copiedButtonIndex ? "Copied!" : "Copy"}
                  </button>
                </span>
              </div>
            );
          })
        )}
      </TabPanel>
    </Tabs>
  );
};

export default Sidebar;
