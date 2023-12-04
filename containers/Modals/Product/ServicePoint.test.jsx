import { StoreProvider } from "@/stores/store-provider";
import ServicePoint from './ServicePoint'
import "@testing-library/jest-dom";
import user from '@testing-library/user-event';
import { render, screen, fireEvent } from "@testing-library/react";


jest.mock("swiper/react", () => ({
    Swiper: () => (
        <div>{children}</div>
    ),
    SwiperSlide: () => (
        <div>{children}</div>
    ),
    useSwiper: () => ({
        swiper: {
            slideNext: () => { },
        },
    }),
}));

jest.mock("swiper", () => ({
    default: jest.fn(),
    Thumbs: jest.fn()
}));

describe("Service Point Form", () => {
    it("render a form elements", async () => {
        await render(<StoreProvider><ServicePoint /></StoreProvider>)

        // const testIdList = ["cities", "towns", "companyName", "fullname", "telephone", "email", "vehicleCount", "plates"];
        const form = screen.getByTestId('form');
        const city = screen.getByRole('combobox', { name: /Şehir seçiniz/i });
        const towns = screen.getByRole('combobox', { name: /İlçe seçiniz/i });
        const companyName = screen.getByTestId("companyName");
        const fullname = screen.getByTestId("fullname");
        const telephone = screen.getByTestId("telephone");
        const email = screen.getByTestId("email");
        const vehicleCount = screen.getByTestId("vehicleCount");
        const plates = screen.getByRole('combobox', { name: /Plakaları Giriniz/i });
        const button = screen.getByRole('button', { name: /sorgula/i });
        


        await fireEvent.change(city, { target: { value: "İstanbul" } });
        await fireEvent.change(towns, { target: { value: "Bağcılar" } });
        await fireEvent.change(companyName, { target: { value: "Turkcell" } });
        await fireEvent.change(fullname, { target: { value: "Doğukan Kol" } });
        await fireEvent.change(telephone, { target: { value: "0533 333 33 33" } });
        await fireEvent.change(email, { target: { value: "test@test.com" } });
        await fireEvent.change(vehicleCount, { target: { value: "5" } });
        await fireEvent.change(plates, { target: { value: (["34AA34", "34AB34", "34AC34"]) } });

        expect(city).toHaveValue("İstanbul");
        expect(towns).toHaveValue("Bağcılar");
        expect(companyName).toHaveValue("Turkcell");
        expect(fullname).toHaveValue("Doğukan Kol");
        expect(telephone).toHaveValue("0533 333 33 33");
        expect(email).toHaveValue("test@test.com");
        expect(vehicleCount).toHaveValue("5");
        expect(plates).toHaveValue(["34AA34", "34AB34", "34AC34"].toString());

        await user.click(button);

    })
});
