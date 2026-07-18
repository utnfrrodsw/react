import { describe, it, expect, beforeEach } from "@jest/globals";
import { useCounterStore } from "./counterStore";

describe("useCounterStore", () => {
  beforeEach(() => {
    useCounterStore.setState({ count: 0 });
  });

  it("should have initial count of 0", () => {
    const { count } = useCounterStore.getState();
    expect(count).toBe(0);
  });

  it("should increment count", () => {
    useCounterStore.getState().increment();
    expect(useCounterStore.getState().count).toBe(1);
  });

  it("should decrement count", () => {
    useCounterStore.getState().decrement();
    expect(useCounterStore.getState().count).toBe(-1);
  });

  it("should reset count to 0", () => {
    useCounterStore.setState({ count: 42 });
    useCounterStore.getState().reset();
    expect(useCounterStore.getState().count).toBe(0);
  });
});
