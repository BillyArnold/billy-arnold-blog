import type { NextPage } from "next";
import Head from "next/head";
import FixedHeader from "../../components/FixedHeader";
import SectionHeader from "../../components/SectionHeader";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Contact from "../../components/Contact";
import { MARKS, BLOCKS } from "@contentful/rich-text-types";
import ErrorPage from "next/error";

const Slug: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const GET_POST = gql`
    query GetPostBySlug($slug: String!) {
      blogPostCollection(where: { slug: $slug }, limit: 1) {
        items {
          title
          slug
          featuredImage {
            title
            url
          }
          content {
            json
            links {
              assets {
                block {
                  sys {
                    id
                  }
                  url
                  title
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POST, {
    variables: { slug },
  });

  if (loading)
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div>
        <p>Error! {error.message}</p>
      </div>
    );

  if (typeof data.blogPostCollection.items[0] == "undefined") {
    return <ErrorPage statusCode={404} />;
  }

  const options = {
    /*renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node: any) => (
        //Graph QL not returning image url so currently will need to fetch the image //BAD CONTENTFUL

        <img
          className="max-w-full"
          src={node.data?.target?.fields?.file?.url}
          alt={node.data?.target?.fields?.title}
        />
      ),
    },*/
    renderMark: {
      [MARKS.CODE]: (text: any) => <pre>{text}</pre>,
    },
  };

  return (
    <>
      <Head>
        <title>Billy Arnold</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="shortcut icon"
          href="/faviconNew.png"
          type="image/x-icon"
        ></link>
        <link rel="icon" href="/faviconNew.png" type="image/x-icon"></link>
      </Head>

      <FixedHeader />

      <div className="fixed-header-spacer h-4 lg:hidden"></div>
      <SectionHeader>Freelance Developer Based in Kent</SectionHeader>

      <div className="uppercase w-full px-5 md:px-20 pb-10 font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
        <h1 className="mb-6">{data.blogPostCollection.items[0].title}</h1>
      </div>

      <div className="uppercase w-full px-5 md:px-20 pb-12">
        <img
          alt={data.blogPostCollection.items[0].featuredImage.title}
          src={data.blogPostCollection.items[0].featuredImage.url}
          className="w-full"
        />
      </div>

      <div className="w-full px-5 md:px-20 flex flex-col blog-content">
        {documentToReactComponents(
          data.blogPostCollection.items[0].content.json,
          options
        )}
      </div>

      <Contact lineOne="HELLO@BILLY" lineTwo="ARNOLD.CO.UK" />
    </>
  );
};

export default Slug;
