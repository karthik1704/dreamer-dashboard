import { Metadata } from "next";
import StudentsAddForm from "./student-add-form";
import { getBatches } from "../../batches/services";

export const metadata: Metadata = {
  title: "Add New Students | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function NewStudentPage() {
  const batches = await getBatches();

  return (
    <div>
      <StudentsAddForm  batches={batches}/>
    </div>
  );
}
