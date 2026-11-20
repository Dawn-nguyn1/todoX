import { useMemo, useState } from "react";
import AddTask from "../components/AddTask";
import DateTimeFilter from "../components/DateTimeFilter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StatsAndFilters from "../components/StatsAndFilters";
import TaskList from "../components/TaskList";
import TaskListPagination from "../components/TaskListPagination";

// const initialTasks = [
//   { id: 1, title: "Chào mừng đến với TodoX", description: "Tạo nhiệm vụ đầu tiên của bạn", completed: false },
//   { id: 2, title: "Khám phá giao diện", description: "Thử bộ lọc và các thao tác bên dưới", completed: true },
// ];

const HomePage = () => {
  // const [tasks, setTasks] = useState(initialTasks);
  // const [filter, setFilter] = useState("all");
  // const [dateQuery, setDateQuery] = useState("");
  // const [page, setPage] = useState(1);

  // const visibleTasks = useMemo(() => {
  //   return tasks.filter((task) => {
  //     const matchesFilter = filter === "all" || (filter === "active" ? !task.completed : task.completed);
  //     const matchesDate = !dateQuery || task.createdAt === dateQuery;
  //     return matchesFilter && matchesDate;
  //   });
  // }, [dateQuery, filter, tasks]);

  // const handleNewTaskAdded = (task) => setTasks((current) => [task, ...current]);
  // const handleTaskChanged = (id) => {
  //   setTasks((current) => current.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
  // };

    return (
    <div className="min-h-screen w-full bg-[#fefcff] relative">
      {/* Dreamy Sky Pink Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />
      {/* Your Content/Components */}
      <div className="container relative z-10 pt-8 mx-auto">
        <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
          {/* Đầu Trang */}
          <Header />

          {/* Tạo Nhiệm Vụ */}
          <AddTask 
          // handleNewTaskAdded={handleNewTaskAdded} 
          />

          {/* Thống Kê và Bộ lọc */}
          <StatsAndFilters
            // filter={filter}
            // setFilter={(nextFilter) => { setFilter(nextFilter); setPage(1); }}
            // activeTasksCount={tasks.filter((task) => !task.completed).length}
            // completedTasksCount={tasks.filter((task) => task.completed).length}
          />

          {/* Danh Sách Nhiệm Vụ */}
          <TaskList
            // filteredTasks={visibleTasks}
            // handleTaskChanged={handleTaskChanged}
          />

          {/* Phân Trang và Lọc Theo Date */}
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <TaskListPagination
              // handleNext={() => setPage((current) => current + 1)}
              // handlePrev={() => setPage((current) => Math.max(1, current - 1))}
              // handlePageChange={setPage}
              // page={page}
              // totalPages={1}
            />
            <DateTimeFilter
              // dateQuery={dateQuery}
              // setDateQuery={setDateQuery}
            />
          </div>

          {/* Chân Trang */}
          <Footer
            // activeTasksCount={tasks.filter((task) => !task.completed).length}
            // completedTasksCount={tasks.filter((task) => task.completed).length}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage
