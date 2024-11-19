"use client";

import Select from "@/components/select";
import { EditBatch } from "./actions";
import { useParams } from "next/navigation";
import { Batch } from "@/types/batches";

type Props = {
  batch: Batch
}

const BatchesAddForm = ({batch}:Props) => {
  const {id} = useParams();
  const EditBatchWithId = EditBatch.bind(null, id as string);
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
          <form action={EditBatchWithId}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full ">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Batch Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    name="batch_name"
                    type="text"
                    defaultValue={batch.batch_name}
                    required
                    placeholder="Enter your batch name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Batch Code
                  </label>
                  <input
                    name="batch_code"
                    type="text"
                    defaultValue={batch.batch_code}
                    required
                    placeholder="Enter your batch code"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                <div className="w-full ">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Board
                  </label>
                  <input
                    name="board"
                    type="text"
                    defaultValue={batch.board}
                    required
                    placeholder="Enter your board name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
                <Select name="mode" label="Mode" required defaultValue={batch.mode}>
                  <option value="ONLINE">Online</option>
                  <option value="OFFLINE">Offline</option>
                </Select>
              </div>
              <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                
                <Select name="target" label="Target" required defaultValue={batch.target}>
                  <option value="NEET">NEET</option>
                  <option value="BOARD">BOARD</option>
                </Select>
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

export default BatchesAddForm;
