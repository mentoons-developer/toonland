import React, { useState } from "react";
import Styles from "../pages/faq/faq.module.scss";
const AccordionComp = (item) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={Styles.accordionitem}>
      <div
        className={Styles.accordiontitle}
        onClick={() => setIsActive((prev) => !prev)}
      >
        <div>{isActive ? "-" : "+"}</div>
        <div>
          <p>{item.title}</p>
        </div>
      </div>
      {isActive && (
        <div className={Styles.accordioncontent}>{item.content}</div>
      )}
    </div>
  );
};

export default AccordionComp;
