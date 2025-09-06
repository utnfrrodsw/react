import { useEffect, useState } from "react";

export default function EffectComponent() {
  const [text, setText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setText("Updated!");
    }, 1000);
  }, []);

  return <p role="text">{text}</p>;
}
