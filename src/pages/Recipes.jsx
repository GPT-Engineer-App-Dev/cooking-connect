import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating"; // Import the Rating component
import { Link } from "react-router-dom";

const Recipes = () => {
  const recipes = [
    { id: 1, title: "Recipe 1", description: "Delicious recipe 1", image: "/images/recipe1.jpg", rating: 4 },
    { id: 2, title: "Recipe 2", description: "Delicious recipe 2", image: "/images/recipe2.jpg", rating: 5 },
    { id: 3, title: "Recipe 3", description: "Delicious recipe 3", image: "/images/recipe3.jpg", rating: 3 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {recipes.map((recipe) => (
        <Card key={recipe.id}>
          <CardHeader>
            <CardTitle>{recipe.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover mb-4" />
            <Rating value={recipe.rating} readOnly /> {/* Add Rating component */}
            <p>{recipe.description}</p>
            <Link to={`/recipes/${recipe.id}`} className="text-blue-500 hover:underline">View Recipe</Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Recipes;