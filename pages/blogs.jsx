import { useRouter } from "next/router";
import React from "react";
import CommonLayout from "../components/common/common.layout";

const Blogs = () => {
  const router = useRouter();
  return (
    <CommonLayout>
      <div className="blog-wrapper">
        <div className="blog-banner d-flex align-items-center p-4 justify-content-center flex-column">
          <h1 className="gx-xl-4">BLOG GRID</h1>
          <ul className="d-flex gap-4 align-items-center justify-content-start">
            <li
              onClick={() => router.push("/")}
              className="text-sec list-unstyled"
            >
              Home
            </li>
            <li className="text-sec text-black">Blog Grid</li>
          </ul>
        </div>
      </div>
    </CommonLayout>
  );
};

export default Blogs;
