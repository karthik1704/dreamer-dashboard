"use client";

import Select from "@/components/select";
import { createNote } from "./actions";
import { Batch } from "@/types/batches";
import { CreateNote, NoteCategory } from "@/types/notes";
import { transformCategories } from "@/lib/transform-data";
import dynamic from "next/dynamic";
import { getCategoriesByBatchId } from "@/app/services/notes-categories";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
const CustomSelect = dynamic(
  () => import("@/components/category-select/custom-select"),
  {
    ssr: false, // Disable SSR for this component
  },
);

type Props = {
  batches: Batch[];
};

const NoteAddForm = ({ batches }: Props) => {
  const {register,control, watch, handleSubmit} = useForm<CreateNote>()
  const watchBatchId = watch("batch_id");
  const [categories, setCategories] = useState<any[]>([]);


  useEffect(() => {
    const fetchCategories = async () => {
      if (watchBatchId) {
        const categories: NoteCategory[] =
          await getCategoriesByBatchId(watchBatchId);
        const transformedCategories = transformCategories(categories);
        setCategories(transformedCategories);
      }
    };
    fetchCategories();
  }, [watchBatchId]);

  const handleOnSubmit = async (data:CreateNote) => {
    console.log(data);
    const response = await createNote(data);
   
  };
  
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
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <Select name="batch_id" register={register} label="Batch" required>
                  {batches.map((batch) => (
                    <option key={batch.id} value={batch.id}>
                      {batch.batch_name}
                    </option>
                  ))}
                </Select>
                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Category <span className="text-meta-1">*</span>
                  </label>

                  <Controller
                    name="category_id"
                    control={control}
                    render={({ field, fieldState }) => (
                      <>
                        <CustomSelect field={field} categories={categories} />
                        {fieldState.error && <p>{fieldState.error.message}</p>}
                      </>
                    )}
                  />
                </div>
                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Note <span className="text-meta-1">*</span>
                  </label>
                  <input
                    {...register("note")}
                    type="text"
                    required
                    placeholder="Enter your note name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Note Link
                  </label>
                  <input
                    {...register("note_link")}
                    type="text"
                    required
                    placeholder="Enter note link"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <div className="mb-2 w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Description
                </label>
                <textarea
                  rows={6}
                  placeholder="Default textarea"
                  {...register("note_description")}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
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

export default NoteAddForm;
