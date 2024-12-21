"use client";

import Select from "@/components/select";
import { editLiveClass } from "./actions";
import { useParams } from "next/navigation";
import { Batch } from "@/types/batches";
import { LiveClassType } from "@/types/live-classes";

type Props = {
  batches: Batch[];
  liveClass: LiveClassType;
};

const NoteEditForm = ({ batches, liveClass }: Props) => {
  const { id } = useParams();
  const editLiveClassWithId = editLiveClass.bind(null, id as string);
  return (
    <div className="sm:grid-cols-2">
      <div className="flex flex-col gap-9">
        {/* <!-- Contact Form --> */}
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            {/* <h3 className="font-medium text-black dark:text-white">
              Courses Add Form
            </h3> */}
          </div>

          <form action={editLiveClassWithId}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <Select
                  name="batch_id"
                  label="Batch"
                  defaultValue={liveClass.batch_id}
                  required
                >
                  {batches.map((batch) => (
                    <option key={batch.id} value={batch.id}>
                      {batch.batch_name}
                    </option>
                  ))}
                </Select>
                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Class Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    name="class_name"
                    type="text"
                    required
                    defaultValue={liveClass.class_name}
                    placeholder="Enter your class name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Class Link
                  </label>
                  <input
                    name="class_link"
                    type="text"
                    required
                    defaultValue={liveClass.class_link}
                    placeholder="Enter note link"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Start Time
                </label>
                <input
                  name="start_time"
                  type="datetime-local"
                  required
                  defaultValue={liveClass.start_time}
                  placeholder="Enter start time"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div className="w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  End Time
                </label>
                <input
                  name="end_time"
                  type="datetime-local"
                  defaultValue={liveClass.end_time}
                  required
                  placeholder="Enter start time"
                  className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoteEditForm;
