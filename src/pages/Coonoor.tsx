// import React, { useState, useEffect } from 'react';
// import { Clock, MapPin, Filter, Check, Star, Camera, Mountain, Flower, Coffee, Trees, Eye, Building2 } from 'lucide-react';
// import coonoorVideo from '../assets/coonoor_video.mp4';
// interface Attraction {
//   id: number;
//   name: string;
//   category: 'viewpoint' | 'park' | 'factory' | 'farm' | 'military';
//   duration: number;
//   description: string;
//   bestTime: string;
//   icon: React.ReactNode;
//   popularity: number;
// }

// const attractions: Attraction[] = [
//   {
//     id: 1,
//     name: "Valley View Point",
//     category: "viewpoint",
//     duration: 1.5,
//     description: "Panoramic valley views with lush green tea estates stretching endlessly",
//     bestTime: "Morning",
//     icon: <Eye className="attraction-icon-svg" />,
//     popularity: 5
//   },
//   {
//     id: 2,
//     name: "MRC (Military Campus)",
//     category: "military",
//     duration: 1,
//     description: "Historic military campus with impressive architecture (outside view)",
//     bestTime: "Morning",
//     icon: <Building2 className="attraction-icon-svg" />,
//     popularity: 3
//   },
//   {
//     id: 3,
//     name: "Gymkhana Golf Club",
//     category: "viewpoint",
//     duration: 1,
//     description: "Premium golf course with scenic mountain backdrop (outside view)",
//     bestTime: "Morning",
//     icon: <Mountain className="attraction-icon-svg" />,
//     popularity: 3
//   },
//   {
//     id: 4,
//     name: "Sim's Park",
//     category: "park",
//     duration: 2,
//     description: "Beautiful botanical garden with rare plant species and peaceful walks",
//     bestTime: "Morning",
//     icon: <Flower className="attraction-icon-svg" />,
//     popularity: 5
//   },
//   {
//     id: 5,
//     name: "Tea Garden",
//     category: "farm",
//     duration: 1.5,
//     description: "Sprawling tea plantations with guided tours and tea tasting",
//     bestTime: "Morning",
//     icon: <Coffee className="attraction-icon-svg" />,
//     popularity: 4
//   },
//   {
//     id: 6,
//     name: "Strawberry Farm Visit",
//     category: "farm",
//     duration: 1.5,
//     description: "Fresh strawberry picking experience with farm-to-table delights",
//     bestTime: "Afternoon",
//     icon: <Flower className="attraction-icon-svg" />,
//     popularity: 4
//   },
//   {
//     id: 7,
//     name: "Eucalyptus Factory",
//     category: "factory",
//     duration: 1,
//     description: "Learn about eucalyptus oil processing and natural products",
//     bestTime: "Afternoon",
//     icon: <Trees className="attraction-icon-svg" />,
//     popularity: 3
//   },
//   {
//     id: 8,
//     name: "Sleeping Lady View",
//     category: "viewpoint",
//     duration: 1,
//     description: "Unique rock formation resembling a sleeping lady silhouette",
//     bestTime: "Afternoon",
//     icon: <Eye className="attraction-icon-svg" />,
//     popularity: 4
//   },
//   {
//     id: 9,
//     name: "Lamps Rock View Point",
//     category: "viewpoint",
//     duration: 1.5,
//     description: "Spectacular cliff-top views of the Nilgiri mountains and valleys",
//     bestTime: "Evening",
//     icon: <Mountain className="attraction-icon-svg" />,
//     popularity: 5
//   },
//   {
//     id: 10,
//     name: "Dolphin Nose View Point",
//     category: "viewpoint",
//     duration: 1.5,
//     description: "Iconic viewpoint shaped like a dolphin's nose with breathtaking vistas",
//     bestTime: "Evening",
//     icon: <Eye className="attraction-icon-svg" />,
//     popularity: 5
//   }
// ];

// const categories = [
//   { value: 'all', label: 'All Places', icon: '🏔' },
//   { value: 'viewpoint', label: 'Viewpoints', icon: '👁' },
//   { value: 'park', label: 'Parks', icon: '🌸' },
//   { value: 'farm', label: 'Farms', icon: '🍓' },
//   { value: 'factory', label: 'Factories', icon: '🏭' },
//   { value: 'military', label: 'Heritage', icon: '🏛' }
// ];

// export default function CoonoorSightseeingPlanner() {
//   const [selectedAttractions, setSelectedAttractions] = useState<number[]>([]);
//   const [filterCategory, setFilterCategory] = useState<string>('all');
//   const [timeline, setTimeline] = useState<Array<{attraction: Attraction, startTime: string, endTime: string}>>([]);

//   const filteredAttractions = filterCategory === 'all' 
//     ? attractions 
//     : attractions.filter(attr => attr.category === filterCategory);

//   const toggleAttraction = (id: number) => {
//     setSelectedAttractions(prev => 
//       prev.includes(id) 
//         ? prev.filter(attractionId => attractionId !== id)
//         : [...prev, id]
//     );
//   };

