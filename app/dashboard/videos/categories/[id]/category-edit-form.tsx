"use client";

import { updateCategory } from "./actions";
import { NoteCategory } from "@/types/notes";
import { transformCategories } from "@/lib/transform-data";
import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import Select from "@/components/select";
import { Batch } from "@/types/batches";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getCategoriesByBatchId } from "@/app/services/video-categories";
import { convertToBase64 } from "@/lib/utils";

const CustomSelect = dynamic(
  () => import("@/components/category-select/custom-select"),
  {
    ssr: false, // Disable SSR for this component
  },
);

type Props = {
  category: NoteCategory;
  batches: Batch[];
};

const CategoryEditForm = ({ category, batches }: Props) => {
  const [categories, setCategories] = useState<any[]>([]);
  const { register, handleSubmit, watch, control } = useForm({
    defaultValues: {
      batch_id: category.batch_id,
      parent_id: category.parent_id,
      category_name: category.category_name,
      image: null,
    },
  });
  const { id } = useParams<{ id: string }>();
  const updateCategoryWithId = updateCategory.bind(null, id);
  const watchBatchId = watch("batch_id");

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

  const onSubmit = async (data: any) => {
    console.log(data);
    const image = data.image;
    const base64Image = image ? await convertToBase64(image[0]) : null;

    const categoryData = {
      ...data,
      image: base64Image,
    };
    const res = await updateCategoryWithId(categoryData);
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            encType="multipart/form-data"
          >
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

              <div className="mb-4.5 flex flex-col">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Category Picture
                </label>
                <input
                  type="file"
                  accept="image/*"
                  {...register("image")}
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

export default CategoryEditForm;
