import React from "react";

function ClickCounter({ count, incrementCount }) {
  return (
    <div>
      <button onClick={incrementCount} type="button">
        Clicked {count} Times
      </button>
    </div>
  );
}

export default ClickCounter;
