import React, { useEffect, useRef } from "react";
import "./MobileNavigation.css";

const MobileNavigation = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  searchQuery,
  setSearchQuery,
  filters,
  setFilters,
  categoryOrder,
  filteredMenu,
  generateCategoryId,
}) => {
  const dropdownRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="mobile-nav-wrapper d-block d-md-none">
      <div
        className="mobile-nav-circle"
        onClick={(e) => {
          e.stopPropagation();
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
      >
        <div className="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div
          className="mobile-nav-dropdown"
          ref={dropdownRef}
        >
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
                id="veg-mobile"
                checked={filters.veg}
                onChange={(e) =>
                  setFilters({ ...filters, veg: e.target.checked })
                }
              />
              <label className="form-check-label ms-2" htmlFor="veg-mobile">
                Veg
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="nonVeg-mobile"
                checked={filters.nonVeg}
                onChange={(e) =>
                  setFilters({ ...filters, nonVeg: e.target.checked })
                }
              />
              <label className="form-check-label ms-2" htmlFor="nonVeg-mobile">
                Non-Veg
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="glutenFree-mobile"
                checked={filters.glutenFree}
                onChange={(e) =>
                  setFilters({ ...filters, glutenFree: e.target.checked })
                }
              />
              <label
                className="form-check-label ms-2"
                htmlFor="glutenFree-mobile"
              >
                Gluten Free
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="vegan-mobile"
                checked={filters.vegan}
                onChange={(e) =>
                  setFilters({ ...filters, vegan: e.target.checked })
                }
              />
              <label className="form-check-label ms-2" htmlFor="vegan-mobile">
                Vegan
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="nutsFree-mobile"
                checked={filters.nutsFree}
                onChange={(e) =>
                  setFilters({ ...filters, nutsFree: e.target.checked })
                }
              />
              <label
                className="form-check-label ms-2"
                htmlFor="nutsFree-mobile"
              >
                Nuts Free
              </label>
            </div>
            <div className="form-check mb-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="recommended-mobile"
                checked={filters.recommended}
                onChange={(e) =>
                  setFilters({ ...filters, recommended: e.target.checked })
                }
              />
              <label
                className="form-check-label ms-2"
                htmlFor="recommended-mobile"
              >
                Recommended
              </label>
            </div>
          </div>
          <ul className="list-unstyled">
            {categoryOrder
              .filter((category) =>
                Object.values(filteredMenu).find((item) => item.name === category)
              )
              .map((category) => {
                const key = Object.keys(filteredMenu).find(
                  (key) => filteredMenu[key].name === category
                );
                return (
                  <li key={key} className="mobile-nav-item">
                    <a
                      href={`#${generateCategoryId(category)}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const section = document.getElementById(
                          generateCategoryId(category)
                        );
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                        setIsMobileMenuOpen(false);
                      }}
                      className="mobile-nav-link"
                    >
                      {category}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;