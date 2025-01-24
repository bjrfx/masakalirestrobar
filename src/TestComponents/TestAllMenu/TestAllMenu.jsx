import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase"; // Adjust the path based on your file structure
import "./TestAllMenu.css"; // Import custom styles

import MobileNavigation from "./MobileNavigation/MobileNavigation";
import SidebarNavigation from "./SidebarNavigation/SidebarNavigation";
import MenuContent from "./MenuContent/MenuContent";

const TestAllMenu = () => {
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [menuData, setMenuData] = useState({});
  const [filteredMenu, setFilteredMenu] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    veg: false,
    nonVeg: false,
    glutenFree: false,
    vegan: false,
    nutsFree: false,
    recommended: false,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Define the desired order of categories
  const categoryOrder = [
    "Veg Appetizers",
    "Non-Veg Appetizers",
    "Tandoori Appetizers",
    "Veg Curries",
    "Non-Veg Curries",
    "Veg Biryani",
    "Non-Veg Biryani",
    "Roti",
    "Naan",
    "Steamed Rice",
    "Sides",
    "Desserts",
  ];

  // Fetch data from Firestore
  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuCollection = collection(db, "menu");
        const snapshot = await getDocs(menuCollection);
        const data = {};
        snapshot.forEach((doc) => {
          data[doc.id] = doc.data();
        });
        setMenuData(data);
        setFilteredMenu(data);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error("Error fetching menu data:", error);
        setIsLoading(false); // Ensure loading stops even if there's an error
      }
    };

    fetchData();
  }, []);

  // Handle filters and search
  useEffect(() => {
    let updatedMenu = JSON.parse(JSON.stringify(menuData));

    // Apply filters
    Object.keys(updatedMenu).forEach((key) => {
      updatedMenu[key].items = updatedMenu[key].items.filter((item) => {
        if (filters.veg && !item.veg) return false;
        if (filters.nonVeg && item.veg) return false;
        if (filters.glutenFree && item.containsGluten) return false;
        if (filters.vegan && !item.vegan) return false;
        if (filters.nutsFree && item.containsNuts) return false;
        if (filters.recommended && !item.recommended) return false;
        if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        return true;
      });
    });

    setFilteredMenu(updatedMenu);
  }, [filters, searchQuery, menuData]);

  // Helper function to generate category IDs for navigation
  const generateCategoryId = (name) => name.replace(/\s+/g, "-").toLowerCase();

  return (
    <div className="container-fluid menu-container">
      <div className="row">
        {/* Sidebar Navigation */}
        <div className="col-md-3 d-none d-md-block">
          <SidebarNavigation
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filters={filters}
            setFilters={setFilters}
            categoryOrder={categoryOrder}
            filteredMenu={filteredMenu}
            generateCategoryId={generateCategoryId}
          />
        </div>

        {/* Menu Content */}
        <div className="col-md-9">
          <MenuContent
            categoryOrder={categoryOrder}
            filteredMenu={filteredMenu}
            generateCategoryId={generateCategoryId}
            isLoading={isLoading} // Pass loading state to MenuContent
          />
        </div>
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filters={filters}
        setFilters={setFilters}
        categoryOrder={categoryOrder}
        filteredMenu={filteredMenu}
        generateCategoryId={generateCategoryId}
      />
    </div>
  );
};

export default TestAllMenu;