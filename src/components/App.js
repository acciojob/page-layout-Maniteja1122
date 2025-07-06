import React from "react";
import "./../styles/App.css";
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <PageLayout
        header={<h1>Welcome to my website</h1>}
        children={<p>This is the content of my website</p>}
        footer={<p>© 2023 My website. All rights are reserved</p>}
      >
      </PageLayout>
    </div>
  );
};

export default App;
