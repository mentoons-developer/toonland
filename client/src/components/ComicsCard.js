import React from "react";

function ComicsCard(item) {
  return (
    <div>
      <p>{item.title}</p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=916384057461&text=I%20want%20to%20buy%20Comics"
      >
        <img alt="" src={item.img} />
      </a>
    </div>
  );
}

export default ComicsCard;
