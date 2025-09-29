import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Dashboard = () => {
  const layouts = [
    { i: "a", x: 0, y: 0, w: 6, h: 6 },
    { i: "b", x: 7, y: 0, w: 6, h: 6 },
  ];

  return (
    <div className="white h-full min-h-svh w-full bg-slate-700 p-4 text-white">
      <ResponsiveGridLayout
        className="layout"
        isDraggable={false}
        isResizable={false}
        rowHeight={30}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 12, xs: 1, xxs: 12 }}
        layouts={{
          lg: layouts,
          md: layouts,
          sm: layouts,
          xs: layouts,
          xxs: layouts,
        }}
      >
        <div key="a" className="border-2 bg-[#ccc]">
          Calendar
        </div>
        <div key="b" className="border-2 bg-[#ccc]">
          To-do list
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};
