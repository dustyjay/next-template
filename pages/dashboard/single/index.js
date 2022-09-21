import Link from "next/link";
import { useState } from "react";

const SingleDashboard = () => {
  const [url, setUrl] = useState("abc");

  const handleChange = (e) => {
    e.preventDefault();
    let { value } = e.target;
    setUrl(value);
  };

  const setDefaultUrl = () => {
    if (!url) setUrl("abc");
  };

  const urlLink = () => {
    return `/dashboard/single/${url}`;
  };

  return (
    <div>
      <input value={url} onInput={handleChange} onBlur={setDefaultUrl} />
      <br />
      <Link href={urlLink()}>
        <a>Go to {urlLink()}.js</a>
      </Link>
    </div>
  );
};

export default SingleDashboard;
