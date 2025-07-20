import { client } from "@/sanity/client";
import { urlFor } from "@/lib/sanityImage";
import { Metadata } from "next";
import BlogDetails from "./BlogDetails";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  title,
  publishedAt,
  image,
  snippet,
  body
}`;
const options = { next: { revalidate: 30 } };

const getPostMeta = async (slug: string) => {
  const post = await client.fetch(POST_QUERY, { slug });
  return post;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostMeta(params.slug);
  const imageUrl = post?.image ? urlFor(post.image) : "/images/logo.png";
  return {
    title: post?.title || "Scarface Blog",
    description: post?.snippet || "Read the latest from Scarface.",
    openGraph: {
      title: post?.title || "Scarface Blog",
      description: post?.snippet || "Read the latest from Scarface.",
      url: `https://scarface-portfolio.vercel.app/${params.slug}`,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 800,
          height: 400,
          alt: post?.title || "Scarface Blog",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post?.title || "Scarface Blog",
      description: post?.snippet || "Read the latest from Scarface.",
      images: [imageUrl],
      creator: "scarfacedoteth",
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getPostMeta(params.slug);
  return <BlogDetails post={post} />;
}
