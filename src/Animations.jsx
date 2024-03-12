import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Animations(props) {

  const tl = gsap.timeline()

  let mm  = gsap.matchMedia();

  useLayoutEffect(() => {

    mm.add({
      isDesktop: "(min-width: 800px)",
      isMobile: "(max-width: 799px)"
    }, (context) => {
      let { isMobile, isDesktop } = context.conditions;

      //FIRST TO SECOND
      

    tl
    // .to(".navBar", {
    //   opacity: 0,
    //   height: "auto",
    //   alignSelf: "top",
    //   scrollTrigger: {
    //     trigger: ".one",
    //     start: "top 0%",
    //     end: "bottom bottom",
    //     scrub: true,
    //     immediateRender: false,
    //   },
    // })

    .to(".navContainer", {
      opacity: 0,
      height: "auto",
      alignItems: "top",
      scrollTrigger: {
        trigger: ".one",
        start: "top 0%",
        end: "bottom bottom",
        scrub: true,
        immediateRender: false,
      },
    })

    // SECOND TO THIRD

    .to(".trusted-by", {
      opacity: 0,
        scrollTrigger: {
          trigger: ".two",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
      })

    .to(".two-expanding", {
      width: "130%",
      height: "100vh",
      borderRadius: "75px",
      left: "-15%",
        scrollTrigger: {
          trigger: ".two-one",
          start: "top center",
          end: "25% top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(".two-expanding", {
        position: "fixed",
          scrollTrigger: {
            trigger: ".two-two",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        .to(".two-expanding", {
          width: "70vw",
          left: "15vw",
          borderRadius: "75px",
            scrollTrigger: {
              trigger: ".two-four",
              start: "top center",
              end: "bottom top",
              scrub: true,
              immediateRender: false,
            },
          })

          
      .to(".two-expanding", {
        position: "relative",
          scrollTrigger: {
            trigger: ".three",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        // FOUR TO FIVE


    })
    
  }, [])

  return (
    <>
    </>
  );
}
