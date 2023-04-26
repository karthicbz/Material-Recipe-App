import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Recipe = () => {
  let i = 0;
  const params = useParams();

  const [recipe, setRecipe] = useState([{ strMeal: "" }]);

  const fetchRecipe = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.recipe}`
    );
    const data = await response.json();
    // console.log(data);
    setRecipe(data.meals);
  };

  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <Card sx={{ maxWidth: "100%" }}>
        <CardMedia
          sx={{ height: 340 }}
          image={recipe[0].strMealThumb}
          title="recipe"
        />
        <Typography gutterBottom variant="h5" component="div">
          {recipe[0].strMeal}
        </Typography>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableCell>Ingredients</TableCell>
              <TableCell>Quantity</TableCell>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{recipe[0].strIngredient1}</TableCell>
                <TableCell>{recipe[0].strMeasure1}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe[0].strIngredient2}</TableCell>
                <TableCell>{recipe[0].strMeasure2}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe[0].strIngredient3}</TableCell>
                <TableCell>{recipe[0].strMeasure3}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe[0].strIngredient4}</TableCell>
                <TableCell>{recipe[0].strMeasure4}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe[0].strIngredient5}</TableCell>
                <TableCell>{recipe[0].strMeasure5}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe[0].strIngredient6}</TableCell>
                <TableCell>{recipe[0].strMeasure6}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe[0].strIngredient7}</TableCell>
                <TableCell>{recipe[0].strMeasure7}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe[0].strIngredient8}</TableCell>
                <TableCell>{recipe[0].strMeasure8}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>{recipe[0].strIngredient9}</TableCell>
                <TableCell>{recipe[0].strMeasure9}</TableCell>
              </TableRow>
              {recipe[0].strIngredient10 !== "" && (
                <TableRow>
                  <TableCell>{recipe[0].strIngredient10}</TableCell>
                  <TableCell>{recipe[0].strMeasure10}</TableCell>
                </TableRow>
              )}
              {recipe[0].strIngredient11 !== "" && (
                <TableRow>
                  <TableCell>{recipe[0].strIngredient11}</TableCell>
                  <TableCell>{recipe[0].strMeasure11}</TableCell>
                </TableRow>
              )}
              {recipe[0].strIngredient12 !== "" && (
                <TableRow>
                  <TableCell>{recipe[0].strIngredient12}</TableCell>
                  <TableCell>{recipe[0].strMeasure12}</TableCell>
                </TableRow>
              )}
              {recipe[0].strIngredient13 !== "" && (
                <TableRow>
                  <TableCell>{recipe[0].strIngredient13}</TableCell>
                  <TableCell>{recipe[0].strMeasure13}</TableCell>
                </TableRow>
              )}
              {recipe[0].strIngredient14 !== "" && (
                <TableRow>
                  <TableCell>{recipe[0].strIngredient14}</TableCell>
                  <TableCell>{recipe[0].strMeasure14}</TableCell>
                </TableRow>
              )}
              {recipe[0].strIngredient15 !== "" && (
                <TableRow>
                  <TableCell>{recipe[0].strIngredient15}</TableCell>
                  <TableCell>{recipe[0].strMeasure15}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography variant="body2" color="text.secondary">
          {recipe[0].strInstructions}
        </Typography>
      </Card>
    </div>
  );
};

export default Recipe;
