import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot, } from 'recoil';
import NameFilter from '../NameFilter';

const renderInput = (): HTMLInputElement => {
  render(
    <RecoilRoot>
      <NameFilter/>
    </RecoilRoot>
  );

  return screen.getByRole("textbox");
}

describe("NameFilter", () => {

  it("starts with empty string", () => {
    const input = renderInput();
    expect(input.value).toBe("");
  });

  it("updates accordingly to user input", () => {
    const input = renderInput();
    fireEvent.change(input, { target: { value: "foo" } });

    expect(input.value).toBe("foo");
  });

});
