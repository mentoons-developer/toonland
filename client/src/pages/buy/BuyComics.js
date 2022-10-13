import React, { useState } from "react";
import ComicsCard from "../../components/ComicsCard";
import KnowledgeCard from "../../components/KnowledgeCard";
import "./buycomics.scss";
import ComicsData from "./ComicsDB.json";
import CardsData from "./KnowledgeDB.json";

function BuyComics() {
  const [query, setQuery] = useState("");

  const check = ComicsData.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  const checkCards = CardsData.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  console.log(checkCards);

  const [product, setProduct] = useState("comics");

  return (
    <React.Fragment>
      <div className="product-wrapper">
        <div className="buy-header">
          <input
            type="text"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search with title..."
          />
          <select
            onChange={(e) => {
              setProduct(e.target.value);
            }}
          >
            <option value="comics">Comics</option>
            <option value="cards">Knowledge Cards</option>
          </select>
        </div>

        {product === "cards" && (
          <div>
            {checkCards.length === 0 && (
              <i>No KnowledgeCard exist on this title! 😕</i>
            )}
            <div id="hideRef" className="comics">
              <h2>Transports</h2>
              <div className="comics-container">
                {checkCards.map(
                  (item) =>
                    item.category === "transports" && (
                      <KnowledgeCard key={item.id} {...item} />
                    )
                )}
              </div>
            </div>

            <div id="hideRef" className="comics">
              <h2>Gadgets</h2>
              <div className="comics-container">
                {checkCards.map(
                  (item) =>
                    item.category === "gadgets" && (
                      <KnowledgeCard key={item.id} {...item} />
                    )
                )}
              </div>
            </div>

            <div id="hideRef" className="comics">
              <h2>Stationaries</h2>
              <div className="comics-container">
                {checkCards.map(
                  (item) =>
                    item.category === "stationaries" && (
                      <KnowledgeCard key={item.id} {...item} />
                    )
                )}
              </div>
            </div>
          </div>
        )}

        {product === "comics" && (
          <div>
            {check.length === 0 && <i>No Comics exist on this title! 😕</i>}
            <div id="hideRef" className="comics">
              <h2>Chapter 1</h2>
              <div className="comics-container">
                {check.map(
                  (item) =>
                    item.chapter === "1" && (
                      <ComicsCard key={item.id} {...item} />
                    )
                )}
              </div>
            </div>

            <div id="hideRef" className="comics">
              <h2>Chapter 2</h2>
              <div className="comics-container">
                {check.map(
                  (item) =>
                    item.chapter === "2" && (
                      <ComicsCard key={item.id} {...item} />
                    )
                )}
              </div>
            </div>

            <div id="hideRef" className="comics">
              <h2>Chapter 3</h2>
              <div className="comics-container">
                {check.map(
                  (item) =>
                    item.chapter === "3" && (
                      <ComicsCard key={item.id} {...item} />
                    )
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default BuyComics;

// {
//   data.map((item) => {
//     return (
//       <div key={item.id}>
//         <img alt="" src={item.img} />
//         <i>{item.title}</i>
//       </div>
//     );
//   });
// }
//
