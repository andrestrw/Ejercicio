import { ConfigProvider } from "antd";
import BaseTabs, { TabsProps } from "antd/es/tabs";

const Tabs = (props: TabsProps) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            /* here is your component tokens */ colorText: "white",
            inkBarColor: "white",
            itemSelectedColor: "white",
            itemHoverColor: "white",

            fontSize: 22,
          },
        },
      }}
    >
      <BaseTabs {...props} />
    </ConfigProvider>
  );
};

export default Tabs;
