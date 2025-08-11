// import React, { useState, useEffect } from 'react';
// import { Clock, MapPin, Filter, Check, Star, Camera, Mountain, Flower, Coffee } from 'lucide-react';

// interface Attraction {
//   id: number;
//   name: string;
//   category: 'nature' | 'entertainment' | 'factory' | 'garden';
//   duration: number;
//   description: string;
//   bestTime: string;
//   icon: React.ReactNode;
//   popularity: number;
// }

// const attractions: Attraction[] = [
//   {
//     id: 1,
//     name: "Botanical Garden",
//     category: "garden",
//     duration: 2,
//     description: "Historic garden with rare plants and beautiful landscapes",
//     bestTime: "Morning",
//     icon: <Flower className="attraction-icon-svg" />,
//     popularity: 5
//   },
//   {
//     id: 2,
//     name: "Tea Factory",
//     category: "factory",
//     duration: 1.5,
//     description: "Learn about tea processing and enjoy fresh tea tasting",
//     bestTime: "Morning",
//     icon: <Coffee className="attraction-icon-svg" />,
//     popularity: 4
//   },
//   {
//     id: 3,
//     name: "Chocolate Factory",
//     category: "factory",
//     duration: 1,
//     description: "Sweet experience with chocolate making demonstrations",
//     bestTime: "Afternoon",
//     icon: <Coffee className="attraction-icon-svg" />,
//     popularity: 4
//   },
//   {
//     id: 4,
//     name: "Wax World",
//     category: "entertainment",
//     duration: 1.5,
//     description: "Museum with lifelike wax figures of celebrities",
//     bestTime: "Afternoon",
//     icon: <Camera className="attraction-icon-svg" />,
//     popularity: 3
//   },
//   {
//     id: 5,
//     name: "Doddabetta Peak",
//     category: "nature",
//     duration: 2.5,
//     description: "Highest peak in Nilgiris with panoramic views",
//     bestTime: "Morning",
//     icon: <Mountain className="attraction-icon-svg" />,
//     popularity: 5
//   },
//   {
//     id: 6,
//     name: "Rose Garden",
//     category: "garden",
//     duration: 1.5,
//     description: "Beautiful rose varieties in a scenic setting",
//     bestTime: "Morning",
//     icon: <Flower className="attraction-icon-svg" />,
//     popularity: 4
//   },
//   {
//     id: 7,
//     name: "Ooty Lake (Boat House)",
//     category: "nature",
//     duration: 2,
//     description: "Serene lake with boating and scenic walks",
//     bestTime: "Evening",
//     icon: <MapPin className="attraction-icon-svg" />,
//     popularity: 5
//   },
//   {
//     id: 8,
//     name: "Thread Garden",
//     category: "garden",
//     duration: 1,
//     description: "Unique garden with artificial plants made from thread",
//     bestTime: "Afternoon",
//     icon: <Flower className="attraction-icon-svg" />,
//     popularity: 3
//   }
// ];

// const categories = [
//   { value: 'all', label: 'All Places', icon: '🏔' },
//   { value: 'nature', label: 'Nature', icon: '🌿' },
//   { value: 'garden', label: 'Gardens', icon: '🌸' },
//   { value: 'factory', label: 'Factories', icon: '🏭' },
//   { value: 'entertainment', label: 'Entertainment', icon: '🎭' }
// ];

// export default function OotySightseeingPlanner() {
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
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//         }

//         body {
//           font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//           background: linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #faf5ff 100%);
//           min-height: 100vh;
//         }

//         .app-container {
//           min-height: 100vh;
//           background: linear-gradient(135deg, #f0fdf4 0%, #eff6ff 50%, #faf5ff 100%);
//         }

//         .header {
//            background: linear-gradient(135deg, #16a34a 0%, #2563eb 100%);
          
//           color: white;
//           padding: 3rem 1.5rem;
//           text-align: center;
//         }

//         .header-title {
//           font-size: 3rem;
//           font-weight: bold;
//           margin-bottom: 1rem;
//           line-height: 1.2;
//         }

//         .header-subtitle {
//           font-size: 1.25rem;
//           opacity: 0.9;
//           margin-bottom: 1.5rem;
//         }

