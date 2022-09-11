import type { NextPage } from "next";
import Head from "next/head";
import FixedHeader from "../components/FixedHeader";
import SectionHeader from "../components/SectionHeader";
import LargeHeading from "../components/LargeHeading";
import RichTextResponse from "../utils/richTextConverter";
import { useQuery } from "@apollo/client";
import GET_POSTS from "../../queries/getPosts";

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

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

      <LargeHeading
        lineOne="BILLY"
        lineTwo="ARNOLD"
        className="justify-start"
      />

      {JSON.stringify(data)}
    </>
  );
};

export default Home;
