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
                    <p>
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
                  <div className="relative block mt-14 mb-6">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="relative block mb-8">
                          <div className="relative block">
                            <img
                              src="assets/images/blog/blog-details-2-1.jpg"
                              alt=""
                              className="w-full rounded-tr-lg rounded-br-lg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6">
                        <div className="relative block mb-8">
                          <div className="relative block">
                            <img
                              src="assets/images/blog/blog-details-2-2.jpg"
                              alt=""
                              className="w-full rounded-tl-lg rounded-bl-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative block max-w-[630px] px-4 mx-auto">
                    <h3 className="text-2xl font-semibold leading-6">
                      Keep Your Battery Health 100%
                    </h3>
                    <p className="mt-7 mb-7">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo.{" "}
                    </p>
                    <p className="mt-6 mb-14">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,{" "}
                    </p>
                    <h3 className="text-2xl font-semibold leading-6">
                      Choose The Right Case Guard
                    </h3>
                    <p className="mt-7 mb-6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the, printer took a galley
                      of type and scrambled it to make a type specimen book. It
                      has survived not only five centuries,
                    </p>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem laudantium, totam rem aperiam, eaque ipsa quae
                      ab illo inventore veritatis et quasi architecto beatae
                      vitae dicta sunt explicabo.
                    </p>
                    <p className="mt-6 mb-14">
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut fugit, sed quia consequuntur magni dolores
                      eos qui ratione voluptatem sequi nesciunt. Neque porro
                      quisquam est, qui dolorem ipsum quia dolor sit amet,
                    </p>
                  </div>
                  <div className="relative block">
                    <div className="relative block before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[var(--fixnix-darkpurple)] before:opacity-30">
                      <img
                        src="assets/images/blog/blog-details-2-3.jpg"
                        alt=""
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="relative block max-w-[630px] px-4 mx-auto">
                    <p className="mt-14 mb-8">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary,
                    </p>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters,
                    </p>
                    <p className="mt-14">
                      <span>Tags:</span>
                      <Link href="#">Gadget Repair</Link>
                      <Link href="#">Smartphone</Link>
                    </p>
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
                    <div className="block-details__pre-next-btn">
                      <div className="block-details__pre-btn">
                        <Link href="#">
                          <span className="icon-double-chevron"></span>Previous
                        </Link>
                      </div>
                      <div className="block-details__next-btn">
                        <Link href="#">
                          Next<span className="icon-double-chevron-1"></span>
                        </Link>
                      </div>
                    </div>
                    <div className="author">
                      <div className="author__img">
                        <img src="assets/images/blog/author-img.jpg" alt="" />
                      </div>
                      <div className="author__content">
                        <div className="author__name">
                          <h4>Hasnat Jion</h4>
                          <p>About Author</p>
                        </div>
                        <p>
                          Duis aute irure dolor in reprehenderit in voluptate
                          velit esse cillum dolore eu fugiat nulla pariatur.
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa
                        </p>
                        <div className="author__social">
                          <Link href="#">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-twitter"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-instagram"></i>
                          </Link>
                          <Link href="#">
                            <i className="fab fa-dribbble"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="comment-one">
                      <h3 className="comment-one__title">2 comments</h3>
                      <div className="comment-one__single">
                        <div className="comment-one__image">
                          <img
                            src="assets/images/blog/comment-1-1.jpg"
                            alt=""
                          />
                        </div>
                        <div className="comment-one__content">
                          <p className="comment-one__date">
                            Aug 10, 2023 at 11:29 am
                          </p>
                          <h3>Shinur Katun</h3>
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla
                            pariatur.{" "}
                          </p>
                          <Link href="#" className="thm-btn comment-one__btn">
                            Reply<span className="icon-double-chevron-1"></span>
                          </Link>
                        </div>
                      </div>
                      <div className="comment-one__single">
                        <div className="comment-one__image">
                          <img
                            src="assets/images/blog/comment-1-2.jpg"
                            alt=""
                          />
                        </div>
                        <div className="comment-one__content">
                          <p className="comment-one__date">
                            Aug 10, 2023 at 11:29 am
                          </p>
                          <h3>Michael Douglas</h3>
                          <p>
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla
                            pariatur.{" "}
                          </p>
                          <Link href="#" className="thm-btn comment-one__btn">
                            Reply<span className="icon-double-chevron-1"></span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="comment-form">
                      <h3 className="comment-form__title">Leave a comment</h3>
                      <form
                        action="assets/inc/sendemail.php"
                        className="comment-one__form contact-form-validated"
                      >
                        <div className="row">
                          <div className="col-xl-6">
                            <div className="comment-form__input-box">
                              <input
                                type="text"
                                placeholder="Name"
                                name="name"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6">
                            <div className="comment-form__input-box">
                              <input
                                type="email"
                                placeholder="Email"
                                name="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xl-12">
                            <div className="comment-form__input-box text-message-box">
                              <textarea
                                name="message"
                                placeholder="Write your comment here..."
                              ></textarea>
                            </div>
                            <div className="comment-form__btn-box">
                              <button
                                type="submit"
                                className="thm-btn comment-form__btn"
                              >
                                Leave a Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
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