//         .header-hours {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           gap: 1rem;
//           font-size: 1.125rem;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 2rem 1.5rem;
//         }

//         .main-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 2rem;
//         }

//         @media (max-width: 1024px) {
//           .main-grid {
//             grid-template-columns: 1fr;
//           }
//           .header-title {
//             font-size: 2rem;
//           }
//         }

//         .panel {
//           background: white;
//           border-radius: 1rem;
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//           padding: 1.5rem;
//           margin-bottom: 1.5rem;
//         }

//         .panel-header {
//           display: flex;
//           align-items: center;
//           gap: 0.75rem;
//           margin-bottom: 1.5rem;
//         }

//         .panel-title {
//           font-size: 1.5rem;
//           font-weight: bold;
//           color: #1f2937;
//         }

//         .icon {
//           width: 1.5rem;
//           height: 1.5rem;
//         }

//         .filter-buttons {
//           display: flex;
//           flex-wrap: wrap;
//           gap: 0.5rem;
//           margin-bottom: 1.5rem;
//         }

//         .filter-btn {
//           padding: 0.5rem 1rem;
//           border-radius: 9999px;
//           font-size: 0.875rem;
//           font-weight: 500;
//           border: none;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           background: #f3f4f6;
//           color: #374151;
//         }

//         .filter-btn:hover {
//           background: #e5e7eb;
//           transform: scale(1.05);
//         }

//         .filter-btn.active {
//           background: #2563eb;
//           color: white;
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//         }

//         .attractions-list {
//           display: flex;
//           flex-direction: column;
//           gap: 0.75rem;
//         }

//         .attraction-card {
//           padding: 1rem;
//           border-radius: 0.75rem;
//           border: 2px solid #e5e7eb;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           background: white;
//         }

//         .attraction-card:hover {
//           transform: scale(1.02);
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//           border-color: #93c5fd;
//         }

//         .attraction-card.selected {
//           border-color: #10b981;
//           background: #f0fdf4;
//           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
//         }

//         .attraction-content {
//           display: flex;
//           align-items: flex-start;
//           justify-content: space-between;
//         }

//         .attraction-main {
//           display: flex;
//           align-items: flex-start;
//           gap: 0.75rem;
//           flex: 1;
//         }

//         .attraction-icon {
//           padding: 0.5rem;
//           border-radius: 0.5rem;
//           background: #f3f4f6;
//           color: #4b5563;
//           transition: all 0.2s ease;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .attraction-card.selected .attraction-icon {
//           background: #059669;
//           color: white;
//         }

//         .attraction-icon-svg {
//           width: 1.25rem;
//           height: 1.25rem;
//         }

//         .attraction-info {
//           flex: 1;
//         }

//         .attraction-name {
//           font-weight: 600;
//           color: #1f2937;
//           margin-bottom: 0.25rem;
//           font-size: 1rem;
//         }

//         .attraction-description {
//           font-size: 0.875rem;
//           color: #6b7280;
//           margin-bottom: 0.5rem;
//           line-height: 1.4;
//         }

//         .attraction-meta {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           font-size: 0.875rem;
//           flex-wrap: wrap;
//         }

//         .meta-item {
//           display: flex;
//           align-items: center;
//           gap: 0.25rem;
//         }

//         .meta-icon {
//           width: 1rem;
//           height: 1rem;
//         }

//         .best-time {
//           color: #2563eb;
//           font-weight: 500;
//         }

//         .stars {
//           display: flex;
//           align-items: center;
//           gap: 1px;
//         }

//         .star {
//           width: 1rem;
//           height: 1rem;
//           color: #fbbf24;
//         }

//         .checkbox {
//           width: 1.5rem;
//           height: 1.5rem;
//           border-radius: 50%;
//           border: 2px solid #d1d5db;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.2s ease;
//           flex-shrink: 0;
//         }

//         .attraction-card.selected .checkbox {
//           border-color: #10b981;
//           background: #10b981;
//         }

//         .checkmark {
//           width: 1rem;
//           height: 1rem;
//           color: white;
//           opacity: 0;
//           transition: opacity 0.2s ease;
//         }

//         .attraction-card.selected .checkmark {
//           opacity: 1;
//         }

//         .empty-timeline {
//           text-align: center;
//           padding: 3rem 0;
//         }

