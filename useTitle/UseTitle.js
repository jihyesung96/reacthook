import React, { useEffect, useState } from "react";

const useTitle = (initiialTitel) => {
  const [title, setTitle] = useState(initiialTitel);
  const updateTitel = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitel, [title]);
  return setTitle;
};

const App = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>Hi</div>
    </div>
  );
};

export default App;
