import React from "react";
import "./MenuContent.css";
import foodLoading from "../../../assets/loading/food.gif";

const MenuContent = ({ categoryOrder, filteredMenu, generateCategoryId, isLoading }) => {
  if (isLoading) {
    // Display the loading GIF while data is loading
    return (
      <div className="loading-container">
        <img src={foodLoading} alt="Loading..." className="foodLoading" />
      </div>
    );
  }

  return (
    <div className="menu-content">
      {categoryOrder
        .filter((category) =>
          Object.values(filteredMenu).find((item) => item.name === category)
        )
        .map((category) => {
          const key = Object.keys(filteredMenu).find(
            (key) => filteredMenu[key].name === category
          );
          return (
            <div key={key} id={generateCategoryId(category)} className="mb-5">
              {/* Heading for the section */}
              <div className="section-box">
                <h3 className="text-center section-heading mb-4">{category}</h3>
              </div>

              <div className="row">
                {filteredMenu[key].items.map((item, index) => (
                  <div key={index} className="col-md-4 mb-4">
                    <div className="card h-100 shadow-sm">
                      <img
                        src={item.img}
                        className="card-img-top rounded-top"
                        alt={item.name}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <h4 className="card-title d-flex justify-content-between align-items-center">
                          {item.name}
                          {item.recommended && (
                            <span className="text-warning">★</span>
                          )}
                        </h4>
                        <p className="card-text">{item.description}</p>
                        <p className="font-weight-bold text-primary">
                          Price: ${item.price}
                        </p>
                        {item.containsNuts && (
                          <p className="text-danger small">Contains Nuts</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MenuContent;