//   const generateTimeline = () => {
//     const selected = attractions.filter(attr => selectedAttractions.includes(attr.id));
    
//     const sortedAttractions = selected.sort((a, b) => {
//       const timeOrder = { 'Morning': 1, 'Afternoon': 2, 'Evening': 3 };
//       return timeOrder[a.bestTime as keyof typeof timeOrder] - timeOrder[b.bestTime as keyof typeof timeOrder] || b.popularity - a.popularity;
//     });

//     let currentTime = 9;
//     const newTimeline = sortedAttractions.map(attraction => {
//       const startTime = `${Math.floor(currentTime)}:${(currentTime % 1) * 60 === 0 ? '00' : '30'}`;
//       currentTime += attraction.duration;
//       const endTime = `${Math.floor(currentTime)}:${(currentTime % 1) * 60 === 0 ? '00' : '30'}`;
      
//       return {
//         attraction,
//         startTime,
//         endTime
//       };
//     });

//     setTimeline(newTimeline);
//   };

//   useEffect(() => {
//     if (selectedAttractions.length > 0) {
//       generateTimeline();
//     } else {
//       setTimeline([]);
//     }
//   }, [selectedAttractions]);

//   const totalDuration = timeline.reduce((sum, item) => sum + item.attraction.duration, 0);

