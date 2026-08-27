"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function MaskReveal({
  children,
  delay = 0,
  as = "span",
  className,
}: {
  children: ReactNode;
  delay?: number;
  as?: "span" | "div";
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const Wrapper = as;

  if (reduceMotion) {
    return <Wrapper className={className}>{children}</Wrapper>;
  }

  return (
    <Wrapper className={`block overflow-hidden ${className ?? ""}`}>
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </Wrapper>
  );
}
