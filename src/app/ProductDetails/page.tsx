"use client";
import { useRouter } from "next/navigation";
import Layout from "../../components/layout/Layout";
import Link from "next/link";

export default function Home() {
  const router = useRouter(); // Ensure useRouter is used inside the component

  return (
    <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Product Details">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={() => router.back()}
          className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-gray-100 px-4 py-2 rounded"
        >
          ← Back
        </button>
      </div>
      {/* Product Details Start */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                className="w-full rounded-lg"
                src="/assets/images/shop/product-details-img-1.jpg"
                alt="Product"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                Product{" "}
                <span className="text-fixnix-lightpurple p-3 text-md">
                  $46.00
                </span>
              </h3>
              <div className="flex items-center mt-2 space-x-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa fa-star"></i>
                ))}
                <span className="text-gray-600 text-sm">
                  2 customer reviews
                </span>
              </div>
              <p className="mt-4 text-gray-700">
                Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis
                des mauris commodo venenatis ligula commodo leez sed blandit
                convallis dignissim onec vel pellentesque neque.
              </p>
              <p className="mt-2 text-gray-500">
                REF. 4231/406 <br /> Available in store
              </p>

              <div className="mt-4">
                <h3 className="text-lg font-medium">Quantity</h3>
                <div className="flex items-center mt-2">
                  {/* <button className="px-3 py-1 bg-gray-200 rounded-l"><i className="fa fa-minus"></i></button> */}
                  <input
                    type="number"
                    className="w-12 text-center border border-gray-300 "
                  />
                  {/* <button className="px-3 py-1 bg-gray-200 rounded-r"><i className="fa fa-plus"></i></button> */}
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <Link
                  href="/Cart"
                  className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white px-4 py-2 rounded"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Description Start */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold">Description</h3>
          <p className="mt-2 text-gray-600">
            Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
            phaedrum...
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Nam at elit nec
              neque suscipit gravida.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Aenean egestas
              orci eu maximus tincidunt.
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✔</span> Curabitur vel
              turpis id tellus cursus laoreet.
            </li>
          </ul>
        </div>
      </section>

      {/* Reviews Start */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold">2 Reviews</h3>
          {[1, 2].map((review, index) => (
            <div key={index} className="mt-6 p-4 border rounded-lg">
              <div className="flex items-center space-x-4">
                <img
                  src={`/assets/images/shop/review-1-${review}.jpg`}
                  alt="Reviewer"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="font-medium">
                    Reviewer Name{" "}
                    <span className="text-sm text-gray-500">20 July 2023</span>
                  </h4>
                  <div className="flex space-x-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa fa-star"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-2 text-gray-600">
                It has survived not only five centuries, but also the leap into
                electronic typesetting unchanged...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Review Form */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-semibold">Add a Review</h3>
          <div className="mt-4">
            <p className="text-gray-600">Rate this product?</p>
            <div className="flex space-x-1 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="fa fa-star"></i>
              ))}
            </div>
          </div>
          <form className="mt-6 space-y-4">
            <textarea
              className="w-full p-3 border rounded-lg"
              placeholder="Write a comment"
            ></textarea>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full p-3 border rounded-lg"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-full p-3 border rounded-lg"
                type="email"
                placeholder="Email Address"
              />
            </div>
            <button
              type="submit"
              className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white px-4 py-2 rounded"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
