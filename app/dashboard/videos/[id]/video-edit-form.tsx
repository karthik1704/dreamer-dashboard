"use client";

import Select from "@/components/select";
import { EditVideo } from "./actions";
import { useParams } from "next/navigation";
import { Batch } from "@/types/batches";
import { Video, VideoCreate } from "@/types/videos";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { getCategoriesByBatchId } from "@/app/services/video-categories";
import { transformCategories } from "@/lib/transform-data";
import CustomSelect from "@/components/category-select/custom-select";

type Props = {
  batches: Batch[];
  video: Video;
};

const BatchesAddForm = ({ batches, video }: Props) => {
  const { id } = useParams();
  const EditVidoeWithId = EditVideo.bind(null, id as string);
  const { register, control, watch, handleSubmit } = useForm<VideoCreate>({
    defaultValues: {
      batch_id: video.batch_id,
      category_id: video.category_id,
      video_title: video.video_title,
      video_link: video.video_link,
      video_type: video.video_type,
      video_description: video.video_description,
    },
  });
  const watchBatchId = watch("batch_id");
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      if (watchBatchId) {
        const categories = await getCategoriesByBatchId(watchBatchId);
        const transformedCategories = transformCategories(categories);
        setCategories(transformedCategories);
      }
    };
    fetchCategories();
  }, [watchBatchId]);

  const handleOnSubmit = async (data: VideoCreate) => {
    console.log(data);
    const response = await EditVidoeWithId(data);
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
                  label="Batch"
                  defaultValue={video.batch_id}
                  register={register}
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
                    Video Name <span className="text-meta-1">*</span>
                  </label>
                  <input
                    {...register("video_title")}
                    type="text"
                    required
                    placeholder="Enter your video name"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>

                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Video Link
                  </label>
                  <input
                    {...register("video_link")}
                    type="text"
                    required
                    placeholder="Enter video link"
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div>
              </div>

              <Select
                name="video_type"
                label="Video Type"
                register={register}
                required
              >
                <option value="VIDEO">Video</option>
                <option value="SHORT">Short</option>
              </Select>

              <div className="mb-2 w-full">
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Description
                </label>
                <textarea
                  rows={6}
                  placeholder="Default textarea"
                  {...register("video_description")}
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

export default BatchesAddForm;
