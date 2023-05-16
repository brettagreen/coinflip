import { render, fireEvent } from "@testing-library/react";
import Container from './Container';

it("renders without crashing", function() {
    render(<Container />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Container />);
    expect(asFragment()).toMatchSnapshot();
});

it("doesn't show coin image on page load, shows thereafter", function() {
    const { queryByTestId, getByText } = render(<Container />);
    expect(queryByTestId("coin")).not.toBeInTheDocument();

    const button = getByText("fliiiipppp meeeee");
    fireEvent.click(button);
    expect(queryByTestId("coin")).toBeInTheDocument();
});

describe("flip the coin a few times", function () {
    beforeEach(function() {
        jest
          .spyOn(Math, "random")
          .mockReturnValueOnce(0.25) //return tails
          .mockReturnValueOnce(0.75); //return heads
      });
      
      afterEach(function() {
        Math.random.mockRestore();
      });
    
    it("keeps tally of heads and tails correctly", function() {
        const { getByTestId, getByText } = render(<Container />);
        const score = getByTestId("score");
        expect(score).toHaveTextContent("Out of 0 flips, you have 0 heads and 0 tails");

        const button = getByText("fliiiipppp meeeee");
        fireEvent.click(button);
        expect(score).toHaveTextContent("Out of 1 flips, you have 0 heads and 1 tails");
        fireEvent.click(button);
        expect(score).toHaveTextContent("Out of 2 flips, you have 1 heads and 1 tails");
    });
});