import React from "react";
import Image from "next/image";
import demoImage from "@/public/img/demoimg.png";
import Link from "next/link";
import { AiTwotoneCalendar } from "react-icons/ai";
import moment from "moment";

const OtherBlogs = ({ otherBlogs }) => {
  return (
    <section className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {otherBlogs?.length > 0 &&
          otherBlogs.map((item, index) => {
            const timeStr = item?.createdAt;
            const time = moment(timeStr);
            const formattedTime = time.format("MMMM Do YYYY");

            return (
              <div key={index} className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={item?.authorId?.avatar?.url ? item?.authorId?.avatar?.url : demoImage}
                        alt="picture of the author"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="text-xs">
                        <h6 className="font-bold">{item?.authorId?.name}</h6>
                        <p className="text-paragraphColor">
                          {item?.authorId?.designation}
                        </p>
                      </div>
                    </div>
                <Link href={`/blog/${item?._id}`}>
                  <div className="space-y-2">
                    <Image
                      src={item?.image ? item.image?.url : demoImage}
                      alt="blog image"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto rounded-lg mb-2"
                    />
                
                    <div className="flex items-center gap-3 text-xs">
                      <p className="text-purple-500">{item?.category}</p>
                      <p className="flex items-center gap-1 text-paragraphColor">
                        <AiTwotoneCalendar />
                        {formattedTime}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{item?.title}</h3>
                      <p className="text-sm text-paragraphColor">
                        {item?.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default OtherBlogs;
