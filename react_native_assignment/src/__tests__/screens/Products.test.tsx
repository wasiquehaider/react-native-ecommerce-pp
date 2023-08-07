import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import ProductsList from "../../screens/Products/Products";

const mockedDispatch = jest.fn();

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: mockedDispatch,
    }),
  };
});
describe("ProductItem", () => {
  test("should render the component", () => {
    render(<ProductsList />);
  });
});
