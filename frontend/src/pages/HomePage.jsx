import { useEffect, useMemo, useState } from "react";
import AddTask from "../components/AddTask";
import DateTimeFilter from "../components/DateTimeFilter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import StatsAndFilters from "../components/StatsAndFilters";
import TaskList from "../components/TaskList";
import TaskListPagination from "../components/TaskListPagination";
import { toast } from "sonner";
import axios from "axios";



const HomePage = () => {
 const {taskBuffer, setTaskBuffer} = useState([]);
   const [activeTaskCount, setActiveTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [filter, setFilter] = useState(0);

  //fetch API
 const fetchTasks = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTaskBuffer(res.data.tasks);
      setActiveTaskCount(res.data.activeCount);
      setCompletedTaskCount(res.data.completeCount);
    } catch (error) {
      console.error("Lỗi xảy ra khi truy xuất tasks:", error);
      toast.error("Lỗi xảy ra khi truy xuất tasks.");
    }
  };

    const handleTaskChanged = () => {
    fetchTasks();
  };
  
  // filtered task
  const filteredTasks = taskBuffer.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return task.status === "active";
    if (filter === "completed") return task.status === "completed";
    return true;
  });

  useEffect(() => {
    fetchTasks();
  }, []);

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
          handleNewTaskAdded={handleTaskChanged} 
          />

          {/* Thống Kê và Bộ lọc */}
          <StatsAndFilters
            activeTaskCount={activeTaskCount}
            completedTaskCount={completedTaskCount}
            filter={filter}
            setFilter={setFilter}
          />

          {/* Danh Sách Nhiệm Vụ */}
          <TaskList
            filteredTasks={filteredTasks}
            filter={filter}
            handleTaskChanged={handleTaskChanged}
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
            activeTaskCount={activeTaskCount}
            completedTaskCount={completedTaskCount}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage
