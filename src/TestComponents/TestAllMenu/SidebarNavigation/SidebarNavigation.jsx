import React from "react";
import "./SidebarNavigation.css";

const SidebarNavigation = ({
  searchQuery,
  setSearchQuery,
  filters,
  setFilters,
  categoryOrder,
  filteredMenu,
  generateCategoryId,
}) => {
  return (
    <div className="sidebar-navigation">
      <div className="search-and-filter">
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="filters">
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="veg"
              checked={filters.veg}
              onChange={(e) => setFilters({ ...filters, veg: e.target.checked })}
            />
            <label className="form-check-label ms-2" htmlFor="veg">
              Veg
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="nonVeg"
              checked={filters.nonVeg}
              onChange={(e) =>
                setFilters({ ...filters, nonVeg: e.target.checked })
              }
            />
            <label className="form-check-label ms-2" htmlFor="nonVeg">
              Non-Veg
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="glutenFree"
              checked={filters.glutenFree}
              onChange={(e) =>
                setFilters({ ...filters, glutenFree: e.target.checked })
              }
            />
            <label className="form-check-label ms-2" htmlFor="glutenFree">
              Gluten Free
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="vegan"
              checked={filters.vegan}
              onChange={(e) =>
                setFilters({ ...filters, vegan: e.target.checked })
              }
            />
            <label className="form-check-label ms-2" htmlFor="vegan">
              Vegan
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="nutsFree"
              checked={filters.nutsFree}
              onChange={(e) =>
                setFilters({ ...filters, nutsFree: e.target.checked })
              }
            />
            <label className="form-check-label ms-2" htmlFor="nutsFree">
              Nuts Free
            </label>
          </div>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="recommended"
              checked={filters.recommended}
              onChange={(e) =>
                setFilters({ ...filters, recommended: e.target.checked })
              }
            />
            <label className="form-check-label ms-2" htmlFor="recommended">
              Recommended
            </label>
          </div>
        </div>
      </div>
      <div
        className="nav flex-column nav-pills sticky-side-nav"
        role="tablist"
        aria-orientation="vertical"
      >
        {categoryOrder
          .filter((category) =>
            Object.values(filteredMenu).find((item) => item.name === category)
          )
          .map((category) => {
            const key = Object.keys(filteredMenu).find(
              (key) => filteredMenu[key].name === category
            );
            return (
              <a
                key={key}
                className="nav-link"
                href={`#${generateCategoryId(category)}`}
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById(
                    generateCategoryId(category)
                  );
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {category}
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default SidebarNavigation;