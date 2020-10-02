import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)
    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/last Name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const checkoutButton = screen.getByRole("button", {name:/Checkout/i});


    fireEvent.change(firstNameInput, {target:{name:'firstName', value: 'sofia'}})
    fireEvent.change(lastNameInput, {target:{name:'lastName', value: 'Luna'}})
    fireEvent.change(addressInput, {target:{name:'address', value: '12 Main ST'}})
    fireEvent.change(cityInput, {target:{name:'city', value: 'New York City'}})
    fireEvent.change(stateInput, {target:{name:'state', value: 'state'}})
    fireEvent.change(zipInput, {target:{name:'zip', value: '111002'}})

    fireEvent.click(checkoutButton);


    screen.debug();

    await waitFor(() => {
        const name = screen.getByText(/sofia/i)
        expect(name).toBeInTheDocument();

        const lastName = screen.getByText(/luna/i)
        expect(lastName).toBeTruthy();

        const address = screen.getByText(/12 Main ST/i)
        expect(address).toBeTruthy();

        const city = screen.getByText(/New York City/i)
        expect(city).toBeTruthy();

        const state = screen.getByText(/New York/i)
        expect(state).toBeTruthy();

        const zip = screen.getByText(/111002/i)
        expect(zip).toBeTruthy();
    })


});
