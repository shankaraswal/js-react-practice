import CodeRunner from "./CodeRunner";
import * as practices from "./functions.js";

const JSDecodes = () => {
  return (
    <div className="flex flex-col min-h-screen pb-24">
      {Object.values(practices).map((practice, ind) => (
        <CodeRunner key={practice.title} practice={practice} seq={ind + 1} />
      ))}
    </div>
  );
};

export default JSDecodes;