//   return (
//     <>
//       <style>{`
//         * {
//  margin: 0;
//  padding: 0;
//  box-sizing: border-box;
// }
// body {
//  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//  background: linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #faf5ff 100%);
//  min-height: 100vh;
// }
// .app-container {
//  min-height: 100vh;
//  background: linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #faf5ff 100%);
// }
// .header {
//  position: relative;
//  overflow: hidden;
//  /* Adjusted height for better video fit */
//  height: 400px;
//  color: white;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  text-align: center;
//  background: linear-gradient(135deg, #16a34a 0%, #2563eb 100%);
// }
// .header-video {
//  position: absolute;
//  top: 0;
//  left: 0;
//  width: 100%;
//  height: 100%;
//  /* Ensures the video covers the area without distortion */
//  object-fit: cover;
//  z-index: 0;
// }
// .header::after {
//  content: '';
//  position: absolute;
//  inset: 0;
//  background: rgba(0, 0, 0, 0.4);
//  z-index: 1;
// }
// .header-content {
//  position: relative;
//  z-index: 2;
//  padding: 0 1.5rem;
// }
// .header-title {
//  font-size: 3rem;
//  font-weight: bold;
//  margin-bottom: 1rem;
//  line-height: 1.2;
// }
// .header-subtitle {
//  font-size: 1.25rem;
//  opacity: 0.9;
//  margin-bottom: 1.5rem;
// }
// .header-hours {
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  gap: 1rem;
//  font-size: 1.125rem;
// }
// .container {
//  max-width: 1200px;
//  margin: 0 auto;
//  padding: 2rem 1.5rem;
// }
// .main-grid {
//  display: grid;
//  grid-template-columns: 1fr 1fr;
//  gap: 2rem;
// }
// @media (max-width: 1024px) {
//  .main-grid {
//    grid-template-columns: 1fr;
//  }
//  .header-title {
//    font-size: 2rem;
//  }
// }
// .panel {
//  background: white;
//  border-radius: 1rem;
//  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//  padding: 1.5rem;
//  margin-bottom: 1.5rem;
// }
// .panel-header {
//  display: flex;
//  align-items: center;
//  gap: 0.75rem;
//  margin-bottom: 1.5rem;
// }
// .panel-title {
//  font-size: 1.5rem;
//  font-weight: bold;
//  color: #1f2937;
// }
// .icon {
//  width: 1.5rem;
//  height: 1.5rem;
// }
// .filter-buttons {
//  display: flex;
//  flex-wrap: wrap;
//  gap: 0.5rem;
//  margin-bottom: 1.5rem;
// }
// .filter-btn {
//  padding: 0.5rem 1rem;
//  border-radius: 9999px;
//  font-size: 0.875rem;
//  font-weight: 500;
//  border: none;
//  cursor: pointer;
//  transition: all 0.2s ease;
//  background: #f3f4f6;
//  color: #374151;
// }
// .filter-btn:hover {
//  background: #e5e7eb;
//  transform: scale(1.05);
// }
// .filter-btn.active {
//  background: #2563eb;
//  color: white;
//  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
// }
// .attractions-list {
//  display: flex;
//  flex-direction: column;
//  gap: 0.75rem;
// }
// .attraction-card {
//  padding: 1rem;
//  border-radius: 0.75rem;
//  border: 2px solid #e5e7eb;
//  cursor: pointer;
//  transition: all 0.2s ease;
//  background: white;
// }
// .attraction-card:hover {
//  transform: scale(1.02);
//  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//  border-color: #93c5fd;
// }
// .attraction-card.selected {
//  border-color: #10b981;
//  background: #f0fdf4;
//  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
// }
// .attraction-content {
//  display: flex;
//  align-items: flex-start;
//  justify-content: space-between;
// }
// .attraction-main {
//  display: flex;
//  align-items: flex-start;
//  gap: 0.75rem;
//  flex: 1;
// }
// .attraction-icon {
//  padding: 0.5rem;
//  border-radius: 0.5rem;
//  background: #f3f4f6;
//  color: #4b5563;
//  transition: all 0.2s ease;
//  display: flex;
//  align-items: center;
//  justify-content: center;
// }
// .attraction-card.selected .attraction-icon {
//  background: #059669;
//  color: white;
// }
// .attraction-icon-svg {
//  width: 1.25rem;
//  height: 1.25rem;
// }
// .attraction-info {
//  flex: 1;
// }
// .attraction-name {
//  font-weight: 600;
//  color: #1f2937;
//  margin-bottom: 0.25rem;
//  font-size: 1rem;
// }
// .attraction-description {
//  font-size: 0.875rem;
//  color: #6b7280;
//  margin-bottom: 0.5rem;
//  line-height: 1.4;
// }
// .attraction-meta {
//  display: flex;
//  align-items: center;
//  gap: 1rem;
//  font-size: 0.875rem;
//  flex-wrap: wrap;
// }
// .meta-item {
//  display: flex;
//  align-items: center;
//  gap: 0.25rem;
// }
// .meta-icon {
//  width: 1rem;
//  height: 1rem;
// }
// .best-time {
//  color: #2563eb;
//  font-weight: 500;
// }
// .stars {
//  display: flex;
//  align-items: center;
//  gap: 1px;
// }
// .star {
//  width: 1rem;
//  height: 1rem;
//  color: #fbbf24;
// }
// .checkbox {
//  width: 1.5rem;
//  height: 1.5rem;
//  border-radius: 50%;
//  border: 2px solid #d1d5db;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  transition: all 0.2s ease;
//  flex-shrink: 0;
// }
// .attraction-card.selected .checkbox {
//  border-color: #10b981;
//  background: #10b981;
// }
// .checkmark {
//  width: 1rem;
//  height: 1rem;
//  color: white;
//  opacity: 0;
//  transition: opacity 0.2s ease;
// }
// .attraction-card.selected .checkmark {
//  opacity: 1;
// }
// .empty-timeline {
//  text-align: center;
//  padding: 3rem 0;
// }
// .empty-icon-circle {
//  width: 6rem;
//  height: 6rem;
//  margin: 0 auto 1rem;
//  background: #f3f4f6;
//  border-radius: 50%;
//  display: flex;
//  align-items: center;
//  justify-content: center;
// }
// .empty-icon {
//  width: 3rem;
//  height: 3rem;
//  color: #9ca3af;
// }
// .empty-title {
//  font-size: 1.25rem;
//  font-weight: 600;
//  color: #4b5563;
//  margin-bottom: 0.5rem;
// }
// .empty-description {
//  color: #6b7280;
//  line-height: 1.5;
// }
// .trip-summary {
//  background: linear-gradient(135deg, #e9d5ff 0%, #fce7f3 100%);
//  border-radius: 0.75rem;
//  padding: 1rem;
//  margin-bottom: 1.5rem;
//  display: flex;
//  justify-content: space-between;
//  align-items: center;
// }
// .summary-info h3 {
//  font-weight: 600;
//  color: #1f2937;
//  margin-bottom: 0.25rem;
// }
// .summary-info p {
//  font-size: 0.875rem;
//  color: #6b7280;
// }
// .timeline-items {
//  display: flex;
//  flex-direction: column;
//  gap: 1rem;
// }
// .timeline-item {
//  position: relative;
// }
// .timeline-line {
//  position: absolute;
//  left: 1.5rem;
//  top: 3.5rem;
//  width: 2px;
//  height: 4rem;
//  background: linear-gradient(to bottom, #60a5fa, #a855f7);
// }
// .timeline-content {
//  display: flex;
//  align-items: flex-start;
//  gap: 1rem;
//  padding: 1rem;
//  background: linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%);
//  border-radius: 0.75rem;
// }
// .timeline-number {
//  width: 3rem;
//  height: 3rem;
//  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
//  border-radius: 50%;
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  color: white;
//  font-weight: bold;
//  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//  flex-shrink: 0;
// }
// .timeline-info {
//  flex: 1;
// }
// .timeline-header {
//  display: flex;
//  align-items: center;
//  gap: 0.5rem;
//  margin-bottom: 0.5rem;
// }
// .timeline-name {
//  font-weight: 600;
//  color: #1f2937;
// }
// .timeline-description {
//  font-size: 0.875rem;
//  color: #6b7280;
//  margin-bottom: 0.5rem;
//  line-height: 1.4;
// }
// .timeline-meta {
//  display: flex;
//  align-items: center;
//  gap: 1rem;
//  font-size: 0.875rem;
//  color: #2563eb;
//  flex-wrap: wrap;
// }
// .tips-panel {
//  background: linear-gradient(135deg, #fefce8 0%, #fed7aa 100%);
//  border-radius: 0.75rem;
//  padding: 1.5rem;
//  border: 1px solid #fde68a;
// }
// .tips-title {
//  font-weight: 600;
//  color: #1f2937;
//  margin-bottom: 0.75rem;
//  font-size: 1rem;
// }
// .tips-list {
//  list-style: none;
//  display: flex;
//  flex-direction: column;
//  gap: 0.5rem;
// }

