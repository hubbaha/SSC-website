import Link from "next/link";

interface BreadcrumbProps {
  breadcrumbTitle: string;
}

export default function Breadcrumb({ breadcrumbTitle }: BreadcrumbProps) {
  return (
    <>
      {/* Page Header Start */}
      <section className="page-header">
        <div
          className="page-header-bg"
          style={{
            backgroundImage:
              "url(public/assets/images/backgrounds/page-header-bg.jpg)",
          }}
          aria-label="Page header background"
        ></div>
        <div className="container"></div>
      </section>
      {/* Page Header End */}
    </>
  );
}
