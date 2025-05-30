import React, { useState } from "react";

const Two = () => {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setVisible(!visible) }>Toggle</button>
      {visible && <div>Toggle showing/hiding me</div>}
    </div>
  );
};

export default Two;
