import React from "react";
import Image from "next/image";
import demoImage from "@/public/img/demoimg.png";
import Link from "next/link";
import { AiTwotoneCalendar } from "react-icons/ai";
import moment from "moment";

const FirstBlog = ({ firstBlog }) => {
  const timeStr = firstBlog?.createdAt;
  const time = moment(timeStr);
  const formattedTime = time.format("MMMM Do YYYY");

  return (
    <section className="p-4 md:p-8">
      <Link href={`/blog/${firstBlog?._id}`} className="block">
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={
              firstBlog?.authorId?.avatar?.url
                ? firstBlog?.authorId?.avatar?.url
                : demoImage
            }
            alt="picture of the author"
            width={40}
            height={40}
            sizes="100vw"
            className="w-10 h-10 rounded-full"
          />

          <div className="text-xs">
            <h6 className="font-bold truncate">{firstBlog?.authorId?.name}</h6>
            <p className="text-paragraphColor truncate">
              {firstBlog?.authorId?.designation}
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full lg:w-2/5">
            <Image
              src={firstBlog?.image ? firstBlog.image?.url : demoImage}
              alt="first blog image"
              width={500}
              height={300}
              sizes="100vw"
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="w-full lg:w-3/5 space-y-5">
            <div className="flex items-center gap-3 text-xs">
              <p className="text-purple-500 truncate">{firstBlog?.category}</p>
              <p className="flex items-center gap-1 text-paragraphColor truncate">
                <AiTwotoneCalendar />
                {formattedTime}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-bold truncate">{firstBlog?.title}</h2>
              <p className="text-sm text-paragraphColor truncate">
                {firstBlog?.excerpt}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default FirstBlog;