//         .empty-icon-circle {
//           width: 6rem;
//           height: 6rem;
//           margin: 0 auto 1rem;
//           background: #f3f4f6;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .empty-icon {
//           width: 3rem;
//           height: 3rem;
//           color: #9ca3af;
//         }

//         .empty-title {
//           font-size: 1.25rem;
//           font-weight: 600;
//           color: #4b5563;
//           margin-bottom: 0.5rem;
//         }

//         .empty-description {
//           color: #6b7280;
//           line-height: 1.5;
//         }

//         .trip-summary {
//           background: linear-gradient(135deg, #e9d5ff 0%, #fce7f3 100%);
//           border-radius: 0.75rem;
//           padding: 1rem;
//           margin-bottom: 1.5rem;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//         }

//         .summary-info h3 {
//           font-weight: 600;
//           color: #1f2937;
//           margin-bottom: 0.25rem;
//         }

//         .summary-info p {
//           font-size: 0.875rem;
//           color: #6b7280;
//         }

//         .timeline-items {
//           display: flex;
//           flex-direction: column;
//           gap: 1rem;
//         }

//         .timeline-item {
//           position: relative;
//         }

//         .timeline-line {
//           position: absolute;
//           left: 1.5rem;
//           top: 3.5rem;
//           width: 2px;
//           height: 4rem;
//           background: linear-gradient(to bottom, #60a5fa, #a855f7);
//         }

//         .timeline-content {
//           display: flex;
//           align-items: flex-start;
//           gap: 1rem;
//           padding: 1rem;
//           background: linear-gradient(135deg, #eff6ff 0%, #faf5ff 100%);
//           border-radius: 0.75rem;
//         }

//         .timeline-number {
//           width: 3rem;
//           height: 3rem;
//           background: linear-gradient(135deg, #3b82f6, #8b5cf6);
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           font-weight: bold;
//           box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
//           flex-shrink: 0;
//         }

//         .timeline-info {
//           flex: 1;
//         }

//         .timeline-header {
//           display: flex;
//           align-items: center;
//           gap: 0.5rem;
//           margin-bottom: 0.5rem;
//         }

//         .timeline-name {
//           font-weight: 600;
//           color: #1f2937;
//         }

//         .timeline-description {
//           font-size: 0.875rem;
//           color: #6b7280;
//           margin-bottom: 0.5rem;
//           line-height: 1.4;
//         }

//         .timeline-meta {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           font-size: 0.875rem;
//           color: #2563eb;
//           flex-wrap: wrap;
//         }

//         .tips-panel {
//           background: linear-gradient(135deg, #fefce8 0%, #fed7aa 100%);
//           border-radius: 0.75rem;
//           padding: 1.5rem;
//           border: 1px solid #fde68a;
//         }

//         .tips-title {
//           font-weight: 600;
//           color: #1f2937;
//           margin-bottom: 0.75rem;
//           font-size: 1rem;
//         }

//         .tips-list {
//           list-style: none;
//           display: flex;
//           flex-direction: column;
//           gap: 0.5rem;
//         }

//         .tips-item {
//           font-size: 0.875rem;
//           color: #374151;
//           line-height: 1.5;
//         }

//         @media (max-width: 640px) {
//           .container {
//             padding: 1rem;
//           }
          
//           .attraction-meta {
//             gap: 0.5rem;
//           }
          
//           .timeline-meta {
//             gap: 0.5rem;
//           }
//         }
      
// //       .header {
// //   position: relative;
// //   background: url('https://images.unsplash.com/photo-1559147861-32715680aef8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0') 
// //               center/cover no-repeat;
// //   color: white;
// //   padding: 3rem 1.5rem;
// //   text-align: center;
// // }

// // .header::before {
// //   content: '';
// //   position: absolute;
// //   top: 0;
// //   left: 0;
// //   width: 100%;
// //   height: 100%;
// //   background: rgba(0, 0, 0, 0.4); /* dark overlay */
// // }

// // .header > * {
// //   position: relative;
// //   z-index: 1; /* keeps text above overlay */
// // }
// //   .header {
// //   position: relative;
// //   overflow: hidden;
// //   height: 300px; /* Adjust as needed */
// //   color: white;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   text-align: center;
// // }

