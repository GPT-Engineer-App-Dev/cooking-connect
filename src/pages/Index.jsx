import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Rating } from "@/components/ui/rating"; // Import the Rating component

const Index = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Recipe Share</h1>
      <p className="text-lg mb-8">Discover and share amazing recipes from around the world.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Featured Recipe 1</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/images/recipe1.jpg" alt="Featured Recipe 1" className="w-full h-48 object-cover mb-4" />
            <Rating value={4} readOnly /> {/* Add Rating component */}
            <Link to="/recipes/1" className="text-blue-500 hover:underline">View Recipe</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Featured Recipe 2</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/images/recipe2.jpg" alt="Featured Recipe 2" className="w-full h-48 object-cover mb-4" />
            <Rating value={5} readOnly /> {/* Add Rating component */}
            <Link to="/recipes/2" className="text-blue-500 hover:underline">View Recipe</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Featured Recipe 3</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="/images/recipe3.jpg" alt="Featured Recipe 3" className="w-full h-48 object-cover mb-4" />
            <Rating value={3} readOnly /> {/* Add Rating component */}
            <Link to="/recipes/3" className="text-blue-500 hover:underline">View Recipe</Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;