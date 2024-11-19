import { useEffect } from "react";
import hoverEffect from "hover-effect";
import cloud from "../assets/images/cloud.png";

export const useHoverEffect = (el, img1, img2) => {
  useEffect(() => {
    if (!el?.current) return;

    let hoverEffectInstance;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          hoverEffectInstance = new hoverEffect({
            parent: el.current,
            image1: img1,
            image2: img2,
            displacementImage: cloud,
            intensity: 0.3,
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el.current);

    return () => {
      if (hoverEffectInstance?.scene) {
        hoverEffectInstance.scene.dispose();
      }
      hoverEffectInstance = null;
      observer.disconnect();
    };
  }, [el, img1, img2]);
};