import Layout from "@/components/layout/Layout";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Banner from "@/components/sections/home3/Banner";


export default function Home() {
    return (
       <Layout headerStyle={2} footerStyle={1}>
            <Banner></Banner>
             {/* Page Title */}
             <div className="flex justify-center items-center text-center  mt-8 mb-6">
                <span className="relative inline-block text-[16px] leading-[16px] text-fixnix-lightpurple font-semibold uppercase z-[1]">
                    Art & Wall Decor   
                    <span className="absolute top-[6px] left-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                    <span className="absolute top-[6px] right-[-56px] w-[40px] h-[2px] bg-fixnix-lightpurple"></span>
                </span>
            </div>
           
            {/* Product Start */}
                        

            <section className="py-12">
                
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Sidebar */}
                        <div className="md:col-span-1 space-y-6">
                        <div className="p-4 border rounded-lg  bg-fixnix-lightpurple shadow-sm relative">
                        <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-full p-2 pr-10  border rounded-lg bg-fixnix-lightpurple "
                        />
                         <i className="fa fa-search absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-100"></i>
</div>

                            <div className="p-4 border rounded-lg bg-gray-100 shadow-sm">
                                <h3 className="font-semibold mb-2">Price</h3>
                                <div className="flex items-center space-x-2">
                                    <input type="text" className="w-16 p-1 border rounded-lg text-center" />
                                    <span>-</span>
                                    <input type="text" className="w-16 p-1 border rounded-lg text-center" />
                                    <button className="px-3 py-1 bg-fixnix-lightpurple text-white rounded-lg">Go</button>
                                </div>
                            </div>
                            <div className="p-4 border rounded-lg bg-gray-100 shadow-sm">
                                <h3 className="font-semibold mb-2">Categories</h3>
                                <ul className="space-y-2">
                                    
                                    <li><Link href="Jewelry&Accessories" className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple">Jewelry & Accessories</Link></li>
                                    <li className="font-bold hover:text-fixnix-darkpurple"><Link href="/Art&WallDecor">Art & Wall Decor</Link></li>
                                    <li><Link href="#" className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple">Home & Living</Link></li>
                                    <li><Link href="#" className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple">Fashion & Apparel</Link></li>
                                    <li><Link href="#" className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple">Wellness & Meditation</Link></li>
                                    <li><Link href="#" className="text-fixnix-lightpurple font-semibold hover:underline hover:text-fixnix-darkpurple">Music & Sound</Link></li>
                                </ul>
                            </div>
                        </div>
                        {/* Products */}
                        <div className="md:col-span-3">
                            <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-2 md:space-y-0">
                                <p>Showing 1–9 of 12 results</p>
                                <select className="p-2 border bg-gray-100 rounded-lg">
                                    <option className="hover:bg-fixnix-lightpurple">Sort by popular</option>
                                    <option>Sort by Price</option>
                                    <option>Sort by Ratings</option>
                                </select>
                            </div>
                            <div className="grid grid-cols-1  shadow-sm sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Product Card */}
                                {[...Array(9)].map((_, i) => (
                                    <div key={i} className="border shadow-light-purple  rounded-lg   p-4"
                                    style={{ boxShadow: "fixnix-lightpurple" }} // Light purple shadow
                                    >
                                        <div className="overflow-hidden rounded-lg">
                                            <img src={`/assets/images/shop/produc${i + 1}.jpg`} alt="Product" className="w-full h-48 object-cover hover:scale-125" />
                                        </div>
                                        <div className="mt-4 text-center">
                                            <div className="text-yellow-500">
                                                {[...Array(5)].map((_, j) => (
                                                    <i key={j} className="fa fa-star"></i>
                                                ))}
                                            </div>
                                            <h4 className="mt-2 font-semibold "><Link href="product-details" className="text-fixnix-darkpurple">Product {i + 1}</Link></h4>
                                            <p className="text-lg font-bold text-gray-600">${(i + 1) * 10 + 20}.00</p>
                                            <div className="mt-3">
                                                <Link href="/ProductDetails" className="bg-fixnix-lightpurple hover:bg-fixnix-darkpurple text-white px-4 py-2 rounded-lg">View Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product End */}
        </Layout>
    );
}
