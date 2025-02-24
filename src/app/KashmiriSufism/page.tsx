import Layout from "../../components/layout/Layout";
import CounterUp from "../../components/elements/CounterUp";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Team"
        headTitle="Our Team"
        wrapperCls="team-page-wrapper"
      >
        {/*Team Top Start*/}
        <section className="team-top">
          <div className="container">
            <div className="section-title section-title--two text-center">
              <span className="section-title__tagline"> Our Heritage</span>
              <h2 className="section-title__title">
                Welcome to the <br /> Kashmir Sufi Science Centre
              </h2>
              <p className="section-title__text">
                {" "}
                a unique institution dedicated to preserving and celebrating the
                profound spiritual, <br /> intellectual, and scientific legacy
                of Kashmir Sufi ideology. This Centre stands as a testament to
                the
                <br /> region’s rich history of Sufi mysticism, its lasting
                impact on the sciences, and its integral
                <br /> role in shaping the cultural and philosophical identity
                of the Kashmir Valley.
              </p>
            </div>
          </div>
        </section>
        {/*Team Top End*/}

        {/*Experience One Start*/}
        <section className="experience-one about-page__experience">
          <div
            className="experience-one-shape-1 shapeMover"
            style={{
              backgroundImage:
                "url(assets/images/shapes/experience-one-shape-1.png)",
            }}
          ></div>
          <div className="container">
            <div className="section-title text-center">
              <span
                className="section-title__tagline "
                style={{ color: "white" }}
              >
                Sufi Science Centre-Kashmir Chapter
              </span>
              <h2 className="section-title__title">
                How Kashmiri Sufism blends cultural heritage,
                <br /> scientific inquiry, and wisdom?
              </h2>
            </div>
            <div className="row">
              {/*Experience One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="experience-one__single">
                  <div className="experience-one__icon">
                    <span className="icon-service"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="services-details">Spiritual Heritage</Link>
                    </h3>
                    <p className="experience-one__text">
                      Kashmiri Sufism preserves timeless teachings of unity,
                      compassion, and cultural richness, shaping regional
                      identity.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Experience One Single End*/}
              {/*Experience One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="experience-one__single">
                  <div className="experience-one__icon">
                    <span className="icon-management"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="team">Mysticism and Science</Link>
                    </h3>
                    <p className="experience-one__text">
                      Sufi scholars explored astronomy, medicine, and nature’s
                      laws, blending divine wisdom with intellectual
                      pursuits.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Experience One Single End*/}
              {/*Experience One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="experience-one__single">
                  <div className="experience-one__icon">
                    <span className="icon-headphones"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="contact">Enduring Influence</Link>
                    </h3>
                    <p className="experience-one__text">
                      Kashmiri Sufi teachings inspire harmony, self-awareness,
                      and a profound balance between spiritual, intellectual,
                      and cultural growth.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Experience One Single End*/}
            </div>
          </div>
        </section>
        {/*Experience One End*/}
        <div className="container">
          <div className="row">
            <div className="col-xl-6 pt-14 col-lg-5">
              <div className="core-services__left">
                <div className="core-services__img">
                  <img
                    src="assets/images/services/core-services-img-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 py-5 col-lg-7">
              <div className="core-services__right">
                <div className="section-title section-title--two text-left">
                  <span className="section-title__tagline">OUR IDENTITY</span>
                  <h2 className="section-title__title">
                    Fusing spirituality, culture, science, and Kashmir’s legacy
                  </h2>
                  <p className="section-title__text">
                    The Kashmiri Sufi Center blends spirituality, culture, and
                    intellectual exploration, rooted in historical heritage. It
                    integrates divine wisdom with scientific curiosity,
                    promoting self-awareness, love, and compassion. Through
                    workshops and research, it preserves Kashmiri Sufi
                    teachings, uniting ancient wisdom with modern understanding.
                  </p>
                </div>
                <ul className="list-unstyled core-services__list">
                  <li>
                    <div className="icon">
                      <span className="icon-checked"></span>
                    </div>
                    <div className="content">
                      <h5>Spiritual Wisdom and Cultural Roots</h5>
                      <p>Kashmiri Sufism blends spirituality with culture.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <span className="icon-repair"></span>
                    </div>
                    <div className="content">
                      <h5>Mystical Science Exploration</h5>
                      <p>Science and mysticism blend in spirituality.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section className="experience-one about-page__experience">
          <div
            className="experience-one-shape-1 shapeMover"
            style={{
              backgroundImage:
                "url(assets/images/shapes/experience-one-shape-1.png)",
            }}
          ></div>
          <div className="container">
            <div className="section-title text-center">
              <span
                className="section-title__tagline "
                style={{ color: "white" }}
              >
                the Intersection of Spirituality and Science
              </span>
              <h2 className="section-title__title">
                Kashmir Sufi Science Centre explores the
                <br /> fusion of spirituality and science
              </h2>
            </div>
            <div className="row">
              {/*Experience One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInLeft"
                data-wow-delay="100ms"
              >
                <div className="experience-one__single">
                  <div className="experience-one__icon">
                    <span className="icon-service"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="services-details">Light and Sound</Link>
                    </h3>
                    <p className="experience-one__text">
                      Sufi mystics explored light, sound, vibration, and cosmic
                      harmony, deeply connecting the spiritual and physical
                      realms together.{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Experience One Single End*/}
              {/*Experience One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="experience-one__single">
                  <div className="experience-one__icon">
                    <span className="icon-management"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="team">Nature's Wisdom</Link>
                    </h3>
                    <p className="experience-one__text">
                      Sufi scholars revered nature’s interconnectedness,
                      promoting ecological balance, sustainability, spiritual
                      principles, harmony, and unity.
                    </p>
                  </div>
                </div>
              </div>
              {/*Experience One Single End*/}
              {/*Experience One Single Start*/}
              <div
                className="col-xl-4 col-lg-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="experience-one__single">
                  <div className="experience-one__icon">
                    <span className="icon-headphones"></span>
                  </div>
                  <div className="experience-one__content">
                    <h3 className="experience-one__title">
                      <Link href="contact">Ethical Science</Link>
                    </h3>
                    <p className="experience-one__text">
                      Sufi ethics guided scientific pursuits, ensuring
                      integrity, truth, humanity’s welfare, and responsible
                      exploration in knowledge{" "}
                    </p>
                  </div>
                </div>
              </div>
              {/*Experience One Single End*/}
            </div>
          </div>
        </section>

        {/*Team One Start*/}
        <section className="team-one">
          <div className="container">
            <div className="row">
              {/*Team One Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/team/team3.jpg" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link href="team">Lala Aragami</Link>
                      </h3>
                      <p className="team-one__sub-title">Saint of Kashmir</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Team One Single End*/}
              {/*Team One Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/team/team4.jpg" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link href="team">Shamas Faqir</Link>
                      </h3>
                      <p className="team-one__sub-title">Digital Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Team One Single End*/}
              {/*Team One Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/team/team6.jpg" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link href="team">Lal Ded</Link>
                      </h3>
                      <p className="team-one__sub-title">Master Technician</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Team One Single End*/}
              {/*Team One Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/team/team8.jpg" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link href="team">Wahab Khar</Link>
                      </h3>
                      <p className="team-one__sub-title">Master Technician</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Team One Single End*/}
              {/*Team One Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/team/team-1-5.jpg" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link href="team">Nicolas Poran</Link>
                      </h3>
                      <p className="team-one__sub-title">Digital Marketing</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Team One Single End*/}
              {/*Team One Single Start*/}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="team-one__single">
                  <div className="team-one__img-box">
                    <div className="team-one__img">
                      <img src="assets/images/team/team-1-6.jpg" alt="" />
                    </div>
                    <div className="team-one__content">
                      <h3 className="team-one__name">
                        <Link href="team">Hasibur Nico</Link>
                      </h3>
                      <p className="team-one__sub-title">Master Technician</p>
                    </div>
                  </div>
                </div>
              </div>
              {/*Team One Single End*/}
            </div>
          </div>
        </section>
        {/*Team One End*/}
      </Layout>
    </>
  );
}
