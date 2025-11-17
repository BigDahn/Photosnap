"use client";
import dynamic from "next/dynamic";

const Modal = dynamic(() => import("../_ui/Modal").then((m) => m.Modal), {
  ssr: false,
});

export default function Provider({ children }) {
  return <Modal>{children}</Modal>;
}
