import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import { createClient } from "contentful";

const App = () => {
  // Use state to store the content that we will retrieve from Contentful
  const [content, setContent] = useState(null);

  // Use the useEffect hook to retrieve content from Contentful when the component
  // is first mounted
  useEffect(() => {
    // Create a new Contentful client
    const client = createClient({
      // Replace these values with your own Contentful space ID and access token
      space: "wjtxrzlaggpc",
      accessToken: "O-z9ZMKJi_XuDFaFEYt1dNnGq0ltGAvBdGSkRSfr0MU",
    });

    // Retrieve the specified content from Contentful
    client
      .getEntry("5EPN92iRB60Micmiiyu0CU")
      .then((response) => {
        console.log(response);
        // Store the retrieved content in the component's state
        setContent(response.fields);
      })
      .catch(console.error);
  }, []);

  // If the content has not yet been retrieved, show a loading message
  if (!content) {
    return <p>Loading content...</p>;
  }

  // Otherwise, render the content in the component
  return (
    <div>
      <Header />
      <h1>{content.name}</h1>
      <p>{content.heading}</p>
      <div>{content.preamble}</div>
      <div>{content.mainBody}</div>
    </div>
  );
};

export default App;
