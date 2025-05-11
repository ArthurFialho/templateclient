import React from "react";
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";
import { UpdateFollower } from "react-mouse-follower";
// `motion` e `UpdateFollower` estão importados mas não utilizados
// Remova ou use conforme necessário

const BlogsData = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptates dolor optio et sequi aliquam similique aspernatur cupiditate, autem reiciendis!",
    imgs: Blogs2,
    link: "#",
  },
  {
    id: 2,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptates dolor optio et sequi aliquam similique aspernatur cupiditate, autem reiciendis!",
    imgs: Blogs1,
    link: "#",
  },
  {
    id: 3,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptates dolor optio et sequi aliquam similique aspernatur cupiditate, autem reiciendis!",
    imgs: Blogs3,
    link: "#",
  },
  {
    id: 4,
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nobis?",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam voluptates dolor optio et sequi aliquam similique aspernatur cupiditate, autem reiciendis!",
    imgs: Blogs4,
    link: "#",
  },
];

const Blogs = () => {
  return (
    <section className="bg-gray-50">
      <div className="container py-14">
        <h1 className="text-5xl font-bold text-center font-poppins pb-8">
          Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {BlogsData.map((data) => (
            <UpdateFollower
              className="cursor-pointer"
              mouseOptions={{
                backgroundColor: "black",
                zIndex: 999,
                followSpeed: 1.5,
                text: "read",
                textFontSize: "3px",
                scale: 5,
              }}
            >
              <div
                key={data.id}
                className="flex flex-col items-center justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300"
              >
                <img src={data.imgs} className="mb-4 rounded-md" />
                <div className="space-y-2">
                  <h1 className="text-xl font-bold line-clamp-2">
                    {data.title}
                  </h1>
                  <p className="text-gray-600 text-sm text-center line-clamp-2 mt-2">
                    {data.desc}
                  </p>
                </div>
              </div>
            </UpdateFollower>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
