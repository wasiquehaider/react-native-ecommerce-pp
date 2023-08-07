import React from "react";
import { render } from "@testing-library/react-native";
import ProductItem from "../../components/ProductItem/ProductItem";

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
    render(
      <ProductItem
        itemExist={false}
        product={{
          id: 1,
          name: "Test Suit",
          price: 109.95,
          colour: "Black",
          img: "https://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
        }}
      />
    );
  });
});
