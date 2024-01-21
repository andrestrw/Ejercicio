"use client";

import { useURL } from "@/hooks";
import { ConfigProvider } from "antd";
import BasePaginate, { PaginationProps } from "antd/es/pagination";
import { useState } from "react";

const Pagination = (props: PaginationProps) => {
  const [current, setCurrent] = useState(props.current || 1);

  const { setQuery } = useURL();

  const onChange: PaginationProps["onChange"] = (page: number) => {
    setCurrent(page);
    setQuery({ page });
  };

  return (
    <div className="flex justify-center pb-12">
      <ConfigProvider
        theme={{
          token: {
            colorText: "white",
            colorTextPlaceholder: "white",
            colorTextDisabled: "white",
            colorBgTextActive: "white",
            colorBgTextHover: "white",
            colorBgContainer: "#1a237e",
          },
        }}
      >
        <BasePaginate
          {...props}
          onChange={onChange}
          current={current}
          showSizeChanger={false}
        />
      </ConfigProvider>
    </div>
  );
};

export default Pagination;
