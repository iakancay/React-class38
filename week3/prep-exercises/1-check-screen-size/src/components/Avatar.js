import { BigHead } from "@bigheads/core";
import React, { useEffect, useState } from "react";
import { useWindowSize } from "../hooks/useWindowSize";

export default function Avatar() {
  const { innerWidth } = useWindowSize();
  return (
    <div className="avatar">
      <BigHead />
      <h3>{innerWidth}</h3>
    </div>
  );
}
