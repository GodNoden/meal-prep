"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, User, BarChart2, PlusCircle, Calendar } from 'lucide-react';

const FoodTrackingApp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample recipe data
  const recipes = [
    {
      id: 1,
      title: "Grilled Salmon with Avocado Salsa",
      image: "/api/placeholder/600/300",
      calories: 420,
      prepTime: "25 min"
    },
    {
      id: 2,
      title: "Quinoa Buddha Bowl",
      image: "/api/placeholder/600/300",
      calories: 380,
      prepTime: "20 min"
    },
    {
      id: 3,
      title: "Chicken & Vegetable Stir Fry",
      image: "/api/placeholder/600/300",
      calories: 450,
      prepTime: "30 min"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === recipes.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? recipes.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Header */}
      <div className="navbar bg-primary text-primary-content">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">NutriTrack</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-circle btn-ghost">
            <User size={20} />
          </button>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="card bg-base-100 shadow-sm m-4">
        <div className="card-body p-4">
          <h2 className="card-title text-lg">Hello, Alex!</h2>
          <p className="text-base-content/70">Ready to cook something healthy today?</p>
        </div>
      </div>

      {/* Recipe Carousel */}
      <div className="m-4">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body p-4">
            <h3 className="font-medium text-base-content mb-2">Featured Recipes</h3>
            
            <div className="carousel w-full rounded-box">
              {recipes.map((recipe, index) => (
                <div id={`slide${index}`} className="carousel-item relative w-full" key={recipe.id}
                    style={{ display: index === currentSlide ? 'block' : 'none' }}>
                  <div className="relative h-48 w-full">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h4 className="text-white font-semibold">{recipe.title}</h4>
                      <div className="flex text-white text-sm mt-1">
                        <span className="mr-3">{recipe.calories} cal</span>
                        <span>{recipe.prepTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Carousel Controls */}
              <button 
                onClick={prevSlide}
                className="btn btn-circle btn-sm bg-base-100 absolute left-2 top-1/2 -translate-y-1/2"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={nextSlide}
                className="btn btn-circle btn-sm bg-base-100 absolute right-2 top-1/2 -translate-y-1/2"
              >
                <ChevronRight size={16} />
              </button>
            </div>
            
            {/* Carousel Indicators */}
            <div className="flex justify-center mt-2">
              {recipes.map((_, index) => (
                <span 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`inline-block h-2 w-2 mx-1 rounded-full cursor-pointer ${index === currentSlide ? 'bg-primary' : 'bg-base-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Action Buttons */}
      <div className="grid grid-cols-3 gap-3 px-4 mb-6">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center p-4">
            <div className="avatar placeholder">
              <div className="bg-info-content/10 rounded-full w-12 flex items-center justify-center">
                <BarChart2 size={24} className="text-info" />
              </div>
            </div>
            <p className="text-sm font-medium mt-2">Progress</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center p-4">
            <div className="avatar placeholder">
              <div className="bg-success-content/10 rounded-full w-12 flex items-center justify-center">
                <PlusCircle size={24} className="text-success" />
              </div>
            </div>
            <p className="text-sm font-medium mt-2">Add Recipe</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center p-4">
            <div className="avatar placeholder">
              <div className="bg-secondary-content/10 rounded-full w-12 flex items-center justify-center">
                <Calendar size={24} className="text-secondary" />
              </div>
            </div>
            <p className="text-sm font-medium mt-2">Weekly Menu</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-4 mb-20">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body p-4">
            <h3 className="font-medium mb-3">Recent Activity</h3>
            <div className="space-y-3">
              <div className="alert bg-base-200">
                <div>
                  <div className="text-sm font-medium">You cooked Chicken Stir Fry</div>
                  <div className="text-xs opacity-70">Today, 2:30 PM</div>
                </div>
              </div>
              <div className="alert bg-base-200">
                <div>
                  <div className="text-sm font-medium">Added new recipe to favorites</div>
                  <div className="text-xs opacity-70">Yesterday, 5:45 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="btm-nav bg-base-100 border-t border-base-300">
        <button className="text-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
          </svg>
          <span className="btm-nav-label">Home</span>
        </button>
        <button>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span className="btm-nav-label">Search</span>
        </button>
        <button>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          <span className="btm-nav-label">Add</span>
        </button>
        <button>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <span className="btm-nav-label">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default FoodTrackingApp;