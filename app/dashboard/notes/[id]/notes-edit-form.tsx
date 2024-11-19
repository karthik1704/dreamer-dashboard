"use client";

import Select from "@/components/select";
import { EditNote } from "./actions";
import { useParams } from "next/navigation";
import { Batch } from "@/types/batches";
import { Note } from "@/types/notes";

type Props = {
  batches: Batch[];
  note:Note;
};

const NoteEditForm = ({ batches, note }: Props) => {
  const { id } = useParams();
  const EditNoteWithId = EditNote.bind(null, id as string);
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
          <form action={EditNoteWithId}>
            <div className="p-6.5">
              <div className="mb-4.5 flex flex-col gap-6">
                <Select name="batch_id" label="Batch" defaultValue={note.batch_id} required>
                  {batches.map((batch) => (
                    <option key={batch.id} value={batch.id}>
                      {batch.batch_name}
                    </option>
                  ))}
                </Select>
                <div className="w-full">
                  <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                    Note <span className="text-meta-1">*</span>
                  </label>
                  <input
                    name="note"
                    type="text"
                    defaultValue={note.note}
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
                    name="note_link"
                    type="text"
                    defaultValue={note.note_link}
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
                  name="note_description"
                  defaultValue={note.note_description}
                  
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

export default NoteEditForm;
