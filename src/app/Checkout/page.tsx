import Layout from "@/components/layout/Layout";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Checkout">
        {/*Start Checkout Page*/}
        <section className="checkout-page py-[110px] pb-[120px]">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6">
                <div className="billing_details">
                  <div className="billing_title mb-[35px]">
                    <p className="text-base">
                      Returning Customer?{" "}
                      <span>
                        <Link
                          href="/Login"
                          className="text-fixnix-lightpurple hover:text-fixnix-darkpurple"
                        >
                          Click here to Login
                        </Link>
                      </span>{" "}
                    </p>
                    <h2 className="text-[30px] leading-[30px] font-semibold mt-[16px] text-fixnix-darkpurple ">
                      Billing details
                    </h2>
                  </div>
                  <form className="billing_details_form">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="billing_input_box mb-[20px]">
                          <div className="select-box">
                            <select className="w-full bg-[#F3F3F3] border-none py-[15px] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal">
                              <option data-display="Select a country">
                                Select a country
                              </option>
                              <option value="1">Canada</option>
                              <option value="2">England</option>
                              <option value="3">Australia</option>
                              <option value="3">USA</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row bs-gutter-x-20">
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="first_name"
                            placeholder="First name"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="last_name"
                            placeholder="Last name"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="company_name"
                            placeholder="Company"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="Address"
                            placeholder="Address"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="company_name"
                            placeholder="Appartment, unit, etc. (optional)"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="Town/City"
                            placeholder="Town / City"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row bs-gutter-x-20">
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="State"
                            placeholder="State"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            name="form_zip"
                            type="text"
                            pattern="[0-9]*"
                            placeholder="Zip code"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="tel"
                            name="form_phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Phone"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="checked-box mt-[-4px]">
                          <label className="pl-[30px] cursor-pointer text-[#707070] text-[16px] leading-[26px] font-normal">
                            <span>
                              <Link
                                href="/Register"
                                className="text-fixnix-lightpurple font-semibold"
                              >
                                Create an account?
                              </Link>
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-xl-6 col-lg-6">
                <div className="billing_details ship_different_address">
                  <div className="billing_title ship_different_address_title mt-[40px]">
                    <h2 className="text-[30px] leading-[30px] font-semibold text-fixnix-darkpurple mb-[35px]">
                      <span className="text-fixnix-darkpurple">
                        Ship to a different address
                      </span>
                    </h2>
                  </div>
                  <form className="billing_details_form ship_different_address_form">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="billing_input_box mb-[20px]">
                          <div className="select-box">
                            <select className="w-full bg-[#F3F3F3] border-none py-[15px] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal">
                              <option data-display="Select a country">
                                Select a country
                              </option>
                              <option value="1">Canada</option>
                              <option value="2">England</option>
                              <option value="3">Australia</option>
                              <option value="3">USA</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row bs-gutter-x-20">
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="first_name"
                            placeholder="First name"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="last_name"
                            placeholder="Last name"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="company_name"
                            placeholder="Company"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="Address"
                            placeholder="Address"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="company_name"
                            placeholder="Appartment, unit, etc. (optional)"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-12">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="Town/City"
                            placeholder="Town / City"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row bs-gutter-x-20">
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="text"
                            name="State"
                            placeholder="State"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            name="form_zip"
                            type="text"
                            pattern="[0-9]*"
                            placeholder="Zip code"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="billing_input_box mb-[20px]">
                          <input
                            type="tel"
                            name="form_phone"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            placeholder="Phone"
                            className="w-full h-[60px] bg-[#F3F3F3] pl-[30px] pr-[30px] text-[#707070] text-[14px] font-normal"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="ship_different_input mb-[20px]">
                          <textarea
                            placeholder="Notes about order"
                            name="form_order_notes"
                            className="w-full h-[80px] bg-[#F3F3F3] pl-[30px] pr-[30px]  text-[#707070] text-[14px] font-normal"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="your_order mt-[56px]">
              <h2 className="text-[30px] leading-[30px] font-semibold mb-[36px]">
                Your order
              </h2>
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="order_table_box w-full border-b border-[#E0E0E3] pb-[24px]">
                    <table className="order_table_detail w-full">
                      <thead className="order_table_head border-t border-[#E0E0E3]">
                        <tr>
                          <th className="text-fixnix-lightpurple text-[20px] font-bold pr-[23px]">
                            Product
                          </th>
                          <th className="text-right text-fixnix-lightpurple text-[20px] font-bold p-[23px]">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="pro__title text-[#707070] text-[16px]">
                            Product Name
                          </td>
                          <td className="pro__price text-right text-[#707070] text-[16px]">
                            $10.99 USD
                          </td>
                        </tr>
                        <tr>
                          <td className="pro__title text-[#707070] text-[16px]">
                            Subtotal
                          </td>
                          <td className="pro__price text-right text-[#707070] text-[16px]">
                            $10.99 USD
                          </td>
                        </tr>
                        <tr>
                          <td className="pro__title text-[#707070] text-[16px]">
                            Shipping
                          </td>
                          <td className="pro__price text-right text-[#707070] text-[16px]">
                            $0.00 USD
                          </td>
                        </tr>
                        <tr>
                          <td className="pro__title text-[#707070] text-[16px]">
                            Total
                          </td>
                          <td className="pro__price text-right text-[#707070] text-[16px]">
                            $20.98 USD
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="checkout__payment bg-[#F3F3F3] py-[49px] px-[50px] mb-[30px]">
                    <div className="checkout__payment__item checkout__payment__item--active mb-[41px]">
                      <label className="checkout__payment__title flex items-center text-fixnix-lightpurple text-[18px] font-semibold mb-[27px] cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bankTransfer"
                          className="mr-2"
                        />
                        Direct bank transfer
                      </label>
                      <div className="checkout__payment__content text-[#707070] text-[16px] leading-[30px]">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won't be shipped until the funds have cleared.
                      </div>
                    </div>

                    <div className="checkout__payment__item mb-[41px]">
                      <label className="checkout__payment__title flex items-center text-fixnix-lightpurple text-[18px] font-semibold mb-[27px] cursor-pointer">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="paypal"
                          className="mr-2"
                        />
                        Paypal payment
                        <img
                          className="ml-[15px]"
                          src="assets/images/shop/paypal-1.jpg"
                          alt=""
                        />
                      </label>
                      <div className="checkout__payment__content text-[#707070] text-[16px] leading-[30px]">
                        Make your payment directly into our bank account. Please
                        use your Order ID as the payment reference. Your order
                        won't be shipped until the funds have cleared.
                      </div>
                    </div>
                  </div>

                  <div className="payment_button mt-[20px]">
                    <Link href="/thankyou" legacyBehavior>
                      <a className="btn text-[#ffffff] text-[16px] font-medium rounded-full py-[12px] px-[30px] bg-fixnix-lightpurple hover:bg-fixnix-darkpurple hover:text-white w-full">
                        Proceed to checkout
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Checkout Page*/}
      </Layout>
    </>
  );
}
