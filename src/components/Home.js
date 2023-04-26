import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import CardHeader from "@mui/material/CardHeader";

const Home = () => {
  const [mealsCategory, setMealsCategory] = useState([]);

  const fetchMealCategory = async () => {
    const mealCategoryResponse = await fetch(
      "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
    );
    const data = await mealCategoryResponse.json();
    setMealsCategory(data.meals);
  };

  useEffect(() => {
    fetchMealCategory();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <CardHeader title="Choose a Category" />
      {mealsCategory.map((category) => {
        return (
          <List>
            <ListItem disablePadding>
              <ListItemButton key={category.strCategory}>
                <Link to={`/${category.strCategory}`} className="no-underline">
                  <ListItemText primary={category.strCategory} />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        );
      })}
    </div>
  );
};

export default Home;
