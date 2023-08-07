import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import Button from "../../components/Button/Button";

describe("Button", () => {
  test("should show the title", () => {
    const { getByText } = render(
      <Button title={"test"} onPress={() => console.log("test")} />
    );
    const el = getByText("test");
    expect(el).toBeTruthy();
  });

  test("should calls onPress when pressed", () => {
    const onPress = jest.fn();
    const { debug, getByText } = render(
      <Button title={"button"} onPress={onPress} />
    );
    debug();
    const button = getByText("button");
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalled();
  });
  test("should emit click event correctly", () => {
    const onPress = jest.fn();
    const { debug, getByText } = render(
      <Button title={"button"} onPress={onPress} />
    );
    debug();
    const button = getByText("button");
    act(() => {
      fireEvent.press(button);
      expect(onPress).toHaveBeenCalledTimes(1);
    });
  });
});