// .header-video {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: 0;
// }

// .header::after {
//   content: '';
//   position: absolute;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.4); /* dark overlay for readability */
//   z-index: 1;
// }

// .header-content {
//   position: relative;
//   z-index: 2;
// }
// .header {
//   position: relative;
//   overflow: hidden;
//   height: 300px; /* Adjust height if needed */
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
// }

// .header-video {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   z-index: 0;
// }

// .header::after {
//   content: '';
//   position: absolute;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.4); /* Dark overlay */
//   z-index: 1;
// }

// .header-content {
//   position: relative;
//   z-index: 2;
// }

// .header-title {
//   font-size: 2rem;
//   margin-bottom: 0.5rem;
// }

// .header-subtitle {
//   font-size: 1.2rem;
// }

// .header-hours {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 0.5rem;
//   margin-top: 1rem;
// }

// `}</style>
      
//       <div className="app-container">
//         {/* <div className="header">
//           <div>
//             <h1 className="header-title">Ooty Sightseeing Planner</h1>
//             <p className="header-subtitle">
//               Create your perfect day exploring the Queen of Hill Stations
//             </p>
//             <div className="header-hours">
//               <Clock className="icon" />
//               <span>Operating Hours: 9:00 AM - 6:00 PM</span>
//             </div>
//           </div>
//         </div> */}
//         <div className="header">
//   {/* <video
//   className="header-video"
//   src="/assets/ooty_video.mp4"
//   autoPlay
//   muted
//   loop
//   playsInline
// ></video> */}

//         <div className="header">
//   <video
//     className="header-video"
//     autoPlay
//     muted
//     loop
//     playsInline
//     onError={(e) => console.error('Video failed to load:', e)}
//   >
//     <source src="/assets/ooty_video.mp4" type="video/mp4" />
//     <source src="https://cdn.pixabay.com/vimeo/271131030/tea-plantation-12006.mp4?width=1920&hash=4aef9bda12ce19c2bb5e4b15d78f9aff0f9c09e1" type="video/mp4" />
//     Your browser does not support the video tag.
//   </video>


