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
    .to(".navBar", {
    opacity: 0,
    width: "25%",
      scrollTrigger: {
        trigger: ".two",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
      },
    })

    // SECOND TO THIRD

    .to(".two-expanding", {
      opacity: 1,
      width: "150%",
      height: "100vh",
        scrollTrigger: {
          trigger: ".two",
          start: "top center",
          end: "bottom top",
          scrub: true,
          immediateRender: false,
        },
      })

      .to(".two-expanding", {
        position: "fixed",
          scrollTrigger: {
            trigger: ".three",
            start: "top bottom",
            end: "toptop",
            scrub: true,
            immediateRender: false,
          },
        })

      // .to(".two-expanding", {
      //   position: "fixed",
      //   width: "115%",
      //   height: "100vh",
      //     scrollTrigger: {
      //       trigger: ".three",
      //       start: "top bottom",
      //       end: "top top",
      //       scrub: true,
      //       immediateRender: false,
      //     },
      //   })


    })
    
  }, [])

  return (
    <>
    </>
  );
}
