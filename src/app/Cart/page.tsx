import Layout from "../../components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Cart">
      {/* Start Cart Page */}
      <section className="relative block bg-white py-[113px] pb-[120px]">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto w-full">
            <table className="w-full min-w-[1170px] border-collapse text-left">
              <thead>
                <tr className="text-[20px] font-bold text-fixnix-darkpurple border-b border-gray-300">
                  <th className="pb-5">Item</th>
                  <th className="pb-5">Price</th>
                  <th className="pb-5">Quantity</th>
                  <th className="pb-5">Total</th>
                  <th className="pb-5 text-right">Remove</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2].map((item, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="flex items-center py-8 space-x-9">
                      <div className="w-[120px] border border-gray-300 overflow-hidden">
                        <img
                          src={`assets/images/shop/cart-page-img-${item}.jpg`}
                          className="w-full"
                          alt="Product Image"
                        />
                      </div>
                      <h3 className="text-[20px] font-bold text-fixnix-darkpurple">
                        <Link href="product-details" className="text-fixnix-lightpurple">
                          {item === 1 ? "Comfy Chair" : "Classic Chair"}
                        </Link>
                      </h3>
                    </td>
                    <td className="text-[18px] text-fixnix-gray">$10.99</td>
                    <td>
                      <div className="relative w-[98px] h-[50px] border border-gray-300 flex items-center">
                        <input
                          type="number"
                          className="w-full h-full px-6 text-[18px] font-bold text-fixnix-gray outline-none border-none"
                        />
                      </div>
                    </td>
                    <td className="text-[18px] text-fixnix-gray">$10.99</td>
                    <td className="text-right">
                      <button className="text-fixnix-darkpurple text-[16px] hover:text-fixnix-lightpuple">
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            <form className="w-full max-w-md">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                className="w-full border border-gray-300 p-4 text-[14px] text-fixnix-gray mb-4"
              />
              <button className="w-full bg-fixnix-lightpurple text-white py-3 hover:bg-fixnix-darkpurple ">
                Apply Coupon
              </button>
            </form>

            <div>
              <ul className="space-y-4 text-[18px] font-medium text-fixnix-gray">
                <li className="flex justify-between">
                  <span className="font-bold text-fixnix-darkpurple">Subtotal</span>
                  <span>$20.98 USD</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-bold text-fixnix-darkpurple">Shipping Cost</span>
                  <span>$0.00 USD</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-bold text-fixnix-darkpurple">Total</span>
                  <span className="text-fixnix-lightpuple font-bold">$20.98 USD</span>
                </li>
              </ul>

              <div className="flex justify-end mt-6 space-x-4">
                <Link href="#" className="px-6 py-3 text-white bg-fixnix-lightpurple hover:bg-fixnix-lightpurple">
                  Update
                </Link>
                <Link href="/Checkout" className="px-6 py-3 text-white bg-fixnix-lightpurple hover:bg-fixnix-darkpurple">
                  Checkout
                </Link>
              </div>
            </div>
          </div>

          {/* Deals Section */}
          <div className="mt-10 p-6 bg-gray-100 rounded-lg">
            <h2 className="text-2xl font-bold text-fixnix-darkpurple mb-4">Special Deals</h2>
            <p className="text-[18px] text-fixnix-gray">Buy 2 items and get a 10% discount on your total purchase!</p>
            <p className="text-[18px] text-fixnix-gray">Discount will be applied automatically at checkout.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
