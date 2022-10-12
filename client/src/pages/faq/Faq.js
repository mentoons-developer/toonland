import React from "react";
import AccordionComp from "../../components/Accordion";
// import Comments from "../comments/Comments";
// import Footer from "../footer/Footer";
// import Interaction from "../interaction/Interaction";
import Styles from "./faq.module.scss";
import faqBoard from "../../assets/faqboard.png";
import Header from "../../components/header/Header";

const Faq = () => {
  const accordionData = [
    {
      title: "Where are we located in Bangalore ?",
      content: `We are located in Domlur near Paul Hotel. `,
    },
    {
      title: "Age limit for kids ?",
      content: `6-12 Years.`,
    },
    {
      title: "How to attend offline workshops of Toonland ?",
      content: `Our offline workshops are conducted in Bangalore and Delhi announced dates.`,
    },
    {
      title: "How to attend online workshops of Toonland ?",
      content: `Our online workshops could be attended from anywhere on Zoomcall.`,
    },

    {
      title: "What is the price of Toonland comics workshop ?",
      content: `Comic making workshops on weekends (2 days) at only 699 Rs.`,
    },
    {
      title: "How can children/kids participate ?",
      content: `We will announce the contents on Toonland.in website, you can register and participate.`,
    },
    {
      title: "How to create a Toonland account ?",
      content: `(Log on to Toonland.in → Easy signup name → Easy five step signup registration
        process → No credit card or bank account details required for this)`,
    },
    {
      title: "How to buy from this site ?",
      content: `You can buy with our easy payment options like Googlepay, PayTm, UPI, Debit cards `,
    },
    {
      title: "How to pay and buy ?",
      content: `You can buy with our easy payment options like Googlepay, PayTm, UPI, Debit cards`,
    },
    {
      title: "What is the price of comics ?",
      content: `All our comics are priced at ₹1. You can choose as many titles as you wish
      (per title ₹1) unleash power of every rupee.
      `,
    },

    {
      title: "Can I Gpay",
      content: `Yes we accept Gpay payments`,
    },
    {
      title: "Can I pay through cards",
      content: `Yes you can pay`,
    },

    {
      title: "Team behind Toonland",
      content: `NOT SUPPORTING`,
    },
  ];

  return (
    <div>
      <div className={Styles.wrapper}>
        <div className={Styles.board}>
          <img src={faqBoard} alt="" />
        </div>
        <div className={Styles.accordion}>
          <h4 style={{ margin: "0 1rem" }} className={Styles.head}>
            Welcome to our FAQs section. Here are some commonly asked questions.
          </h4>
          {accordionData.map((item, i) => (
            <AccordionComp
              key={item.title}
              i={i}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