// .tips-item {
//  font-size: 0.875rem;
//  color: #374151;
//  line-height: 1.5;
// }
// @media (max-width: 640px) {
//  .container {
//    padding: 1rem;
//  }
//  .attraction-meta {
//    gap: 0.5rem;
//  }
//  .timeline-meta {
//    gap: 0.5rem;
//  }
//  .header-title {
//    font-size: 2rem;
//  }
//  .header-subtitle {
//    font-size: 1rem;
//  }
//  .header-hours {
//    font-size: 1rem;
//    flex-direction: column;
//    gap: 0.5rem;
//  }
// }
//       `}</style>
      
//       <div className="app-container">
//         <div className="header">
//           <video
//             className="header-video"
//             autoPlay
//             muted
//             loop
//             playsInline
//             onError={handleVideoError}
//             onLoadStart={() => console.log('Video loading started')}
//             onCanPlay={() => console.log('Video can play')}
//             onPlay={() => console.log('Video started playing')}
//           >
//             <source src={coonoorVideo} type="video/mp4" /> 
//           </video>
//           <div className="header-content">
//             <h1 className="header-title">Ooty Sightseeing Planner</h1>
//             <p className="header-subtitle">
//               Create your perfect day exploring the Queen of Hill Stations
//             </p>
//             <div className="header-hours">
//               <Clock className="icon" />
//               <span>Operating Hours: 9:00 AM - 6:00 PM</span>
//             </div>
//           </div>
//         </div>

//         <div className="container">
//           <div className="main-grid">
            
//             <div>
//               <div className="panel">
//                 <div className="panel-header">
//                   <Filter className="icon" style={{ color: '#2563eb' }} />
//                   <h2 className="panel-title">Choose Your Adventures</h2>
//                 </div>

//                 <div className="filter-buttons">
//                   {categories.map(category => (
//                     <button
//                       key={category.value}
//                       onClick={() => setFilterCategory(category.value)}
//                       className={`filter-btn ${filterCategory === category.value ? 'active' : ''}`}
//                     >
//                       {category.icon} {category.label}
//                     </button>
//                   ))}
//                 </div>

//                 <div className="attractions-list">
//                   {filteredAttractions.map(attraction => (
//                     <div
//                       key={attraction.id}
//                       onClick={() => toggleAttraction(attraction.id)}
//                       className={`attraction-card ${selectedAttractions.includes(attraction.id) ? 'selected' : ''}`}
//                     >
//                       <div className="attraction-content">
//                         <div className="attraction-main">
//                           <div className="attraction-icon">
//                             {attraction.icon}
//                           </div>
//                           <div className="attraction-info">
//                             <h3 className="attraction-name">{attraction.name}</h3>
//                             <p className="attraction-description">{attraction.description}</p>
//                             <div className="attraction-meta">
//                               <span className="meta-item">
//                                 <Clock className="meta-icon" />
//                                 {attraction.duration}h
//                               </span>
//                               <span className="best-time">
//                                 Best: {attraction.bestTime}
//                               </span>
//                               <div className="stars">
//                                 {[...Array(attraction.popularity)].map((_, i) => (
//                                   <Star key={i} className="star" fill="currentColor" />
//                                 ))}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                         <div className="checkbox">
//                           <Check className="checkmark" />
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div>
//               <div className="panel">
//                 <div className="panel-header">
//                   <MapPin className="icon" style={{ color: '#8b5cf6' }} />
//                   <h2 className="panel-title">Your Itinerary</h2>
//                 </div>

//                 {timeline.length === 0 ? (
//                   <div className="empty-timeline">
//                     <div className="empty-icon-circle">
//                       <MapPin className="empty-icon" />
//                     </div>
//                     <h3 className="empty-title">
//                       Select attractions to create your timeline
//                     </h3>
//                     <p className="empty-description">
//                       Choose from the attractions on the left to build your perfect Coonoor day trip!
//                     </p>
//                   </div>
//                 ) : (
//                   <>
//                     <div className="trip-summary">
//                       <div className="summary-info">
//                         <h3>Trip Summary</h3>
//                         <p>
//                           {selectedAttractions.length} attractions • {totalDuration} hours
//                         </p>
//                       </div>
//                       <div style={{ fontSize: '2rem' }}>🗓</div>
//                     </div>

//                     <div className="timeline-items">
//                       {timeline.map((item, index) => (
//                         <div key={item.attraction.id} className="timeline-item">
//                           {index < timeline.length - 1 && <div className="timeline-line"></div>}
                          
