import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Category = () => {
  const [mealsCategory, setMealsCategory] = useState([]);
  const params = useParams();
  const fetchCategoryDetails = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
    );
    const data = await response.json();
    setMealsCategory(data.meals);
  };

  useEffect(() => {
    fetchCategoryDetails();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "2rem"
      }}
    >
      {mealsCategory.map((meal) => {
        return (
          <Card sx={{ maxWidth: 345 }} key={meal.idMeal}>
            <CardMedia
              component="img"
              height="140"
              src={meal.strMealThumb}
              alt="meal"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {meal.strMeal}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link to={`/recipe/${meal.idMeal}`} className="no-underline">
                  see Recipe
                </Link>
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
};

export default Category;
