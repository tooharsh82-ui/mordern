import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CursorFollower() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for dampened trailing motion
  const springConfig = { damping: 30, stiffness: 250, mass: 0.6 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if touch device
    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Listeners for triggers
    const onMouseEnterLink = () => setIsHovered(true);
    const onMouseLeaveLink = () => setIsHovered(false);

    window.addEventListener("mousemove", moveCursor);

    // Dynamic delegation to catch dynamically rendered elements
    const updateHoverListeners = () => {
      const hoverables = document.querySelectorAll("a, button, [role='button'], .hover-target");
      hoverables.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnterLink);
        el.addEventListener("mouseleave", onMouseLeaveLink);
      });
    };

    // Setup initially and run a periodic sync to handle dynamically generated items
    updateHoverListeners();
    const interval = setInterval(updateHoverListeners, 1500);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clearInterval(interval);
      const hoverables = document.querySelectorAll("a, button, [role='button'], .hover-target");
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Follower Ring */}
      <motion.div
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          borderColor: isHovered ? "#4F7CFF" : "rgba(255, 255, 255, 0.40)",
          borderWidth: isHovered ? "2px" : "1px",
          backgroundColor: isHovered ? "rgba(79, 124, 255, 0.05)" : "transparent",
        }}
        transition={{ type: "tween", duration: 0.15 }}
        className="fixed pointer-events-none z-[9999] rounded-full"
      />

      {/* Center Precision Point */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          x: "-50%",
          y: "-50%",
        }}
        className="fixed w-1.5 h-1.5 bg-primary-txt pointer-events-none z-[9999] rounded-full"
      />
    </>
  );
}
