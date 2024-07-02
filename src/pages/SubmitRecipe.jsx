import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const SubmitRecipe = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Handle image upload if an image is provided
      let imageUrl = "";
      if (data.image[0]) {
        const formData = new FormData();
        formData.append("file", data.image[0]);
        formData.append("upload_preset", "your_upload_preset"); // Replace with your Cloudinary upload preset
        const response = await fetch("https://api.cloudinary.com/v1_1/your_cloud_name/image/upload", { // Replace with your Cloudinary URL
          method: "POST",
          body: formData,
        });
        const fileData = await response.json();
        imageUrl = fileData.secure_url;
      }

      // Submit the recipe data
      const recipeData = {
        title: data.title,
        ingredients: data.ingredients,
        steps: data.steps,
        image: imageUrl,
      };

      // Replace with your API endpoint
      const res = await fetch("/api/recipes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipeData),
      });

      if (!res.ok) {
        throw new Error("Failed to submit recipe");
      }

      toast("Recipe submitted successfully!", { description: "Your recipe has been added." });
      reset();
    } catch (error) {
      console.error(error);
      toast("Failed to submit recipe", { description: error.message });
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Submit Your Recipe</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
          <Input id="title" {...register("title", { required: "Title is required" })} />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>
        <div>
          <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients</label>
          <Textarea id="ingredients" {...register("ingredients", { required: "Ingredients are required" })} />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients.message}</p>}
        </div>
        <div>
          <label htmlFor="steps" className="block text-sm font-medium text-gray-700">Steps</label>
          <Textarea id="steps" {...register("steps", { required: "Steps are required" })} />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps.message}</p>}
        </div>
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
          <Input id="image" type="file" {...register("image")} />
        </div>
        <Button type="submit">Submit Recipe</Button>
      </form>
    </div>
  );
};

export default SubmitRecipe;