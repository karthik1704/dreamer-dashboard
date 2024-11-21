"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import SelectGroupOne from "../../SelectGroups/SelectGroupOne";
import SelectGender from "../../SelectGroups/SelectGender";
import Link from "next/link";
import SelectBlood from "../../SelectGroups/SelectBlood";
import { updateStudent } from "./actions";
import Select from "@/components/select";
import { BLOODGROUPS } from "@/app/constants";
import { useFieldArray, useForm } from "react-hook-form";
import { CreateStudent, Student, UpdateStudent } from "@/types/students";
import { Batch } from "@/types/batches";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import UploadImage from "./upload-image";

export const metadata: Metadata = {
  title: "Students Add Form | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

type Props = {
  batches: Batch[];
  student: Student
};

function StudentsEditForm({ batches, student }: Props) {
  const { register, control, handleSubmit, watch, formState:{isSubmitting, isLoading} } = useForm<UpdateStudent>({
    defaultValues:{
      ...student,
      date_of_birth: student.date_of_birth.split('T')[0],
      student_profile: {
        ...student?.student_profile,
      },
    }
  });
  const [preview, setPreview] = useState<string | null>(student?.student_profile?.student_photo || null);
  // const watchImage = watch("student_profile.student_photo");

  const {id} = useParams();
  const updateStudentWithId = updateStudent.bind(null, id as string) ;

  // useEffect(() => {
  //   if (watchImage && watchImage.length > 0) {
  //     const file: File = watchImage[0];

  //     setPreview(URL.createObjectURL(file));
  //   }
  // }, [watchImage]);

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file); // Converts to Base64
    });
  };

  const onSubmit = async (data: CreateStudent) => {
    console.log(data);
    // const image = data.student_profile?.student_photo;
    // const base64Image = image ? await convertToBase64(image[0]) : null;

    const studentData = {
      ...data,
      student_profile: {
        ...data.student_profile,
        // student_photo: base64Image,
      },
    };

    updateStudentWithId(studentData);
  };

  return (
    <>
      <Breadcrumb pageName="Students Add Form" />

      <div className="sm:grid-cols-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 flex flex-col gap-9">
            {/* <!-- personal Form --> */}
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Student Information
                </h3>
              </div>
              <div className="p-6.5">
              <UploadImage image_url={student?.student_profile?.student_photo ?? ""} />
                {/* <div className="mb-4.5 flex flex-col">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Student Picture
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    {...register("student_profile.student_photo")}
                    className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                  />
                </div> */}

                <div className="mb-4.5 flex flex-col gap-6">
                  <Select
                    name="batch_id"
                    label={"Batch"}
                    required
                    register={register}
                  >
                    {batches.map((batch) => (
                      <option value={batch.id} key={batch.id}>
                        {batch.batch_name}
                      </option>
                    ))}
                  </Select>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        First name <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        {...register("first_name", { required: true })}
                        required
                        placeholder="Enter your first name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Last name <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        {...register("last_name", { required: true })}
                        placeholder="Enter your last name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <Select
                    name="gender"
                    label={"Gender"}
                    required
                    register={register}
                    width="w-1/2"
                  >
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                    <option value="OTHER">Others</option>
                  </Select>

                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Register Number <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      {...register("student_code", { required: true })}
                      placeholder="Enter your register numer"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>

                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Date Of Birth <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      {...register("date_of_birth", { required: true })}
                      placeholder="Enter your date of birth [dd/mm/yyyy]"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="w-full xl:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      {...register("email", { required: true })}
                      placeholder="Enter your email"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-9">
              {/* <!-- communication form --> */}
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <div className="border-b border-stroke px-6.5 py-4 dark:border-strokedark">
                  <h3 className="font-medium text-black dark:text-white">
                    Communication
                  </h3>
                </div>
                <div className="p-6.5">
                  <div className="mb-6">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      School Name <span className="text-meta-1">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      {...register("student_profile.school_name", {
                        required: true,
                      })}
                      placeholder="Enter your school name"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    />
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Age <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="number"
                        required
                        {...register("student_profile.age", { required: true })}
                        placeholder="Enter your age"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>

                    <Select
                      name="student_profile.blood_group"
                      label={"Blood Group"}
                      required
                      width="w-1/2"
                    >
                      {BLOODGROUPS.map((group) => (
                        <option value={group.group} key={group.group}>
                          {group.name}
                        </option>
                      ))}
                    </Select>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Father Name <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        {...register("student_profile.father_name", {
                          required: true,
                        })}
                        placeholder="Enter your father name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Mother Name <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        {...register("student_profile.mother_name", {
                          required: true,
                        })}
                        placeholder="Enter your mother name"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        District <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your district"
                        {...register("student_profile.district")}
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        State <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        {...register("student_profile.state")}
                        placeholder="Enter your state"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="mb-4.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Address
                    </label>
                    <textarea
                      rows={3}
                      required
                      {...register("student_profile.address")}
                      placeholder="Enter your address"
                      className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    ></textarea>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Father Phone Number{" "}
                        <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        {...register("student_profile.father_phone_number")}
                        placeholder="Enter your father phone number"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Mother Phone Number{" "}
                        <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        {...register("student_profile.mother_phone_number")}
                        placeholder="Enter your mother phone number"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Personal Phone Number{" "}
                        <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="number"
                        required
                        {...register("student_profile.personal_number")}
                        placeholder="Enter your personal phone number"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                    <div className="w-full xl:w-1/2">
                      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                        Sibiling Phone Number{" "}
                        <span className="text-meta-1">*</span>
                      </label>
                      <input
                        type="number"
                        required
                        {...register("student_profile.siblings_phone_number")}
                        placeholder="Enter your sibiling phone number"
                        className="w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-9">
              <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                <button disabled={isLoading || isSubmitting} className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                  { isLoading || isSubmitting ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default StudentsEditForm;
