import React from "react";

export const SectionOne = () => {

  return (
    <section className="one">
      <div className="navContainer" >
        <div className="navBar" >
          <div className="navImage" />
          <h1>NAME</h1>
          <div className="navTextTwo" >
            <h2>Lorem</h2>
            <h2>Ipsum</h2>
            <h2>Dolor</h2>
          </div>
          <div className="navButtonOne" >
            <h2>Consectetur</h2>
          </div>
          <div className="navButtonTwo" >
            <h2>Amet</h2>
          </div>
        </div>
      </div>
      <div className="content-one" >
        <div className="headline-one" >
          <div className="headline-big" >
            <h1 className="headline-one-big" >Lorem<span>&</span></h1>
          </div>
          <div className="subheadline-one" >
            <div className="logoImage" />
            <h1 className="subheadline-one-big" >remora</h1>
            <h1 className="subheadline-one-small" >ariatur<br/>eserunt</h1>
          </div>
          <div className="text-one" >
            <p>Lorem ipsum dolor sit amet consectetur est adipiscing elit sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
      <div className="trusted-by" >
        <h1 className="trusted-text" >Trusted by</h1>
        <img className="sponsor" src="/sponsor1.png" />
        <img className="sponsor" src="/sponsor9.png" />
        <img className="sponsor" src="/sponsor3.png" />
        <img className="sponsor" src="/sponsor7.png" />
        <img className="sponsor" src="/sponsor8.png" />
      </div>
    </section>
  );
};