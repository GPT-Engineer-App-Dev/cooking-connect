import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SubmitRecipe = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Submit Your Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <Input id="title" {...register("title", { required: true })} />
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
          <Textarea id="ingredients" {...register("ingredients", { required: true })} />
        </div>
        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Steps</label>
          <Textarea id="steps" {...register("steps", { required: true })} />
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <Input id="image" type="file" {...register("image", { required: true })} />
        </div>
        <Button type="submit">Submit Recipe</Button>
      </form>
    </div>
  );
};

export default SubmitRecipe;