import React from "react";
import "./../styles/App.css";
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <PageLayout
        heading="Welcome to my website"
        children="This is the content of my website"
        footer="© 2023 My website. All rights are reserved"
      />
    </div>
  );
};

export default App;
