"use client";

import { createCategory } from "./actions";
import { CreateNoteCategory, NoteCategory } from "@/types/notes";
import { transformCategories } from "@/lib/transform-data";
import dynamic from "next/dynamic";
import { Batch } from "@/types/batches";
import Select from "@/components/select";
import { Controller, useForm, useWatch } from "react-hook-form";
import { use, useEffect, useState } from "react";
import { getCategoriesByBatchId } from "@/app/services/notes-categories";

const CustomSelect = dynamic(
  () => import("@/components/category-select/custom-select"),
  {
    ssr: false, // Disable SSR for this component
  },
);

type Props = {
  batches: Batch[];
};

const CategoryAddForm = ({ batches }: Props) => {
  const [categories, setCategories] = useState<any[]>([]);
  const { register, handleSubmit, watch, control } =
    useForm<CreateNoteCategory>();
  const watchBatchId = useWatch({ name: "batch_id", control });

  useEffect(() => {
    const fetchCategories = async () => {
      console.log(watchBatchId);
      if (watchBatchId) {
        const categories: NoteCategory[] =
          await getCategoriesByBatchId(watchBatchId);
        console.log("category",categories);
        const transformedCategories = transformCategories(categories);
        setCategories(transformedCategories);
      }
    };
    fetchCategories();
  }, [watchBatchId]);

  const handleOnSubmit = async (data: CreateNoteCategory) => {
    console.log(data);
    const response = await createCategory(data);
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
                <Select
                  name="batch_id"
                  register={register}
                  label="Batch"
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
                    Parent Name <span className="text-meta-1">*</span>
                  </label>

                  <Controller
                    name="parent_id"
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
                    Category Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    {...register("category_name", { required: true })}
                    type="text"
                    required
                    placeholder="Enter your note name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              {/* 
              <div className="mb-2 w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Description
                </label>
                <textarea
                  rows={6}
                  placeholder="Default textarea"
                  name="note_description"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                ></textarea>
              </div> */}

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

export default CategoryAddForm;
