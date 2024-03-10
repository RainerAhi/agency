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
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })

        // FOUR TO FIVE

        .to(".two-expanding", {
          width: "70rem",
          height: "75%",
            scrollTrigger: {
              trigger: ".four",
              start: "top bottom",
              end: "top top",
              scrub: true,
              immediateRender: false,
            },
          })

          .to(".two-expanding", {
              scrollTrigger: {
                trigger: ".four",
                start: "top center",
                end: "bottom top",
                scrub: true,
                immediateRender: false,
              },
            })


    })
    
  }, [])

  return (
    <>
    </>
  );
}
