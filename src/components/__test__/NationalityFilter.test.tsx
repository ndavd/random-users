import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot, } from 'recoil';
import NationalityFilter from '../NationalityFilter';
import { countries } from '../../utils';

const renderCheckboxes = (): HTMLInputElement[] => {
  render(
    <RecoilRoot>
      <NationalityFilter/>
    </RecoilRoot>
  );

  return screen.queryAllByRole("checkbox");
}

describe("NationalityFilter", () => {

  it("displays all nationalities", () => {
    const checkboxes = renderCheckboxes();

    expect(checkboxes.length).toBe(countries.length);
  });

  it("all checkboxes are checked by default", () => {
    const checkboxes = renderCheckboxes();

    checkboxes.forEach(e =>
      expect(e).toBeChecked()
    );
  });

  it("at least one checkbox is always checked", () => {
    const checkboxes = renderCheckboxes();

    checkboxes.forEach(a => fireEvent.click(a));
    const checkCount = checkboxes.reduce((a, b) => (b.checked)?(a + 1):a, 0);

    expect(checkCount).toBe(1);
  });

});