//                           <div className="timeline-content">
//                             <div className="timeline-number">
//                               {index + 1}
//                             </div>
//                             <div className="timeline-info">
//                               <div className="timeline-header">
//                                 {item.attraction.icon}
//                                 <h3 className="timeline-name">{item.attraction.name}</h3>
//                               </div>
//                               <p className="timeline-description">
//                                 {item.attraction.description}
//                               </p>
//                               <div className="timeline-meta">
//                                 <span className="meta-item">
//                                   <Clock className="meta-icon" />
//                                   {item.startTime} - {item.endTime}
//                                 </span>
//                                 <span>({item.attraction.duration}h)</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </>
//                 )}
//               </div>

//               <div className="tips-panel">
//                 <h3 className="tips-title">💡 Planning Tips</h3>
//                 <ul className="tips-list">
//                   <li className="tips-item">• Best views from viewpoints are in early morning with clear skies</li>
//                   <li className="tips-item">• Sim's Park is perfect for botanical photography and peaceful walks</li>
//                   <li className="tips-item">• Strawberry season is best from April to June for farm visits</li>
//                   <li className="tips-item">• Carry warm clothes as Coonoor weather can change quickly</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Filter, Check, Star, Camera, Mountain, Flower, Coffee, Trees, Eye, Building2 } from 'lucide-react';
import coonoorVideo from '../assets/coonoor_video.mp4';

interface Attraction {
  id: number;
  name: string;
  category: 'viewpoint' | 'park' | 'factory' | 'farm' | 'military';
  duration: number; // Duration in hours
  description: string;
  bestTime: string;
  icon: React.ReactNode;
  popularity: number;
}

const attractions: Attraction[] = [
    {
        id: 1,
        name: "Valley View Point",
        category: "viewpoint",
        duration: 1.5,
        description: "Panoramic valley views with lush green tea estates stretching endlessly",
        bestTime: "Morning",
        icon: <Eye className="attraction-icon-svg" />,
        popularity: 5
    },
    {
        id: 2,
        name: "MRC (Military Campus)",
        category: "military",
        duration: 1,
        description: "Historic military campus with impressive architecture (outside view)",
        bestTime: "Morning",
        icon: <Building2 className="attraction-icon-svg" />,
        popularity: 3
    },
    {
        id: 3,
        name: "Gymkhana Golf Club",
        category: "viewpoint",
        duration: 1,
        description: "Premium golf course with scenic mountain backdrop (outside view)",
        bestTime: "Morning",
        icon: <Mountain className="attraction-icon-svg" />,
        popularity: 3
    },
    {
        id: 4,
        name: "Sim's Park",
        category: "park",
        duration: 2,
        description: "Beautiful botanical garden with rare plant species and peaceful walks",
        bestTime: "Morning",
        icon: <Flower className="attraction-icon-svg" />,
        popularity: 5
    },
    {
        id: 5,
        name: "Tea Garden",
        category: "farm",
        duration: 1.5,
        description: "Sprawling tea plantations with guided tours and tea tasting",
        bestTime: "Morning",
        icon: <Coffee className="attraction-icon-svg" />,
        popularity: 4
    },
    {
        id: 6,
        name: "Strawberry Farm Visit",
        category: "farm",
        duration: 1.5,
        description: "Fresh strawberry picking experience with farm-to-table delights",
        bestTime: "Afternoon",
        icon: <Flower className="attraction-icon-svg" />,
        popularity: 4
    },
    {
        id: 7,
        name: "Eucalyptus Factory",
        category: "factory",
        duration: 1,
        description: "Learn about eucalyptus oil processing and natural products",
        bestTime: "Afternoon",
        icon: <Trees className="attraction-icon-svg" />,
        popularity: 3
    },
    {
        id: 8,
        name: "Sleeping Lady View",
        category: "viewpoint",
        duration: 1,
        description: "Unique rock formation resembling a sleeping lady silhouette",
        bestTime: "Afternoon",
        icon: <Eye className="attraction-icon-svg" />,
        popularity: 4
    },
    {
        id: 9,
        name: "Lamps Rock View Point",
        category: "viewpoint",
        duration: 1.5,
        description: "Spectacular cliff-top views of the Nilgiri mountains and valleys",
        bestTime: "Evening",
        icon: <Mountain className="attraction-icon-svg" />,
        popularity: 5
    },
    {
        id: 10,
        name: "Dolphin Nose View Point",
        category: "viewpoint",
        duration: 1.5,
        description: "Iconic viewpoint shaped like a dolphin's nose with breathtaking vistas",
        bestTime: "Evening",
        icon: <Eye className="attraction-icon-svg" />,
        popularity: 5
    }
];

const categories = [
  { value: 'all', label: 'All Places', icon: '🏔' },
  { value: 'viewpoint', label: 'Viewpoints', icon: '👁' },
  { value: 'park', label: 'Parks', icon: '🌸' },
  { value: 'farm', label: 'Farms', icon: '🍓' },
  { value: 'factory', label: 'Factories', icon: '🏭' },
  { value: 'military', label: 'Heritage', icon: '🏛' }
];

