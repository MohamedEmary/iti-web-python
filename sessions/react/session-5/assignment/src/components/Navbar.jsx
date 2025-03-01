import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getCategories } from "../services/api";

function Navbar({ onCategorySelect }) {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Shop
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => onCategorySelect(null)}>
                All Products
              </button>
            </li>
            {categories.map((category) => (
              <li key={category} className="nav-item">
                <button
                  className="nav-link btn btn-link"
                  onClick={() => onCategorySelect(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
