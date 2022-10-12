import React from "react";
import Styles from "./subscribePlan.module.scss";
import payments from "../../assets/payments.png";
function SubscribePlan() {
  return (
    <div style={{ backgroundColor: "#eef9f3" }}>
      <div className={Styles.tableWrapper}>
        <h4>Membership Benefits what you get.</h4>
        <br/>
        <table>
          <tr>
            <th>Title</th>
            <th>Basic</th>
            <th>Premium</th>
            <th>Pro</th>
          </tr>
          <tr>
            <td>Contests</td>
            <td>🚫</td>
            <td>🚫</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Personality Assessment</td>
            <td>50% off</td>
            <td>50% off</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>Auditions</td>
            <td>₹49</td>
            <td>₹49</td>
            <td>Free</td>
          </tr>
          <tr>
            <td>Knowledge Cards</td>
            <td>
              <span style={{ textDecoration: "line-through" }}>₹99</span> ₹69
            </td>
            <td>
              <span style={{ textDecoration: "line-through" }}>₹99</span> ₹69
            </td>
            <td>25 free cards</td>
          </tr>
          <tr>
            <td>Workshops</td>
            <td>30%</td>
            <td>30%</td>
            <td>40%</td>
          </tr>
          <tr>
            <td>Story Publishing </td>
            <td>🚫</td>
            <td>🚫</td>
            <td>✅</td>
          </tr>
          <tr>
            <td>Price PA</td>
            <td>
              <a href="https://api.whatsapp.com/send?phone=916384057461&text=I%20want%20to%20buy%20Subscription%20Plan%200f%20%E2%82%B9399">
                <button>₹399</button>
              </a>
            </td>
            <td>
              <a href="https://api.whatsapp.com/send?phone=916384057461&text=I%20want%20to%20buy%20Subscription%20Plan%200f%20%E2%82%B9599">
                <button>₹599</button>
              </a>
            </td>
            <td>
              <a href="https://api.whatsapp.com/send?phone=916384057461&text=I%20want%20to%20buy%20Subscription%20Plan%200f%20%E2%82%B9799">
                <button>₹799</button>
              </a>
            </td>
          </tr>
        </table>
      </div>
      <div className={Styles.payments}>
        <p>Choose plan to buy.</p>
        <img alt="" src={payments} />
      </div>
    </div>
  );
}

export default SubscribePlan;