//   <div className="header-content">
//     <h1 className="header-title">Ooty Sightseeing Planner</h1>
//     <p className="header-subtitle">
//       Create your perfect day exploring the Queen of Hill Stations
//     </p>
//     <div className="header-hours">
//       <Clock className="icon" />
//       <span>Operating Hours: 9:00 AM - 6:00 PM</span>
//     </div>
//   </div>
// </div>



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
//                       Choose from the attractions on the left to build your perfect Ooty day trip!
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
//                   <li className="tips-item">• Morning visits are best for gardens and peaks (clearer views)</li>
//                   <li className="tips-item">• Carry warm clothes - Ooty weather can be unpredictable</li>
//                   <li className="tips-item">• Book boat rides early at Ooty Lake for shorter queues</li>
//                   <li className="tips-item">• Tea factory tours include free tastings</li>
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
import { Clock, MapPin, Filter, Check, Star, Camera, Mountain, Flower, Coffee } from 'lucide-react';
import ootyVideo from '../assets/ooty_video.mp4';
interface Attraction {
  id: number;
  name: string;
  category: 'nature' | 'entertainment' | 'factory' | 'garden';
  duration: number;
  description: string;
  bestTime: string;
  icon: React.ReactNode;
  popularity: number;
}
const attractions: Attraction[] = [
  {
    id: 1,
    name: "Botanical Garden",
    category: "garden",
    duration: 2,
    description: "Historic garden with rare plants and beautiful landscapes",
    bestTime: "Morning",
    icon: <Flower className="attraction-icon-svg" />,
    popularity: 5
  },
  {
    id: 2,
    name: "Tea Factory",
    category: "factory",
    duration: 1.5,
    description: "Learn about tea processing and enjoy fresh tea tasting",
    bestTime: "Morning",
    icon: <Coffee className="attraction-icon-svg" />,
    popularity: 4
  },
  {
    id: 3,
    name: "Chocolate Factory",
    category: "factory",
    duration: 1,
    description: "Sweet experience with chocolate making demonstrations",
    bestTime: "Afternoon",
    icon: <Coffee className="attraction-icon-svg" />,
    popularity: 4
  },
  {
    id: 4,
    name: "Wax World",
    category: "entertainment",
    duration: 1.5,
    description: "Museum with lifelike wax figures of celebrities",
    bestTime: "Afternoon",
    icon: <Camera className="attraction-icon-svg" />,
    popularity: 3
  },
  {
    id: 5,
    name: "Doddabetta Peak",
    category: "nature",
    duration: 2.5,
    description: "Highest peak in Nilgiris with panoramic views",
    bestTime: "Morning",
    icon: <Mountain className="attraction-icon-svg" />,
    popularity: 5
  },
  {
    id: 6,
    name: "Rose Garden",
    category: "garden",
    duration: 1.5,
    description: "Beautiful rose varieties in a scenic setting",
    bestTime: "Morning",
    icon: <Flower className="attraction-icon-svg" />,
    popularity: 4
  },
  {
    id: 7,
    name: "Ooty Lake (Boat House)",
    category: "nature",
    duration: 2,
    description: "Serene lake with boating and scenic walks",
    bestTime: "Evening",
    icon: <MapPin className="attraction-icon-svg" />,
    popularity: 5
  },
  {
    id: 8,
    name: "Thread Garden",
    category: "garden",
    duration: 1,
    description: "Unique garden with artificial plants made from thread",
    bestTime: "Afternoon",
    icon: <Flower className="attraction-icon-svg" />,
    popularity: 3
  }
];
const categories = [
  { value: 'all', label: 'All Places', icon: '🏔' },
  { value: 'nature', label: 'Nature', icon: '🌿' },
  { value: 'garden', label: 'Gardens', icon: '🌸' },
  { value: 'factory', label: 'Factories', icon: '🏭' },
  { value: 'entertainment', label: 'Entertainment', icon: '🎭' }
];
export default function OotySightseeingPlanner() {
  const [selectedAttractions, setSelectedAttractions] = useState<number[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [timeline, setTimeline] = useState<Array<{attraction: Attraction, startTime: string, endTime: string}>>([]);
  const [videoError, setVideoError] = useState(false);
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
  const generateTimeline = () => {
    const selected = attractions.filter(attr => selectedAttractions.includes(attr.id));
    const sortedAttractions = selected.sort((a, b) => {
      const timeOrder = { 'Morning': 1, 'Afternoon': 2, 'Evening': 3 };
      return timeOrder[a.bestTime as keyof typeof timeOrder] - timeOrder[b.bestTime as keyof typeof timeOrder] || b.popularity - a.popularity;
    });
    let currentTime = 9;
    const newTimeline = sortedAttractions.map(attraction => {
      const startTime = `${Math.floor(currentTime)}:${(currentTime % 1) * 60 === 0 ? '00' : '30'}`;
      currentTime += attraction.duration;
      const endTime = `${Math.floor(currentTime)}:${(currentTime % 1) * 60 === 0 ? '00' : '30'}`;
      return {
        attraction,
        startTime,
        endTime
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
  }, [selectedAttractions]);
  const totalDuration = timeline.reduce((sum, item) => sum + item.attraction.duration, 0);
  const handleVideoError = (e) => {
    console.error('Video failed to load:', e.target.src);
  };
  return (
    <>
      <style>{`
       
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
 height: 4rem;
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
}`
      }</style>
    
      <div className="app-container">
        <div className="header">
          <video
            className="header-video"
            autoPlay
            muted
            loop
            playsInline
            onError={handleVideoError}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
            onPlay={() => console.log('Video started playing')}
          >
            <source src={ootyVideo} type="video/mp4" /> 
          </video>
          <div className="header-content">
            <h1 className="header-title">Ooty Sightseeing Planner</h1>
            <p className="header-subtitle">
              Create your perfect day exploring the Queen of Hill Stations
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
                      Choose from the attractions on the left to build your perfect Ooty day trip!
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
                  <li className="tips-item">• Morning visits are best for gardens and peaks (clearer views)</li>
                  <li className="tips-item">• Carry warm clothes - Ooty weather can be unpredictable</li>
                  <li className="tips-item">• Book boat rides early at Ooty Lake for shorter queues</li>
                  <li className="tips-item">• Tea factory tours include free tastings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}