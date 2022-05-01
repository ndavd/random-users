import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import NationalityFilter from '../../components/NationalityFilter';
import NameFilter from '../../components/NameFilter';
import UserCounter from '../../components/UserCounter';
import UserList from '../../components/UserList';
import { results } from '../../api';
import { countries } from '../../utils';

const renderApp = async () => {
  const queryClient = new QueryClient();
  render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <NationalityFilter/>
          <NameFilter/>
          <UserCounter/>
          <UserList/>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

describe("Home", () => {

  it("UserList fetches and displays the correct number of users", async () => {
    await renderApp();
    const users = await screen.findAllByTestId("user");

    expect(users.length).toBe(results);
  });

  it("NationalityFilter re-fetches users accordingly", async () => {
    await renderApp();

    const nationalityCheckboxes = screen.getAllByRole("checkbox");

    // Uncheck first nationality checkbox
    fireEvent.click(nationalityCheckboxes[0]);

    // Get all elements with nationality testids except for the ones with the first
    // nationality
    const [, ...rest] = countries;
    const regex = new RegExp(rest.map(e => e.code).join("\|"));
    let users = await screen.findAllByTestId(regex);

    expect(users.length).toBe(results);
  });

  it("NameFilter filters users", async () => {
    await renderApp();

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "alb" } });

    // Using queryAllBy because `users` might be empty, so it would return an
    // error if using findAllBy
    await waitFor(() => {
      const users = screen.queryAllByTestId("user");
      expect(users.length).toBeLessThan(results);
    });

  });

  it("UserCounter displays the number of users", async () => {
    await renderApp();

    const counter = await screen.findByText(new RegExp(`${results} results`));

    expect(counter).toBeInTheDocument();
  });

});
