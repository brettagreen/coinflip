import { render } from "@testing-library/react";
import Coin from './Coin';

it("renders without crashing", function() {
    render(<Coin side={null} />);
});

it("matches snapshot", function() {
    const {asFragment} = render(<Coin side={null} />);
    expect(asFragment()).toMatchSnapshot();
});

it("shows heads", function() {
    const { getByAltText, queryByAltText } = render(<Coin side="heads"/>);
    expect(getByAltText("heads")).toBeInTheDocument();
    expect(queryByAltText("tails")).not.toBeInTheDocument();
});

it("shows tails", function() {
    const { getByAltText, queryByAltText } = render(<Coin side="tails"/>);
    expect(getByAltText("tails")).toBeInTheDocument();
    expect(queryByAltText("heads")).not.toBeInTheDocument();
})