import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type Props = {};

type SimpleBlog = {
  _id: string;
  title: string;
  categories: string[];
  mainImage: string;
  slug: string;
};

const articles = [
  {
    title: "Creating the KOTAverse to celebrate 10 years of KOTA",
    categories: ["Culture", "Our Work"],
  },
];

const query = groq`*[_type == 'post']{
  _id,
  title,
  categories[]->{title},
  mainImage,
  "slug":slug.current
}`;

export const FeaturedArticles = async (props: Props) => {
  const blogs = await client.fetch<SimpleBlog[]>(query);
  console.log({ blogs });
  return (
    <section className="ring-1 py-40">
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-7xl font-medium font-montserrat tracking-tight">
            Featured articles
          </h2>
          <Button
            variant={"outline"}
            className="bg-transparent text-white border-white"
          >
            View our blog
          </Button>
        </div>
      </div>

      <div className="container">
        {blogs.map((blog) => (
          <div key={blog._id}>{blog.title}</div>
        ))}
      </div>
    </section>
  );
};
