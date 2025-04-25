"use client";
import Image from "next/image";
export default function Blog() {
  const posts = [
    {
      title: "In Eu Fringilla, Accumsan Puru Vel Sollicitudin.",
      description:
        "We’ve been a strategy thought leader for nearly five decades and...",
      date: "August 15, 2024",
      category: "Cyber Security",
      Image:
        "https://ittech.ditsolution.net/wp-content/uploads/2024/08/software-company-blog-img1.jpg",
    },
    {
      title: "Vivamus Vehicula Nl Purus At Interdum",
      description:
        "We’ve been a strategy thought leader for nearly five decades and...",
      date: "August 15, 2024",
      category: "Marketing",
      Image:
        "https://ittech.ditsolution.net/wp-content/uploads/2024/08/software-company-blog-img2.jpg",
    },
    {
      title: "Optimizing IT Infrastructure For Cost Efficiency",
      description:
        "We’ve been a strategy thought leader for nearly five decades and...",
      date: "August 15, 2024",
      category: "Software",
      Image:
        "https://ittech.ditsolution.net/wp-content/uploads/2024/08/software-company-blog-img3.jpg",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <h2 className="text-center text-2xl font-bold text-gray-400">
        Recent Articles
      </h2>
      <h1 className="text-center text-4xl font-bold mb-1 mt-2">
        Learn More Information to Read
      </h1>
      <h1 className="text-center text-4xl font-bold mb-12 mt-0">
        {" "}
        Our News & Blog
      </h1>
      <div className="grid md:grid-cols-3 gap-10">
        {posts.map((post, index) => (
          <div
          key={index}
          className="bg-gradient-to-b from-gray-700 to-gray-800 rounded-xl overflow-hidden shadow-xl"
        >
          <div className="relative w-full h-52">
            <Image
              src={post.Image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

            <div className="p-6">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <div className="flex items-center gap-1">
                  <span>👤</span>
                  <span>Admin</span>
                </div>
                <span>{post.date}</span>
              </div>

              <h2 className="text-lg font-bold text-white-400 hover:underline cursor-pointer mb-2 p-3">
                {post.title}
              </h2>
              <p className="text-sm font-bold text-gray-300 mb-4">
                {post.description}
              </p>

              <div className="flex justify-between items-center text-sm">
                <a
                  href="#"
                  className="text-white hover:underline flex items-center gap-1"
                >
                  Read More →
                </a>
                <span className="text-blue-500">{post.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
