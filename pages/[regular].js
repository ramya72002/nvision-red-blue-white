import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import Contact from "@layouts/Contact";
import Default from "@layouts/Default";
import About from "@layouts/About";
import Services from "@layouts/Services";
import Resources from "@layouts/Resources";
import Recognition from "@layouts/Recognition";
import News from "@layouts/News";
import PublicSector from "@layouts/PublicSector";
import Careers from "@layouts/Careers";
import { getRegularPage, getSinglePage } from "@lib/contentParser";

// for all regular pages
const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : layout === "contact" ? (
        <Contact data={data} />
      ) : layout === "about" ? (
        <About data={data} />
      ) : layout === "services" ? (
        <Services data={data} />
      ) : layout === "resources" ? (
        <Resources data={data} />
      ) : layout === "news" ? (
        <News data={data} />
      ) : layout === "recognition" ? (
        <Recognition data={data} />
      ) : layout === "publicSector" ? (
        <PublicSector data={data} />
      ) : layout === "careers" ? (
        <Careers data={data} />
      ) :
      (
        <Default data={data} />
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const allslugs = getSinglePage("content");
  const slugs = allslugs.map((item) => item.slug);
  const paths = slugs.map((slug) => ({
    params: {
      regular: slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const regularPage = await getRegularPage(regular);

  return {
    props: {
      slug: regular,
      data: regularPage,
    },
  };
};