export default function CoonoorSightseeingPlanner() {
  const [selectedAttractions, setSelectedAttractions] = useState<number[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [timeline, setTimeline] = useState<Array<{attraction: Attraction, startTime: string, endTime: string}>>([]);

  const filteredAttractions = filterCategory === 'all' 
    ? attractions 
    : attractions.filter(attr => attr.category === filterCategory);

  const toggleAttraction = (id: number) => {
    setSelectedAttractions(prev => 
      prev.includes(id) 
        ? prev.filter(attractionId => attractionId !== id)
        : [...prev, id]
    );
  };

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error("Video Error:", e.type);
    // Hide the video element to prevent showing a broken player
    const videoElement = e.target as HTMLVideoElement;
    videoElement.style.display = 'none';
  };

  const generateTimeline = () => {
    const selected = attractions.filter(attr => selectedAttractions.includes(attr.id));
    
    const sortedAttractions = selected.sort((a, b) => {
      const timeOrder = { 'Morning': 1, 'Afternoon': 2, 'Evening': 3 };
      return timeOrder[a.bestTime as keyof typeof timeOrder] - timeOrder[b.bestTime as keyof typeof timeOrder] || b.popularity - a.popularity;
    });

    const formatTime = (totalMinutes: number) => {
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      return `${hours}:${minutes.toString().padStart(2, '0')}`;
    };

    let currentTimeInMinutes = 9 * 60; // Start at 9:00 AM
    const newTimeline = sortedAttractions.map(attraction => {
      const startTimeInMinutes = currentTimeInMinutes;
      const durationInMinutes = attraction.duration * 60;
      const endTimeInMinutes = startTimeInMinutes + durationInMinutes;
      
      currentTimeInMinutes = endTimeInMinutes; // Set start time for the next item

      return {
        attraction,
        startTime: formatTime(startTimeInMinutes),
        endTime: formatTime(endTimeInMinutes)
      };
    });

    setTimeline(newTimeline);
  };

  useEffect(() => {
    if (selectedAttractions.length > 0) {
      generateTimeline();
    } else {
      setTimeline([]);
    }
  // Disabling exhaustive-deps because we intentionally only want this to run when selectedAttractions change.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAttractions]);

  const totalDuration = timeline.reduce((sum, item) => sum + item.attraction.duration, 0);

  return (
    <>
      <style>{`
        /* CSS styles remain unchanged, paste the original CSS here */
        * {
 margin: 0;
 padding: 0;
 box-sizing: border-box;
}
body {
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
 background: linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #faf5ff 100%);
 min-height: 100vh;
}
.app-container {
 min-height: 100vh;
 background: linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #faf5ff 100%);
}
.header {
 position: relative;
 overflow: hidden;
 /* Adjusted height for better video fit */
 height: 400px;
 color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 text-align: center;
 background: linear-gradient(135deg, #16a34a 0%, #2563eb 100%);
}
.header-video {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 /* Ensures the video covers the area without distortion */
 object-fit: cover;
 z-index: 0;
}
.header::after {
 content: '';
 position: absolute;
 inset: 0;
 background: rgba(0, 0, 0, 0.4);
 z-index: 1;
}
.header-content {
 position: relative;
 z-index: 2;
 padding: 0 1.5rem;
}
.header-title {
 font-size: 3rem;
 font-weight: bold;
 margin-bottom: 1rem;
 line-height: 1.2;
}
.header-subtitle {
 font-size: 1.25rem;
 opacity: 0.9;
 margin-bottom: 1.5rem;
}
.header-hours {
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 1rem;
 font-size: 1.125rem;
}
.container {
 max-width: 1200px;
 margin: 0 auto;
 padding: 2rem 1.5rem;
}
.main-grid {
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 2rem;
}
@media (max-width: 1024px) {
 .main-grid {
  grid-template-columns: 1fr;
 }
 .header-title {
  font-size: 2rem;
 }
}
.panel {
 background: white;
 border-radius: 1rem;
 box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
 padding: 1.5rem;
 margin-bottom: 1.5rem;
}
.panel-header {
 display: flex;
 align-items: center;
 gap: 0.75rem;
 margin-bottom: 1.5rem;
}
.panel-title {
 font-size: 1.5rem;
 font-weight: bold;
 color: #1f2937;
}
.icon {
 width: 1.5rem;
 height: 1.5rem;
}
.filter-buttons {
 display: flex;
 flex-wrap: wrap;
 gap: 0.5rem;
 margin-bottom: 1.5rem;
}
.filter-btn {
 padding: 0.5rem 1rem;
 border-radius: 9999px;
 font-size: 0.875rem;
 font-weight: 500;
 border: none;
 cursor: pointer;
 transition: all 0.2s ease;
 background: #f3f4f6;
 color: #374151;
}
.filter-btn:hover {
 background: #e5e7eb;
 transform: scale(1.05);
}
.filter-btn.active {
 background: #2563eb;
 color: white;
 box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
.attractions-list {
 display: flex;
 flex-direction: column;
 gap: 0.75rem;
}
.attraction-card {
 padding: 1rem;
 border-radius: 0.75rem;
 border: 2px solid #e5e7eb;
 cursor: pointer;
 transition: all 0.2s ease;
 background: white;
}
.attraction-card:hover {
 transform: scale(1.02);
 box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
 border-color: #93c5fd;
}
.attraction-card.selected {
 border-color: #10b981;
 background: #f0fdf4;
 box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
.attraction-content {
 display: flex;
 align-items: flex-start;
 justify-content: space-between;
}
.attraction-main {
 display: flex;
 align-items: flex-start;
 gap: 0.75rem;
 flex: 1;
}
.attraction-icon {
 padding: 0.5rem;
 border-radius: 0.5rem;
 background: #f3f4f6;
 color: #4b5563;
 transition: all 0.2s ease;
 display: flex;
 align-items: center;
 justify-content: center;
}
.attraction-card.selected .attraction-icon {
 background: #059669;
 color: white;
}
.attraction-icon-svg {
 width: 1.25rem;
 height: 1.25rem;
}
.attraction-info {
 flex: 1;
}
.attraction-name {
 font-weight: 600;
 color: #1f2937;
 margin-bottom: 0.25rem;
 font-size: 1rem;
}
.attraction-description {
 font-size: 0.875rem;
 color: #6b7280;
 margin-bottom: 0.5rem;
 line-height: 1.4;
}
.attraction-meta {
 display: flex;
 align-items: center;
 gap: 1rem;
 font-size: 0.875rem;
 flex-wrap: wrap;
}
.meta-item {
 display: flex;
 align-items: center;
 gap: 0.25rem;
}
.meta-icon {
 width: 1rem;
 height: 1rem;
}
.best-time {
 color: #2563eb;
 font-weight: 500;
}
.stars {
 display: flex;
 align-items: center;
 gap: 1px;
}
.star {
 width: 1rem;
 height: 1rem;
 color: #fbbf24;
}
.checkbox {
 width: 1.5rem;
 height: 1.5rem;
 border-radius: 50%;
 border: 2px solid #d1d5db;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: all 0.2s ease;
 flex-shrink: 0;
}
.attraction-card.selected .checkbox {
 border-color: #10b981;
 background: #10b981;
}
.checkmark {
 width: 1rem;
 height: 1rem;
 color: white;
 opacity: 0;
 transition: opacity 0.2s ease;
}
.attraction-card.selected .checkmark {
 opacity: 1;
}
.empty-timeline {
 text-align: center;
 padding: 3rem 0;
}
.empty-icon-circle {
 width: 6rem;
 height: 6rem;
 margin: 0 auto 1rem;
 background: #f3f4f6;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
}
.empty-icon {
 width: 3rem;
 height: 3rem;
 color: #9ca3af;
}
.empty-title {
 font-size: 1.25rem;
 font-weight: 600;
 color: #4b5563;
 margin-bottom: 0.5rem;
}
.empty-description {
 color: #6b7280;
 line-height: 1.5;
}
.trip-summary {
 background: linear-gradient(135deg, #e9d5ff 0%, #fce7f3 100%);
 border-radius: 0.75rem;
 padding: 1rem;
 margin-bottom: 1.5rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.summary-info h3 {
 font-weight: 600;
 color: #1f2937;
 margin-bottom: 0.25rem;
}
.summary-info p {
 font-size: 0.875rem;
 color: #6b7280;
}
.timeline-items {
 display: flex;
 flex-direction: column;
 gap: 1rem;
}
.timeline-item {
 position: relative;
}
.timeline-line {
 position: absolute;
 left: 1.5rem;
 top: 3.5rem;
 width: 2px;
 height: calc(100% - 1rem); /* Adjusted for better connection */
 background: linear-gradient(to bottom, #60a5fa, #a855f7);
}
.timeline-content {
 display: flex;
 align-items: flex-start;
 gap: 1rem;
 padding: 1rem;
 background: linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%);
 border-radius: 0.75rem;
}
.timeline-number {
 width: 3rem;
 height: 3rem;
 background: linear-gradient(135deg, #3b82f6, #8b5cf6);
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 color: white;
 font-weight: bold;
 box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
 flex-shrink: 0;
}
.timeline-info {
 flex: 1;
}
.timeline-header {
 display: flex;
 align-items: center;
 gap: 0.5rem;
 margin-bottom: 0.5rem;
}
.timeline-name {
 font-weight: 600;
 color: #1f2937;
}
.timeline-description {
 font-size: 0.875rem;
 color: #6b7280;
 margin-bottom: 0.5rem;
 line-height: 1.4;
}
.timeline-meta {
 display: flex;
 align-items: center;
 gap: 1rem;
 font-size: 0.875rem;
 color: #2563eb;
 flex-wrap: wrap;
}
.tips-panel {
 background: linear-gradient(135deg, #fefce8 0%, #fed7aa 100%);
 border-radius: 0.75rem;
 padding: 1.5rem;
 border: 1px solid #fde68a;
}
.tips-title {
 font-weight: 600;
 color: #1f2937;
 margin-bottom: 0.75rem;
 font-size: 1rem;
}
.tips-list {
 list-style: none;
 display: flex;
 flex-direction: column;
 gap: 0.5rem;
}

.tips-item {
 font-size: 0.875rem;
 color: #374151;
 line-height: 1.5;
}
@media (max-width: 640px) {
 .container {
  padding: 1rem;
 }
 .attraction-meta {
  gap: 0.5rem;
 }
 .timeline-meta {
  gap: 0.5rem;
 }
 .header-title {
  font-size: 2rem;
 }
 .header-subtitle {
  font-size: 1rem;
 }
 .header-hours {
  font-size: 1rem;
  flex-direction: column;
  gap: 0.5rem;
 }
}
      `}</style>
      
      <div className="app-container">
        <div className="header">
          <video
            className="header-video"
            autoPlay
            muted
            loop
            playsInline
            onError={handleVideoError}
          >
            <source src={coonoorVideo} type="video/mp4" /> 
            Your browser does not support the video tag.
          </video>
          <div className="header-content">
            <h1 className="header-title">Coonoor Sightseeing Planner</h1>
            <p className="header-subtitle">
              Create your perfect day exploring the scenic hills of Coonoor
            </p>
            <div className="header-hours">
              <Clock className="icon" />
              <span>Operating Hours: 9:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="main-grid">
            
            <div>
              <div className="panel">
                <div className="panel-header">
                  <Filter className="icon" style={{ color: '#2563eb' }} />
                  <h2 className="panel-title">Choose Your Adventures</h2>
                </div>

                <div className="filter-buttons">
                  {categories.map(category => (
                    <button
                      key={category.value}
                      onClick={() => setFilterCategory(category.value)}
                      className={`filter-btn ${filterCategory === category.value ? 'active' : ''}`}
                    >
                      {category.icon} {category.label}
                    </button>
                  ))}
                </div>

                <div className="attractions-list">
                  {filteredAttractions.map(attraction => (
                    <div
                      key={attraction.id}
                      onClick={() => toggleAttraction(attraction.id)}
                      className={`attraction-card ${selectedAttractions.includes(attraction.id) ? 'selected' : ''}`}
                    >
                      <div className="attraction-content">
                        <div className="attraction-main">
                          <div className="attraction-icon">
                            {attraction.icon}
                          </div>
                          <div className="attraction-info">
                            <h3 className="attraction-name">{attraction.name}</h3>
                            <p className="attraction-description">{attraction.description}</p>
                            <div className="attraction-meta">
                              <span className="meta-item">
                                <Clock className="meta-icon" />
                                {attraction.duration}h
                              </span>
                              <span className="best-time">
                                Best: {attraction.bestTime}
                              </span>
                              <div className="stars">
                                {[...Array(attraction.popularity)].map((_, i) => (
                                  <Star key={i} className="star" fill="currentColor" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="checkbox">
                          <Check className="checkmark" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="panel">
                <div className="panel-header">
                  <MapPin className="icon" style={{ color: '#8b5cf6' }} />
                  <h2 className="panel-title">Your Itinerary</h2>
                </div>

                {timeline.length === 0 ? (
                  <div className="empty-timeline">
                    <div className="empty-icon-circle">
                      <MapPin className="empty-icon" />
                    </div>
                    <h3 className="empty-title">
                      Select attractions to create your timeline
                    </h3>
                    <p className="empty-description">
                      Choose from the attractions on the left to build your perfect Coonoor day trip!
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="trip-summary">
                      <div className="summary-info">
                        <h3>Trip Summary</h3>
                        <p>
                          {selectedAttractions.length} attractions • {totalDuration} hours
                        </p>
                      </div>
                      <div style={{ fontSize: '2rem' }}>🗓</div>
                    </div>

                    <div className="timeline-items">
                      {timeline.map((item, index) => (
                        <div key={item.attraction.id} className="timeline-item">
                          {index < timeline.length - 1 && <div className="timeline-line"></div>}
                          
                          <div className="timeline-content">
                            <div className="timeline-number">
                              {index + 1}
                            </div>
                            <div className="timeline-info">
                              <div className="timeline-header">
                                {item.attraction.icon}
                                <h3 className="timeline-name">{item.attraction.name}</h3>
                              </div>
                              <p className="timeline-description">
                                {item.attraction.description}
                              </p>
                              <div className="timeline-meta">
                                <span className="meta-item">
                                  <Clock className="meta-icon" />
                                  {item.startTime} - {item.endTime}
                                </span>
                                <span>({item.attraction.duration}h)</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="tips-panel">
                <h3 className="tips-title">💡 Planning Tips</h3>
                <ul className="tips-list">
                  <li className="tips-item">• Best views from viewpoints are in early morning with clear skies</li>
                  <li className="tips-item">• Sim's Park is perfect for botanical photography and peaceful walks</li>
                  <li className="tips-item">• Strawberry season is best from April to June for farm visits</li>
                  <li className="tips-item">• Carry warm clothes as Coonoor weather can change quickly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}