'use client';
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import SelectGroupOne from "../../SelectGroups/SelectGroupOne";
import Link from "next/link";
import SelectSubjects from "../../SelectGroups/SelectSubjects";
import SelectGraduate from "../../SelectGroups/SelectGraduate";
import SelectProgram from "../../SelectGroups/SelectProgram";
import SelectProgramType from "../../SelectGroups/SelectProgramType";
import SelectBoard from "../../SelectGroups/SelectBoard";
import SelectBatch from "../../SelectGroups/SelectBatch";
import SelectSubjectsCode from "../../SelectGroups/SelectSubjectsCode";


export const metadata: Metadata = {
    title: "Courses Edit Form | Dreamer Academy",
    description:"Admin dashboard for dreamer academy",
  };


const CoursesEditForm = () => {
    return (
        <>
        <Breadcrumb pageName="Courses Edit Form" />
  
        <div className="sm:grid-cols-2">
          <div className="flex flex-col gap-9">
            {/* <!-- Contact Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                Courses Add Form
                </h3>
              </div>
              <form action="#">
                <div className="p-6.5">
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <SelectGraduate/>
                    </div>
  
                    <div className="w-full xl:w-1/2">
                      <SelectProgram/>
                    </div>
                  </div>
  
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <SelectProgramType/>
                    </div>
  
                    <div className="w-full xl:w-1/2">
                      <SelectBoard/>
                    </div>
                    <div className="w-full xl:w-1/2">
                      <SelectBatch/>
                    </div>
                  </div>
                  

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <SelectSubjects/>
                  </div>
                  <div className="w-full xl:w-1/2">
                    <SelectSubjectsCode/>
                  </div>

                </div>
                  <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        </>
    );
  };

export default CoursesEditForm

