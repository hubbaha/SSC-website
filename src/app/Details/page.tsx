import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="How To Fix Broken Back Glass On Your Phone"
      >
        {/*Blog Details Two Start*/}
        <section className="relative block bg-[var(--fixnix-primary)]">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="relative block bg-white mx-4 rounded-lg py-28 mt-[-110px] z-10">
                  <div className="relative block text-center">
                    <h3 className="text-6xl font-bold leading-[70px] mt-24">
                      Mystical Cosmology<br/> Mapping Divine Reality
                      <p className="text-center text-[var(--fixnix-lightpurple)] text-[25px] font-normal px-4">The divine architecture of existence and its unfolding from unity to multiplicity.</p>
                    </h3>
                    <ul className="relative block mt-6 list-unstyled">
                      <li className="flex items-center justify-center">
                        <Link href="#" className="font-semibold uppercase text-[var(--fixnix-gray)] transition duration-500 hover:text-[var(--fixnix-lightpuple)]">
                          <i className="fa fa-user text-[var(--fixnix-lightpuple)] mr-2.5"></i>John Doe
                        </Link>
                        <Link href="#" className="font-semibold uppercase text-[var(--fixnix-gray)] ml-4 transition duration-500 hover:text-[var(--fixnix-lightpuple)]">
                          <i className="fa fa-calendar-alt text-[var(--fixnix-lightpuple)] mr-2.5"></i>5 AUG 2023
                        </Link>
                        <Link href="#" className="font-semibold uppercase text-[var(--fixnix-gray)] ml-4 transition duration-500 hover:text-[var(--fixnix-lightpuple)]">
                          <i className="far fa-comments text-[var(--fixnix-lightpuple)] mr-2.5"></i>02 COMMENTS
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="relative block max-w-[630px] px-4 mx-auto mt-24">
                    {/* <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary,{" "}
                    </p>
                    <p className="mt-7 mb-6">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters,
                    </p>
                    <p className="font-bold text-[var(--fixnix-darkpurple)] italic">
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore fugiat nulla pariatur. Excepteur sint
                      occaecat cupidatat non proident, sunt in culpa qui officia
                      deserunt mollit anim id est laborum.{" "}
                    </p> */}
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                      Our Personal Approach
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,{" "}
                    </p>
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit on esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                        Markon Deo
                      </p>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                      Our Personal Approach
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,{" "}
                    </p>
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit on esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                        Markon Deo
                      </p>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                      Our Personal Approach
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,{" "}
                    </p>
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit on esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                        Markon Deo
                      </p>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                      Our Personal Approach
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,{" "}
                    </p>
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit on esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                        Markon Deo
                      </p>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                      Our Personal Approach
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,{" "}
                    </p>
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit on esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                        Markon Deo
                      </p>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                      Our Personal Approach
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,{" "}
                    </p>
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit on esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                        Markon Deo
                      </p>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                      Our Personal Approach
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,{" "}
                    </p>
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit on esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                        Markon Deo
                      </p>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                      Our Personal Approach
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,{" "}
                    </p>
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit on esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                        Markon Deo
                      </p>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                      Our Personal Approach
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,{" "}
                    </p>
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit on esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                        Markon Deo
                      </p>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                    <h3 className="text-2xl font-semibold leading-6 mt-14 mb-6">
                      Our Personal Approach
                    </h3>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,{" "}
                    </p>
                    <div className="relative block bg-[var(--fixnix-primary)] py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']">
                      <p className="text-xl leading-7 text-[var(--fixnix-darkpurple)]">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit on esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident,
                      </p>
                      <p className="relative inline-block text-xl leading-7 text-[var(--fixnix-darkpurple)] mt-4 ml-14 before:content-[''] before:absolute before:h-0.5 before:w-10 before:top-3.5 before:left-[-54px] before:bg-[var(--fixnix-lightpuple)]">
                        Markon Deo
                      </p>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                  </div>
                  <div className="relative block  py-6 px-10 mt-8 mb-6 before:absolute before:left-0 before:right-0 before:top-0 before:h-1.5 before:bg-[var(--fixnix-lightpuple)] before:rounded-md before:content-['']"></div>

              
                  
                  <div className="relative block  mt-5 mx-3">
                    <h3 className="text-2xl font-semibold leading-6">
                    Core Concept
                    </h3>
                    <p className="mt-7 mb-7">
                    Mystical Cosmology reveals how the cosmos emanates from the singular Divine Essence and unfolds through successive realms of being. This science maps the journey from absolute unity to manifest multiplicity, showing how each level of reality maintains its connection to the source while expressing unique qualities. The human being stands as a meeting point of all realms, containing within their consciousness the entirety of creation in microcosmic form.
                    </p>
                   
                    <h3 className="text-2xl font-semibold leading-6">
                    Key Concepts
                    </h3>
                    <p className="mt-7 mb-6">
                   <ul className="list-disc list-inside marker:text-xl marker:text-fixnix-lightpurple">
                  <li>Creation emanates from a single divine source through successive levels</li>
                  <li>Each realm of existence reflects divine attributes in different densities</li>
                  <li>The human being is a comprehensive microcosm of all creation</li>
                  <li>Visible reality emerges from and returns to invisible principles</li>
                  <li>Divine names function as creative forces shaping all levels of reality</li>
                  </ul>
                  </p>
                  <h3 className="text-2xl font-semibold leading-6">
                  Practical Applications
                    </h3>
                    <p className="mt-7 mb-6">
                   <ul className="list-disc list-inside marker:text-xl marker:text-fixnix-lightpurple">
                  <li >Contemplative practices for perceiving the multiple dimensions of reality</li>
                  <li>Recognition of divine presence within all creation</li>
                  <li>Understanding the human being's unique position in the cosmic order</li>
                  <li>Reading the "book of nature" as divine self-disclosure</li>
                  <li>Aligning personal spiritual practice with cosmic patterns</li>
                  </ul>
                  </p>
                  <h3 className="text-2xl font-semibold leading-6">
                  For New Sufi Students
                    </h3>
                    <p className="mt-7 mb-7">
                    Begin by studying Ibn Arabi's concept of the "Five Divine Presences" as explained in simplified form by scholars like William Chittick. Contemplate Rumi's metaphor of the world as a divine mirror in the Masnavi. Practice the basic cosmological meditation taught by Shaykh Muzaffer Ozak where one visualizes concentric circles of creation emanating from a central divine point. As Imam Al-Ghazali advises in his "Revival of Religious Sciences," start by observing how everyday objects reflect divine attributes.
                    </p>
                    <h3 className="text-2xl font-semibold leading-6">
                    For Mature Sufi Practitioners
                    </h3>
                    <p className="mt-7 mb-7">
                    Explore the detailed cosmological framework presented in Ibn Arabi's "Meccan Revelations," particularly his concept of the Perfect Human (al-insan al-kamil). Work with Abdul Karim al-Jili's advanced practices for perceiving the interpenetration of divine names in all levels of reality as outlined in "Universal Man." Study Mahmud Shabistari's "Secret Garden" for techniques to perceive the unity underlying multiplicity. As Shaykh Ibn 'Ata'illah recommends in his "Hikam," develop the capacity to witness the divine hand in every movement of creation.
                    </p>
                    
                  </div>
                  
                  <div className="relative block  px-5 ">
                    
                    
                    <div className="blog-details__social-list">
                      <span>Share This :</span>
                      <div className="blog-details__social">
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                        <Link href="#">
                          <i className="fab fa-instagram"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Blog Details Two End*/}
      </Layout>
    </>
  );
}