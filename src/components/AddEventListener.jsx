import { useEffect } from "react";

function AddEventListener() {

  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized");
    };

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>My Component</div>;
}

export default AddEventListener;