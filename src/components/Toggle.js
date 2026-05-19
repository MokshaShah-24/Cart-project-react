import { useEffect, useState } from "react";

function Toggle() {
  let toggleBtn = "dark";

  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.style.backgroundColor = dark ? "black" : "white";
    document.body.style.color = dark ? "white" : "black";
    document.body.style.transition = "0.3s";
  }, [dark]);

  const changeBG = () => {
    setDark(!dark);
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => changeBG(!toggleBtn)}
        >
          {dark ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
}

export default Toggle;
