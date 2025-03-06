import Link from "next/link";

export default function Features() {
  return (
    <>
      {/*Feature One Start*/}
      <section className="feature-one">
      <div className="text-left mb-3 -mt-24">
      <h2 className="text-3xl font-bold mb-4">
                    Why this matters?
                  </h2>
                    </div>
                   
        <div className="container">
          <div className="row">
            
            {/*Feature One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="100ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                  <Link href="/Conferences">
                  Bridging Ancient Knowledge with Modern Inquiry
                  </Link>
                </h3>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                  <Link href="/Conferences">
                  A Structured Path for Seekers, Thinkers & Practitioners
                  </Link>
                </h3>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                  <Link href="/Conferences">
                  Integrating Mysticism with Scientific Exploration
                  </Link>
                </h3>
              </div>
            </div>
            {/*Feature One Single End*/}
            {/*Feature One Single Start*/}
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="feature-one__single">
                <div className="feature-one__icon">
                  <span className="text-white">✓</span>
                </div>
                <h3 className="feature-one__title">
                  <Link href="/Conferences">
                  Practical Applications for Consciousness & Transformation
                  </Link>
                </h3>
              </div>
            </div>
            {/*Feature One Single End*/}
          </div>
        </div>
      </section>
      {/*Feature One End*/}
    </>
  );
}
