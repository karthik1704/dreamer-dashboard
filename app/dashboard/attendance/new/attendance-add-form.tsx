'use client';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { useForm } from "react-hook-form";

export const metadata: Metadata = {
  title: "Attendance Add Form | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

const AttendanceAddForm = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Breadcrumb pageName="Attendance Add Form" />

      <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="max-w-full overflow-x-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-2 text-left dark:bg-meta-4">
                  <th className="min-w-[220px] px-4 py-4 font-medium text-black dark:text-white xl:pl-11">
                    STUDENTS
                  </th>
                  <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                    DATE
                  </th>
                  <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                    IN TIME
                  </th>
                  <th className="min-w-[120px] px-4 py-4 font-medium text-black dark:text-white">
                    OUT TIME
                  </th>
                  <th className="min-w-[170px] px-4 py-4 font-medium text-black dark:text-white">
                    STATUS
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="border-b border-[#eee] px-5 py-5 pl-9 dark:border-strokedark xl:pl-11">
                    <div className="mb-4.5 ">
                      <select
                        {...register("student")}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-1 py-3.5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      >
                        <option value="">Select a student</option>
                        <option value="student1">Student 1</option>
                        <option value="student2">Student 2</option>
                        <option value="student3">Student 3</option>
                      </select>
                    </div>
                  </td>
                  <td className="border-b border-[#eee] px-5 py-5 dark:border-strokedark">
                    <div className="mb-4.5">
                      <input
                        type="date"
                        {...register("date")}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-1 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </td>
                  <td className="border-b border-[#eee] px-5 py-5 dark:border-strokedark">
                    <div className="mb-4.5">
                      <input
                        type="time"
                        {...register("inTime")}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-1 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </td>
                  <td className="border-b border-[#eee] px-5 py-5 dark:border-strokedark">
                    <div className="mb-4.5">
                      <input
                        type="time"
                        {...register("outTime")}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-1 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </td>
                  <td className="border-b border-[#eee] px-4 py-5 dark:border-strokedark">
                    <div className="mb-4.5">
                      <select
                        {...register("studentstatus")}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-1 py-3.5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      >
                        <option value="">Select a status</option>
                        <option value="present">Present</option>
                        <option value="absent">Absent</option>
                        <option value="onduty">On duty</option>
                      </select>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AttendanceAddForm;
