import { Metadata } from "next";
import StudentsEditForm from "./students-edit-form";
import { getBatches } from "../../batches/services";
import { getStudent } from "./services";

export const metadata: Metadata = {
  title: "Edit Students Form | Dreamer Academy",
  description: "Admin dashboard for dreamer academy",
};

export default async function EditUserPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;

  const { id } = params;
  const batches = await getBatches();
  const student = await getStudent(id);


  return (
    <div>
      <StudentsEditForm student={student} batches={batches}/>
    </div>
  );
}
