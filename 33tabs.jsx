import * as React from "react";

const tabContext = React.createContext({
  activeTabValue: null,
  setActiveTabValue: () => {},
});

//It takes a prop called defaultValue
function TabProvider({ defaultValue, children }) {
  //Above we have an object so we know it has a value and a funcion to change it
  //So we add state with those properites
  //The value is going to be the default value prop that is passed above
  const [activeTabValue, setActiveTabValue] = React.useState(defaultValue);

  //We use  tabContent here because it is used to wrap the
  //entire app in our jsx

  //Pass the value and the function to change it to our context
  return (
    <tabContext.Provider value={{ activeTabValue, setActiveTabValue }}>
      {/* Pass children so the info can be rendered */}
      {children}
    </tabContext.Provider>
  );
}

//We also add children as props to be able to render it
function TabTrigger({ value, children }) {
  //It needs active tab value and set tab value which are coming from TabContext
  const { activeTabValue, setActiveTabValue } = React.useContext(tabContext);

  //We update the active tab by passing the value prop it received (tab1, tab2, or tab3)
  const handleSetActiveTabValue = () => {
    setActiveTabValue(value);
  };

  return (
    <button
      onClick={handleSetActiveTabValue}
      className={`tab ${activeTabValue === value ? "active" : ""}`}
    >
      {/* This needs to be whatever is between the opening and closing of the element tab trigger, so we use children to render it */}
      {children}
    </button>
  );
}

//To render the content between the open and closing tag of tab content we need children
//And the value prop that was passed to know which one is active
function TabContent({ children, value }) {
  //We need to know which one is active, we know that info from the activeTabValue we have in context
  const { activeTabValue } = React.useContext(tabContext);

  //If the active tab value doesnt match the value we received as props don't show anything
  //If it does show the tab with that value
  if (activeTabValue !== value) {
    return null;
  }
  return children;
}

export default function App() {
  return (
    <section>
      <h1>Tabs</h1>
      <TabProvider defaultValue="tab-1">
        <div className="tabs">
          <TabTrigger value="tab-1">Tab 1</TabTrigger>
          <TabTrigger value="tab-2">Tab 2</TabTrigger>
          <TabTrigger value="tab-3">Tab 3</TabTrigger>
        </div>
        <TabContent value="tab-1">Tab Content 1</TabContent>
        <TabContent value="tab-2">Tab Content 2</TabContent>
        <TabContent value="tab-3">Tab Content 3</TabContent>
      </TabProvider>
    </section>
  );
}
