// core libraries
import React from "react";
import { useDispatch } from "react-redux";

// material ui
import Container from "@material-ui/core/Container";

// components
import Counter from "../components/counter";
import Link from "../components/Link";
import Clock from "../components/clock";
import Clock2 from "../components/clock2";
import { tick } from "../lib/slices/clockSlice";
import { tick2 } from "../lib/slices/clockSlice2";
import useInterval from "../lib/useInterval";

export default function Index() {
  const dispatch = useDispatch();
  // Tick the time every second
  useInterval(() => {
    dispatch(
      tick({
        light: true,
        lastUpdate: Date.now(),
      })
    );
  }, 3000);
  useInterval(() => {
    dispatch(tick2({ light: true, lastUpdate: Date.now() }));
  }, 4000);
  return (
    <Container maxWidth="sm" style={{ backgroundColor: "gray" }}>
      <div style={{ textAlign: "center", fontSize: 25, color: "white" }}>
        Blink Borders shows which area rendered on different state updates
      </div>
      <div style={{ padding: 10 }}>
        <Clock />
        <span style={{ fontSize: 20 }}>each 3000 ms</span>
      </div>
      <div style={{ padding: 10 }}>
        <Clock2 />
        <span style={{ fontSize: 20 }}>each 4000 ms</span>
      </div>
      <Counter />
      <Link
        href="/about"
        color="secondary"
        style={{ textAlign: "center", fontSize: 25, color: "white" }}
      >
        Go to the about page
      </Link>
    </Container>
  );
}
