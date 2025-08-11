// // // // // import React from 'react';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // const Destinations: React.FC = () => {
// // // // //   const navigate = useNavigate();

// // // // //   const destinations = [
// // // // //     {
// // // // //       title: 'Ooty',
// // // // //       imageUrl: 'https://images.unsplash.com/photo-1559147861-32715680aef8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9vdHl8ZW58MHx8MHx8fDA%3D',
// // // // //       path: '/ooty',
// // // // //     },
// // // // //     {
// // // // //       title: 'Pykara',
// // // // //       imageUrl: 'https://images.unsplash.com/photo-1711553186791-499afea915d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHlrYXJhfGVufDB8fDB8fHww',
// // // // //       path: '/pykara',
// // // // //     },
// // // // //     {
// // // // //       title: 'Coonoor',
// // // // //       imageUrl: 'https://images.unsplash.com/photo-1655276033960-7b7717fb92cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29vbm9vcnxlbnwwfHwwfHx8MA%3D%3D',
// // // // //       path: '/coonoor',
// // // // //     },
// // // // //     {
// // // // //       title: 'Avalanche',
// // // // //       imageUrl: 'https://images.unsplash.com/photo-1678727507532-03c8122bae14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXZhbGFuY2hlfGVufDB8fDB8fHww',
// // // // //       path: '/avalanche',
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <div style={{ padding: '2rem' }}>
// // // // //       <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Choose Your Destination</h1>

// // // // //       <div
// // // // //         style={{
// // // // //           display: 'flex',
// // // // //           flexWrap: 'wrap',
// // // // //           gap: '2rem',
// // // // //           justifyContent: 'center',
// // // // //         }}
// // // // //       >
// // // // //         {destinations.map((dest) => (
// // // // //           <div
// // // // //             key={dest.title}
// // // // //             onClick={() => navigate(dest.path)}
// // // // //             style={{
// // // // //               cursor: 'pointer',
// // // // //               border: '1px solid #ccc',
// // // // //               borderRadius: '12px',
// // // // //               padding: '16px',
// // // // //               width: '250px',
// // // // //               textAlign: 'center',
// // // // //               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// // // // //               transition: 'transform 0.2s ease-in-out',
// // // // //             }}
// // // // //           >
// // // // //             <img
// // // // //               src={dest.imageUrl}
// // // // //               alt={dest.title}
// // // // //               style={{
// // // // //                 width: '100%',
// // // // //                 height: '150px',
// // // // //                 borderRadius: '8px',
// // // // //                 objectFit: 'cover',
// // // // //                 marginBottom: '1rem',
// // // // //               }}
// // // // //             />
// // // // //             <h3>{dest.title}</h3>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Destinations;



// // // // // import React from 'react';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // const Destinations: React.FC = () => {
// // // // //   const navigate = useNavigate();

// // // // //   const destinations = [
// // // // //     {
// // // // //       title: 'Ooty',
// // // // //       imageUrl: 'https://images.unsplash.com/photo-1559147861-32715680aef8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9vdHl8ZW58MHx8MHx8fDA%3D',
// // // // //       path: '/ooty',
// // // // //     },
// // // // //     {
// // // // //       title: 'Pykara',
// // // // //       imageUrl: 'https://images.unsplash.com/photo-1711553186791-499afea915d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHlrYXJhfGVufDB8fDB8fHww',
// // // // //       path: '/pykara',
// // // // //     },
// // // // //     {
// // // // //       title: 'Coonoor',
// // // // //       imageUrl: 'https://images.unsplash.com/photo-1655276033960-7b7717fb92cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29vbm9vcnxlbnwwfHwwfHx8MA%3D%3D',
// // // // //       path: '/coonoor',
// // // // //     },
// // // // //     {
// // // // //       title: 'Avalanche',
// // // // //       imageUrl: 'https://images.unsplash.com/photo-1678727507532-03c8122bae14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXZhbGFuY2hlfGVufDB8fDB8fHww',
// // // // //       path: '/avalanche',
// // // // //     },
// // // // //   ];

// // // // //   return (
// // // // //     <div style={{ padding: '2rem' }}>
// // // // //       <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Choose Your Destination</h1>

// // // // //       <div
// // // // //         style={{
// // // // //           display: 'flex',
// // // // //           flexWrap: 'wrap',
// // // // //           gap: '2rem',
// // // // //           justifyContent: 'center',
// // // // //         }}
// // // // //       >
// // // // //         {destinations.map((dest) => (
// // // // //           <div
// // // // //             key={dest.title}
// // // // //             onClick={() => navigate(dest.path)}
// // // // //             style={{
// // // // //               cursor: 'pointer',
// // // // //               border: '1px solid #ccc',
// // // // //               borderRadius: '12px',
// // // // //               padding: '16px',
// // // // //               width: '250px',
// // // // //               textAlign: 'center',
// // // // //               boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// // // // //               transition: 'transform 0.2s ease-in-out',
// // // // //             }}
// // // // //           >
// // // // //             <img
// // // // //               src={dest.imageUrl}
// // // // //               alt={dest.title}
// // // // //               style={{
// // // // //                 width: '100%',
// // // // //                 height: '150px',
// // // // //                 borderRadius: '8px',
// // // // //                 objectFit: 'cover',
// // // // //                 marginBottom: '1rem',
// // // // //               }}
// // // // //             />
// // // // //             <h3>{dest.title}</h3>
// // // // //           </div>
// // // // //         ))}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Destinations;



// // // // import React, { useState, useEffect } from 'react';
// // // // import { MapPin, ArrowRight, Star, Clock, Camera } from 'lucide-react';

// // // // const Destinations: React.FC = () => {
// // // //   const [hoveredCard, setHoveredCard] = useState<string | null>(null);
// // // //   const [selectedFilter, setSelectedFilter] = useState('all');
// // // //   const [animateIn, setAnimateIn] = useState(false);

// // // //   const destinations = [
// // // //     {
// // // //       id: 'ooty',
// // // //       title: 'Ooty',
// // // //       subtitle: 'Queen of Hill Stations',
// // // //       imageUrl: 'https://images.unsplash.com/photo-1559147861-32715680aef8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// // // //       path: '/ooty',
// // // //       category: 'hillstation',
// // // //       rating: 4.8,
// // // //       duration: '2-3 Days',
// // // //       highlights: ['Toy Train', 'Botanical Garden', 'Tea Gardens'],
// // // //       description: 'Misty mountains and colonial charm await in this pristine hill station.',
// // // //     },
// // // //     {
// // // //       id: 'pykara',
// // // //       title: 'Pykara',
// // // //       subtitle: 'Waterfall Paradise',
// // // //       imageUrl: 'https://images.unsplash.com/photo-1711553186791-499afea915d7?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// // // //       path: '/pykara',
// // // //       category: 'nature',
// // // //       rating: 4.6,
// // // //       duration: '1 Day',
// // // //       highlights: ['Waterfalls', 'Boating', 'Wildlife'],
// // // //       description: 'Cascading waterfalls and serene lakes in pristine wilderness.',
// // // //     },
// // // //     {
// // // //       id: 'coonoor',
// // // //       title: 'Coonoor',
// // // //       subtitle: 'Tea Capital',
// // // //       imageUrl: 'https://images.unsplash.com/photo-1655276033960-7b7717fb92cd?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// // // //       path: '/coonoor',
// // // //       category: 'hillstation',
// // // //       rating: 4.7,
// // // //       duration: '1-2 Days',
// // // //       highlights: ['Tea Estates', 'Viewpoints', 'Pleasant Weather'],
// // // //       description: 'Rolling tea plantations and breathtaking valley views.',
// // // //     },
// // // //     {
// // // //       id: 'avalanche',
// // // //       title: 'Avalanche',
// // // //       subtitle: 'Hidden Gem',
// // // //       imageUrl: 'https://images.unsplash.com/photo-1678727507532-03c8122bae14?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// // // //       path: '/avalanche',
// // // //       category: 'adventure',
// // // //       rating: 4.9,
// // // //       duration: '2-4 Days',
// // // //       highlights: ['Trekking', 'Camping', 'Photography'],
// // // //       description: 'Untouched wilderness perfect for adventure seekers.',
// // // //     },
// // // //   ];

// // // //   const filters = [
// // // //     { id: 'all', label: 'All Destinations', icon: MapPin },
// // // //     { id: 'hillstation', label: 'Hill Stations', icon: MapPin },
// // // //     { id: 'nature', label: 'Nature', icon: Camera },
// // // //     { id: 'adventure', label: 'Adventure', icon: ArrowRight }
// // // //   ];

// // // //   const filteredDestinations = selectedFilter === 'all' 
// // // //     ? destinations 
// // // //     : destinations.filter(dest => dest.category === selectedFilter);

// // // //   useEffect(() => {
// // // //     setAnimateIn(true);
// // // //   }, []);

// // // //   const handleCardClick = (path: string) => {
// // // //     console.log(`Navigating to ${path}`);
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       {/* Header */}
// // // //       <div style={{
// // // //         ...styles.header,
// // // //         ...(animateIn ? styles.animatedIn : styles.animatedOut)
// // // //       }}>
// // // //         <h1 style={styles.title}>Discover Paradise</h1>
// // // //         <p style={styles.subtitle}>
// // // //           Embark on unforgettable journeys through breathtaking landscapes and hidden gems
// // // //         </p>
// // // //       </div>

// // // //       {/* Filter Buttons */}
// // // //       <div style={{
// // // //         ...styles.filters,
// // // //         ...(animateIn ? { ...styles.animatedIn, transitionDelay: '0.2s' } : styles.animatedOut)
// // // //       }}>
// // // //         {filters.map((filter) => {
// // // //           const IconComponent = filter.icon;
// // // //           return (
// // // //             <button
// // // //               key={filter.id}
// // // //               onClick={() => setSelectedFilter(filter.id)}
// // // //               style={{
// // // //                 ...styles.filterBtn,
// // // //                 ...(selectedFilter === filter.id ? styles.filterBtnActive : styles.filterBtnInactive)
// // // //               }}
// // // //               onMouseEnter={(e) => {
// // // //                 if (selectedFilter !== filter.id) {
// // // //                   e.currentTarget.style.transform = 'translateY(-2px)';
// // // //                   e.currentTarget.style.backgroundColor = '#eff6ff';
// // // //                   e.currentTarget.style.borderColor = '#3b82f6';
// // // //                   e.currentTarget.style.color = '#2563eb';
// // // //                 }
// // // //               }}
// // // //               onMouseLeave={(e) => {
// // // //                 if (selectedFilter !== filter.id) {
// // // //                   e.currentTarget.style.transform = 'translateY(0)';
// // // //                   e.currentTarget.style.backgroundColor = 'white';
// // // //                   e.currentTarget.style.borderColor = '#e5e7eb';
// // // //                   e.currentTarget.style.color = '#374151';
// // // //                 }
// // // //               }}
// // // //             >
// // // //               <IconComponent style={{ width: '16px', height: '16px' }} />
// // // //               {filter.label}
// // // //             </button>
// // // //           );
// // // //         })}
// // // //       </div>

// // // //       {/* Destinations Grid */}
// // // //       <div style={styles.grid}>
// // // //         {filteredDestinations.map((dest, index) => (
// // // //           <div
// // // //             key={dest.id}
// // // //             style={{
// // // //               ...styles.card,
// // // //               ...(animateIn ? {
// // // //                 ...styles.animatedIn,
// // // //                 transitionDelay: `${index * 100 + 400}ms`
// // // //               } : styles.animatedOut)
// // // //             }}
// // // //             onMouseEnter={() => setHoveredCard(dest.id)}
// // // //             onMouseLeave={() => setHoveredCard(null)}
// // // //             onClick={() => handleCardClick(dest.path)}
// // // //           >
// // // //             {/* Card Image */}
// // // //             <div style={styles.imageContainer}>
// // // //               <img
// // // //                 src={dest.imageUrl}
// // // //                 alt={dest.title}
// // // //                 style={{
// // // //                   ...styles.image,
// // // //                   ...(hoveredCard === dest.id ? { transform: 'scale(1.1)' } : {})
// // // //                 }}
// // // //               />
// // // //               <div style={styles.overlay}></div>
// // // //             </div>

// // // //             {/* Content Overlay */}
// // // //             <div style={styles.content}>
// // // //               {/* Top Section */}
// // // //               <div style={styles.topSection}>
// // // //                 <div style={styles.badge}>
// // // //                   <Star style={{ width: '16px', height: '16px', color: '#f59e0b', fill: '#f59e0b' }} />
// // // //                   <span style={styles.badgeText}>{dest.rating}</span>
// // // //                 </div>
// // // //                 <div style={styles.badge}>
// // // //                   <Clock style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
// // // //                   <span style={styles.badgeText}>{dest.duration}</span>
// // // //                 </div>
// // // //               </div>

// // // //               {/* Bottom Section */}
// // // //               <div>
// // // //                 <h3 style={{
// // // //                   ...styles.cardTitle,
// // // //                   ...(hoveredCard === dest.id ? { color: '#93c5fd' } : {})
// // // //                 }}>
// // // //                   {dest.title}
// // // //                 </h3>
// // // //                 <p style={styles.cardSubtitle}>{dest.subtitle}</p>
                
// // // //                 <p style={{
// // // //                   ...styles.description,
// // // //                   ...(hoveredCard === dest.id ? 
// // // //                     { opacity: 1, transform: 'translateY(0)' } : 
// // // //                     { opacity: 0.7, transform: 'translateY(8px)' })
// // // //                 }}>
// // // //                   {dest.description}
// // // //                 </p>

// // // //                 {/* Highlights */}
// // // //                 <div style={{
// // // //                   ...styles.highlights,
// // // //                   ...(hoveredCard === dest.id ? 
// // // //                     { opacity: 1, transform: 'translateY(0)' } : 
// // // //                     { opacity: 0, transform: 'translateY(16px)' })
// // // //                 }}>
// // // //                   {dest.highlights.map((highlight) => (
// // // //                     <span key={highlight} style={styles.highlightTag}>
// // // //                       {highlight}
// // // //                     </span>
// // // //                   ))}
// // // //                 </div>

// // // //                 {/* CTA Button */}
// // // //                 <button style={{
// // // //                   ...styles.ctaButton,
// // // //                   ...(hoveredCard === dest.id ? 
// // // //                     { transform: 'translateX(0)', opacity: 1 } : 
// // // //                     { transform: 'translateX(16px)', opacity: 0 })
// // // //                 }}>
// // // //                   Explore Now
// // // //                   <ArrowRight style={{ 
// // // //                     width: '20px', 
// // // //                     height: '20px',
// // // //                     transition: 'transform 0.3s ease'
// // // //                   }} />
// // // //                 </button>
// // // //               </div>
// // // //             </div>

// // // //             {/* Hover Effect Border */}
// // // //             <div style={{
// // // //               ...styles.hoverBorder,
// // // //               ...(hoveredCard === dest.id ? styles.hoverBorderActive : {})
// // // //             }}></div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       {/* Call to Action */}
// // // //       <div style={{
// // // //         ...styles.ctaSection,
// // // //         ...(animateIn ? { ...styles.animatedIn, transitionDelay: '0.8s' } : styles.animatedOut)
// // // //       }}>
// // // //         <p style={styles.ctaText}>
// // // //           Can't decide? Let us help you plan the perfect itinerary
// // // //         </p>
// // // //         <button 
// // // //           style={styles.planTripBtn}
// // // //           onMouseEnter={(e) => {
// // // //             e.currentTarget.style.backgroundColor = '#2563eb';
// // // //             e.currentTarget.style.transform = 'translateY(-2px)';
// // // //             e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)';
// // // //           }}
// // // //           onMouseLeave={(e) => {
// // // //             e.currentTarget.style.backgroundColor = '#3b82f6';
// // // //             e.currentTarget.style.transform = 'translateY(0)';
// // // //             e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
// // // //           }}
// // // //         >
// // // //           Plan My Trip
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const styles = {
// // // //   container: {
// // // //     minHeight: '100vh',
// // // //     background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
// // // //     position: 'relative' as const,
// // // //     overflow: 'hidden' as const,
// // // //     padding: '3rem 1.5rem',
// // // //   },
// // // //   header: {
// // // //     textAlign: 'center' as const,
// // // //     marginBottom: '4rem',
// // // //     transition: 'all 1s ease-out',
// // // //   },
// // // //   title: {
// // // //     fontSize: '3.5rem',
// // // //     fontWeight: 'bold' as const,
// // // //     color: '#1f2937',
// // // //     marginBottom: '1rem',
// // // //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// // // //   },
// // // //   subtitle: {
// // // //     fontSize: '1.25rem',
// // // //     color: '#6b7280',
// // // //     maxWidth: '600px',
// // // //     margin: '0 auto',
// // // //     lineHeight: 1.6,
// // // //   },
// // // //   filters: {
// // // //     display: 'flex',
// // // //     flexWrap: 'wrap' as const,
// // // //     justifyContent: 'center' as const,
// // // //     gap: '1rem',
// // // //     marginBottom: '3rem',
// // // //     transition: 'all 1s ease-out',
// // // //   },
// // // //   filterBtn: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '0.5rem',
// // // //     padding: '0.75rem 1.5rem',
// // // //     border: '2px solid #e5e7eb',
// // // //     borderRadius: '50px',
// // // //     background: 'white',
// // // //     color: '#374151',
// // // //     fontWeight: '500',
// // // //     cursor: 'pointer',
// // // //     transition: 'all 0.3s ease',
// // // //     fontSize: '1rem',
// // // //   },
// // // //   filterBtnActive: {
// // // //     backgroundColor: '#3b82f6',
// // // //     borderColor: '#3b82f6',
// // // //     color: 'white',
// // // //     boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
// // // //   },
// // // //   filterBtnInactive: {
// // // //     backgroundColor: 'white',
// // // //     borderColor: '#e5e7eb',
// // // //     color: '#374151',
// // // //   },
// // // //   grid: {
// // // //     display: 'grid',
// // // //     gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
// // // //     gap: '2rem',
// // // //     marginBottom: '5rem',
// // // //     maxWidth: '1200px',
// // // //     margin: '0 auto 5rem auto',
// // // //   },
// // // //   card: {
// // // //     position: 'relative' as const,
// // // //     height: '400px',
// // // //     borderRadius: '24px',
// // // //     overflow: 'hidden' as const,
// // // //     cursor: 'pointer',
// // // //     transition: 'all 0.7s ease',
// // // //     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
// // // //   },
// // // //   imageContainer: {
// // // //     position: 'relative' as const,
// // // //     height: '100%',
// // // //     overflow: 'hidden' as const,
// // // //     borderRadius: '24px',
// // // //   },
// // // //   image: {
// // // //     width: '100%',
// // // //     height: '100%',
// // // //     objectFit: 'cover' as const,
// // // //     transition: 'transform 0.7s ease',
// // // //   },
// // // //   overlay: {
// // // //     position: 'absolute' as const,
// // // //     top: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 0,
// // // //     background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%)',
// // // //   },
// // // //   content: {
// // // //     position: 'absolute' as const,
// // // //     top: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 0,
// // // //     padding: '2rem',
// // // //     display: 'flex',
// // // //     flexDirection: 'column' as const,
// // // //     justifyContent: 'space-between',
// // // //   },
// // // //   topSection: {
// // // //     display: 'flex',
// // // //     justifyContent: 'space-between',
// // // //     alignItems: 'flex-start',
// // // //   },
// // // //   badge: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '0.5rem',
// // // //     background: 'rgba(255, 255, 255, 0.9)',
// // // //     backdropFilter: 'blur(10px)',
// // // //     padding: '0.5rem 1rem',
// // // //     borderRadius: '50px',
// // // //     fontSize: '0.875rem',
// // // //     fontWeight: '500',
// // // //     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
// // // //   },
// // // //   badgeText: {
// // // //     color: '#1f2937',
// // // //     fontWeight: '500',
// // // //   },
// // // //   cardTitle: {
// // // //     fontSize: '2.5rem',
// // // //     fontWeight: 'bold' as const,
// // // //     color: 'white',
// // // //     marginBottom: '0.5rem',
// // // //     transition: 'color 0.3s ease',
// // // //   },
// // // //   cardSubtitle: {
// // // //     fontSize: '1.125rem',
// // // //     color: '#93c5fd',
// // // //     fontWeight: '500',
// // // //     marginBottom: '1rem',
// // // //   },
// // // //   description: {
// // // //     color: '#e5e7eb',
// // // //     marginBottom: '1rem',
// // // //     transition: 'all 0.3s ease',
// // // //   },
// // // //   highlights: {
// // // //     display: 'flex',
// // // //     flexWrap: 'wrap' as const,
// // // //     gap: '0.5rem',
// // // //     marginBottom: '1.5rem',
// // // //     transition: 'all 0.3s ease',
// // // //   },
// // // //   highlightTag: {
// // // //     background: 'rgba(255, 255, 255, 0.2)',
// // // //     border: '1px solid rgba(255, 255, 255, 0.3)',
// // // //     backdropFilter: 'blur(10px)',
// // // //     color: 'white',
// // // //     padding: '0.25rem 0.75rem',
// // // //     borderRadius: '50px',
// // // //     fontSize: '0.75rem',
// // // //   },
// // // //   ctaButton: {
// // // //     display: 'flex',
// // // //     alignItems: 'center',
// // // //     gap: '0.5rem',
// // // //     background: 'white',
// // // //     color: '#1f2937',
// // // //     padding: '0.75rem 1.5rem',
// // // //     border: 'none',
// // // //     borderRadius: '50px',
// // // //     fontWeight: '600',
// // // //     cursor: 'pointer',
// // // //     transition: 'all 0.3s ease',
// // // //     fontSize: '1rem',
// // // //   },
// // // //   hoverBorder: {
// // // //     position: 'absolute' as const,
// // // //     top: 0,
// // // //     left: 0,
// // // //     right: 0,
// // // //     bottom: 0,
// // // //     borderRadius: '24px',
// // // //     border: '2px solid transparent',
// // // //     transition: 'all 0.3s ease',
// // // //   },
// // // //   hoverBorderActive: {
// // // //     borderColor: '#3b82f6',
// // // //     boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
// // // //   },
// // // //   ctaSection: {
// // // //     textAlign: 'center' as const,
// // // //     transition: 'all 1s ease-out',
// // // //   },
// // // //   ctaText: {
// // // //     color: '#6b7280',
// // // //     fontSize: '1.125rem',
// // // //     marginBottom: '2rem',
// // // //   },
// // // //   planTripBtn: {
// // // //     background: '#3b82f6',
// // // //     color: 'white',
// // // //     fontWeight: 'bold' as const,
// // // //     padding: '1rem 2rem',
// // // //     border: 'none',
// // // //     borderRadius: '50px',
// // // //     fontSize: '1.125rem',
// // // //     cursor: 'pointer',
// // // //     transition: 'all 0.3s ease',
// // // //     boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
// // // //   },
// // // //   animatedIn: {
// // // //     opacity: 1,
// // // //     transform: 'translateY(0)',
// // // //   },
// // // //   animatedOut: {
// // // //     opacity: 0,
// // // //     transform: 'translateY(30px)',
// // // //   },
// // // // };

// // // // export default Destinations;



// // // import React, { useState, useEffect } from 'react';
// // // import { MapPin, ArrowRight, Star, Clock, Camera } from 'lucide-react';
// // // import { useNavigate } from 'react-router-dom'; // ✅ Added

// // // const Destinations: React.FC = () => {
// // //   const [hoveredCard, setHoveredCard] = useState<string | null>(null);
// // //   const [selectedFilter, setSelectedFilter] = useState('all');
// // //   const [animateIn, setAnimateIn] = useState(false);
// // //   const navigate = useNavigate(); // ✅ Added

// // //   const destinations = [
// // //     {
// // //       id: 'ooty',
// // //       title: 'Ooty',
// // //       subtitle: 'Queen of Hill Stations',
// // //       imageUrl: 'https://images.unsplash.com/photo-1559147861-32715680aef8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// // //       path: '/ooty',
// // //       category: 'hillstation',
// // //       rating: 4.8,
// // //       duration: '2-3 Days',
// // //       highlights: ['Toy Train', 'Botanical Garden', 'Tea Gardens'],
// // //       description: 'Misty mountains and colonial charm await in this pristine hill station.',
// // //     },
// // //     {
// // //       id: 'pykara',
// // //       title: 'Pykara',
// // //       subtitle: 'Waterfall Paradise',
// // //       imageUrl: 'https://images.unsplash.com/photo-1711553186791-499afea915d7?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// // //       path: '/pykara',
// // //       category: 'nature',
// // //       rating: 4.6,
// // //       duration: '1 Day',
// // //       highlights: ['Waterfalls', 'Boating', 'Wildlife'],
// // //       description: 'Cascading waterfalls and serene lakes in pristine wilderness.',
// // //     },
// // //     {
// // //       id: 'coonoor',
// // //       title: 'Coonoor',
// // //       subtitle: 'Tea Capital',
// // //       imageUrl: 'https://images.unsplash.com/photo-1655276033960-7b7717fb92cd?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// // //       path: '/coonoor',
// // //       category: 'hillstation',
// // //       rating: 4.7,
// // //       duration: '1-2 Days',
// // //       highlights: ['Tea Estates', 'Viewpoints', 'Pleasant Weather'],
// // //       description: 'Rolling tea plantations and breathtaking valley views.',
// // //     },
// // //     {
// // //       id: 'avalanche',
// // //       title: 'Avalanche',
// // //       subtitle: 'Hidden Gem',
// // //       imageUrl: 'https://images.unsplash.com/photo-1678727507532-03c8122bae14?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// // //       path: '/avalanche',
// // //       category: 'adventure',
// // //       rating: 4.9,
// // //       duration: '2-4 Days',
// // //       highlights: ['Trekking', 'Camping', 'Photography'],
// // //       description: 'Untouched wilderness perfect for adventure seekers.',
// // //     },
// // //   ];

// // //   const filters = [
// // //     { id: 'all', label: 'All Destinations', icon: MapPin },
// // //     { id: 'hillstation', label: 'Hill Stations', icon: MapPin },
// // //     { id: 'nature', label: 'Nature', icon: Camera },
// // //     { id: 'adventure', label: 'Adventure', icon: ArrowRight }
// // //   ];

// // //   const filteredDestinations = selectedFilter === 'all'
// // //     ? destinations
// // //     : destinations.filter(dest => dest.category === selectedFilter);

// // //   useEffect(() => {
// // //     setAnimateIn(true);
// // //   }, []);

// // //   const handleCardClick = (path: string) => {
// // //     navigate(path); // ✅ Updated to use router navigation
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       {/* ... Header and Filters (unchanged) */}

// // //       {/* Destinations Grid */}
// // //       <div style={styles.grid}>
// // //         {filteredDestinations.map((dest, index) => (
// // //           <div
// // //             key={dest.id}
// // //             style={{
// // //               ...styles.card,
// // //               ...(animateIn ? {
// // //                 ...styles.animatedIn,
// // //                 transitionDelay:` ${index * 100 + 400}ms`
// // //               } : styles.animatedOut)
// // //             }}
// // //             onMouseEnter={() => setHoveredCard(dest.id)}
// // //             onMouseLeave={() => setHoveredCard(null)}
// // //           >
// // //             {/* Card Image */}
// // //             <div style={styles.imageContainer}>
// // //               <img
// // //                 src={dest.imageUrl}
// // //                 alt={dest.title}
// // //                 style={{
// // //                   ...styles.image,
// // //                   ...(hoveredCard === dest.id ? { transform: 'scale(1.1)' } : {})
// // //                 }}
// // //               />
// // //               <div style={styles.overlay}></div>
// // //             </div>

// // //             {/* Content Overlay */}
// // //             <div style={styles.content}>
// // //               <div style={styles.topSection}>
// // //                 <div style={styles.badge}>
// // //                   <Star style={{ width: '16px', height: '16px', color: '#f59e0b', fill: '#f59e0b' }} />
// // //                   <span style={styles.badgeText}>{dest.rating}</span>
// // //                 </div>
// // //                 <div style={styles.badge}>
// // //                   <Clock style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
// // //                   <span style={styles.badgeText}>{dest.duration}</span>
// // //                 </div>
// // //               </div>

// // //               <div>
// // //                 <h3 style={{
// // //                   ...styles.cardTitle,
// // //                   ...(hoveredCard === dest.id ? { color: '#93c5fd' } : {})
// // //                 }}>
// // //                   {dest.title}
// // //                 </h3>
// // //                 <p style={styles.cardSubtitle}>{dest.subtitle}</p>

// // //                 <p style={{
// // //                   ...styles.description,
// // //                   ...(hoveredCard === dest.id ?
// // //                     { opacity: 1, transform: 'translateY(0)' } :
// // //                     { opacity: 0.7, transform: 'translateY(8px)' })
// // //                 }}>
// // //                   {dest.description}
// // //                 </p>

// // //                 {/* Highlights */}
// // //                 <div style={{
// // //                   ...styles.highlights,
// // //                   ...(hoveredCard === dest.id ?
// // //                     { opacity: 1, transform: 'translateY(0)' } :
// // //                     { opacity: 0, transform: 'translateY(16px)' })
// // //                 }}>
// // //                   {dest.highlights.map((highlight) => (
// // //                     <span key={highlight} style={styles.highlightTag}>
// // //                       {highlight}
// // //                     </span>
// // //                   ))}
// // //                 </div>

// // //                 {/* ✅ "Explore Now" Button */}
// // //                 <button
// // //                   style={{
// // //                     ...styles.ctaButton,
// // //                     ...(hoveredCard === dest.id ?
// // //                       { transform: 'translateX(0)', opacity: 1 } :
// // //                       { transform: 'translateX(16px)', opacity: 0 })
// // //                   }}
// // //                   onClick={() => handleCardClick(dest.path)} // ✅ Now navigates on click
// // //                 >
// // //                   Explore Now
// // //                   <ArrowRight style={{
// // //                     width: '20px',
// // //                     height: '20px',
// // //                     transition: 'transform 0.3s ease'
// // //                   }} />
// // //                 </button>
// // //               </div>
// // //             </div>

// // //             <div style={{
// // //               ...styles.hoverBorder,
// // //               ...(hoveredCard === dest.id ? styles.hoverBorderActive : {})
// // //             }}></div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       {/* Call to Action */}
// // //       <div style={{
// // //         ...styles.ctaSection,
// // //         ...(animateIn ? { ...styles.animatedIn, transitionDelay: '0.8s' } : styles.animatedOut)
// // //       }}>
// // //         <p style={styles.ctaText}>
// // //           Can't decide? Let us help you plan the perfect itinerary
// // //         </p>
// // //         <button 
// // //           style={styles.planTripBtn}
// // //           onMouseEnter={(e) => {
// // //             e.currentTarget.style.backgroundColor = '#2563eb';
// // //             e.currentTarget.style.transform = 'translateY(-2px)';
// // //             e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)';
// // //           }}
// // //           onMouseLeave={(e) => {
// // //             e.currentTarget.style.backgroundColor = '#3b82f6';
// // //             e.currentTarget.style.transform = 'translateY(0)';
// // //             e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
// // //           }}
// // //         >
// // //           Plan My Trip
// // //         </button>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const styles = {
// // //   container: {
// // //     minHeight: '100vh',
// // //     background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
// // //     position: 'relative' as const,
// // //     overflow: 'hidden' as const,
// // //     padding: '3rem 1.5rem',
// // //   },
// // //   header: {
// // //     textAlign: 'center' as const,
// // //     marginBottom: '4rem',
// // //     transition: 'all 1s ease-out',
// // //   },
// // //   title: {
// // //     fontSize: '3.5rem',
// // //     fontWeight: 'bold' as const,
// // //     color: '#1f2937',
// // //     marginBottom: '1rem',
// // //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// // //   },
// // //   subtitle: {
// // //     fontSize: '1.25rem',
// // //     color: '#6b7280',
// // //     maxWidth: '600px',
// // //     margin: '0 auto',
// // //     lineHeight: 1.6,
// // //   },
// // //   filters: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap' as const,
// // //     justifyContent: 'center' as const,
// // //     gap: '1rem',
// // //     marginBottom: '3rem',
// // //     transition: 'all 1s ease-out',
// // //   },
// // //   filterBtn: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '0.5rem',
// // //     padding: '0.75rem 1.5rem',
// // //     border: '2px solid #e5e7eb',
// // //     borderRadius: '50px',
// // //     background: 'white',
// // //     color: '#374151',
// // //     fontWeight: '500',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.3s ease',
// // //     fontSize: '1rem',
// // //   },
// // //   filterBtnActive: {
// // //     backgroundColor: '#3b82f6',
// // //     borderColor: '#3b82f6',
// // //     color: 'white',
// // //     boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
// // //   },
// // //   filterBtnInactive: {
// // //     backgroundColor: 'white',
// // //     borderColor: '#e5e7eb',
// // //     color: '#374151',
// // //   },
// // //   grid: {
// // //     display: 'grid',
// // //     gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
// // //     gap: '2rem',
// // //     marginBottom: '5rem',
// // //     maxWidth: '1200px',
// // //     margin: '0 auto 5rem auto',
// // //   },
// // //   card: {
// // //     position: 'relative' as const,
// // //     height: '400px',
// // //     borderRadius: '24px',
// // //     overflow: 'hidden' as const,
// // //     cursor: 'pointer',
// // //     transition: 'all 0.7s ease',
// // //     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
// // //   },
// // //   imageContainer: {
// // //     position: 'relative' as const,
// // //     height: '100%',
// // //     overflow: 'hidden' as const,
// // //     borderRadius: '24px',
// // //   },
// // //   image: {
// // //     width: '100%',
// // //     height: '100%',
// // //     objectFit: 'cover' as const,
// // //     transition: 'transform 0.7s ease',
// // //   },
// // //   overlay: {
// // //     position: 'absolute' as const,
// // //     top: 0,
// // //     left: 0,
// // //     right: 0,
// // //     bottom: 0,
// // //     background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%)',
// // //   },
// // //   content: {
// // //     position: 'absolute' as const,
// // //     top: 0,
// // //     left: 0,
// // //     right: 0,
// // //     bottom: 0,
// // //     padding: '2rem',
// // //     display: 'flex',
// // //     flexDirection: 'column' as const,
// // //     justifyContent: 'space-between',
// // //   },
// // //   topSection: {
// // //     display: 'flex',
// // //     justifyContent: 'space-between',
// // //     alignItems: 'flex-start',
// // //   },
// // //   badge: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '0.5rem',
// // //     background: 'rgba(255, 255, 255, 0.9)',
// // //     backdropFilter: 'blur(10px)',
// // //     padding: '0.5rem 1rem',
// // //     borderRadius: '50px',
// // //     fontSize: '0.875rem',
// // //     fontWeight: '500',
// // //     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
// // //   },
// // //   badgeText: {
// // //     color: '#1f2937',
// // //     fontWeight: '500',
// // //   },
// // //   cardTitle: {
// // //     fontSize: '2.5rem',
// // //     fontWeight: 'bold' as const,
// // //     color: 'white',
// // //     marginBottom: '0.5rem',
// // //     transition: 'color 0.3s ease',
// // //   },
// // //   cardSubtitle: {
// // //     fontSize: '1.125rem',
// // //     color: '#93c5fd',
// // //     fontWeight: '500',
// // //     marginBottom: '1rem',
// // //   },
// // //   description: {
// // //     color: '#e5e7eb',
// // //     marginBottom: '1rem',
// // //     transition: 'all 0.3s ease',
// // //   },
// // //   highlights: {
// // //     display: 'flex',
// // //     flexWrap: 'wrap' as const,
// // //     gap: '0.5rem',
// // //     marginBottom: '1.5rem',
// // //     transition: 'all 0.3s ease',
// // //   },
// // //   highlightTag: {
// // //     background: 'rgba(255, 255, 255, 0.2)',
// // //     border: '1px solid rgba(255, 255, 255, 0.3)',
// // //     backdropFilter: 'blur(10px)',
// // //     color: 'white',
// // //     padding: '0.25rem 0.75rem',
// // //     borderRadius: '50px',
// // //     fontSize: '0.75rem',
// // //   },
// // //   ctaButton: {
// // //     display: 'flex',
// // //     alignItems: 'center',
// // //     gap: '0.5rem',
// // //     background: 'white',
// // //     color: '#1f2937',
// // //     padding: '0.75rem 1.5rem',
// // //     border: 'none',
// // //     borderRadius: '50px',
// // //     fontWeight: '600',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.3s ease',
// // //     fontSize: '1rem',
// // //   },
// // //   hoverBorder: {
// // //     position: 'absolute' as const,
// // //     top: 0,
// // //     left: 0,
// // //     right: 0,
// // //     bottom: 0,
// // //     borderRadius: '24px',
// // //     border: '2px solid transparent',
// // //     transition: 'all 0.3s ease',
// // //   },
// // //   hoverBorderActive: {
// // //     borderColor: '#3b82f6',
// // //     boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
// // //   },
// // //   ctaSection: {
// // //     textAlign: 'center' as const,
// // //     transition: 'all 1s ease-out',
// // //   },
// // //   ctaText: {
// // //     color: '#6b7280',
// // //     fontSize: '1.125rem',
// // //     marginBottom: '2rem',
// // //   },
// // //   planTripBtn: {
// // //     background: '#3b82f6',
// // //     color: 'white',
// // //     fontWeight: 'bold' as const,
// // //     padding: '1rem 2rem',
// // //     border: 'none',
// // //     borderRadius: '50px',
// // //     fontSize: '1.125rem',
// // //     cursor: 'pointer',
// // //     transition: 'all 0.3s ease',
// // //     boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
// // //   },
// // //   animatedIn: {
// // //     opacity: 1,
// // //     transform: 'translateY(0)',
// // //   },
// // //   animatedOut: {
// // //     opacity: 0,
// // //     transform: 'translateY(30px)',
// // //   },
// // // };

// // // export default Destinations;/



// // import React, { useState, useEffect } from 'react';
// // import { MapPin, ArrowRight, Star, Clock, Camera } from 'lucide-react';

// // const Destinations: React.FC = () => {
// //   const [hoveredCard, setHoveredCard] = useState<string | null>(null);
// //   const [selectedFilter, setSelectedFilter] = useState('all');
// //   const [animateIn, setAnimateIn] = useState(false);

// //   const destinations = [
// //     {
// //       id: 'ooty',
// //       title: 'Ooty',
// //       subtitle: 'Queen of Hill Stations',
// //       imageUrl: 'https://images.unsplash.com/photo-1559147861-32715680aef8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// //       path: '/ooty',
// //       category: 'hillstation',
// //       rating: 4.8,
// //       duration: '2-3 Days',
// //       highlights: ['Toy Train', 'Botanical Garden', 'Tea Gardens'],
// //       description: 'Misty mountains and colonial charm await in this pristine hill station.',
// //     },
// //     {
// //       id: 'pykara',
// //       title: 'Pykara',
// //       subtitle: 'Waterfall Paradise',
// //       imageUrl: 'https://images.unsplash.com/photo-1711553186791-499afea915d7?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// //       path: '/pykara',
// //       category: 'nature',
// //       rating: 4.6,
// //       duration: '1 Day',
// //       highlights: ['Waterfalls', 'Boating', 'Wildlife'],
// //       description: 'Cascading waterfalls and serene lakes in pristine wilderness.',
// //     },
// //     {
// //       id: 'coonoor',
// //       title: 'Coonoor',
// //       subtitle: 'Tea Capital',
// //       imageUrl: 'https://images.unsplash.com/photo-1655276033960-7b7717fb92cd?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// //       path: '/coonoor',
// //       category: 'hillstation',
// //       rating: 4.7,
// //       duration: '1-2 Days',
// //       highlights: ['Tea Estates', 'Viewpoints', 'Pleasant Weather'],
// //       description: 'Rolling tea plantations and breathtaking valley views.',
// //     },
// //     {
// //       id: 'avalanche',
// //       title: 'Avalanche',
// //       subtitle: 'Hidden Gem',
// //       imageUrl: 'https://images.unsplash.com/photo-1678727507532-03c8122bae14?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
// //       path: '/avalanche',
// //       category: 'adventure',
// //       rating: 4.9,
// //       duration: '2-4 Days',
// //       highlights: ['Trekking', 'Camping', 'Photography'],
// //       description: 'Untouched wilderness perfect for adventure seekers.',
// //     },
// //   ];

// //   const filters = [
// //     { id: 'all', label: 'All Destinations', icon: MapPin },
// //     { id: 'hillstation', label: 'Hill Stations', icon: MapPin },
// //     { id: 'nature', label: 'Nature', icon: Camera },
// //     { id: 'adventure', label: 'Adventure', icon: ArrowRight }
// //   ];

// //   const filteredDestinations = selectedFilter === 'all'
// //     ? destinations
// //     : destinations.filter(dest => dest.category === selectedFilter);

// //   useEffect(() => {
// //     setAnimateIn(true);
// //   }, []);

// //   // Navigation function - demonstrates navigation logic
// //   // In your actual app with React Router, replace this with: navigate(path)
// //   const handleCardClick = (path: string, title: string) => {
// //     // For demonstration in this artifact
// //     alert(`Navigating to ${title} page: ${path}\n\nIn your React Router app, this will navigate to the actual page!`);
    
// //     // In your actual React Router setup, you would use:
// //     // navigate(path);
// //   };

// //   return (
// //     <div style={styles.container}>
// //       {/* Header */}
// //       <div style={{
// //         ...styles.header,
// //         ...(animateIn ? styles.animatedIn : styles.animatedOut)
// //       }}>
// //         <h1 style={styles.title}>Explore Destinations</h1>
// //         <p style={styles.subtitle}>
// //           Discover breathtaking locations and create unforgettable memories
// //         </p>
// //       </div>

// //       {/* Filters */}
// //       <div style={{
// //         ...styles.filters,
// //         ...(animateIn ? { ...styles.animatedIn, transitionDelay: '0.2s' } : styles.animatedOut)
// //       }}>
// //         {filters.map((filter) => {
// //           const IconComponent = filter.icon;
// //           return (
// //             <button
// //               key={filter.id}
// //               style={{
// //                 ...styles.filterBtn,
// //                 ...(selectedFilter === filter.id ? styles.filterBtnActive : styles.filterBtnInactive)
// //               }}
// //               onClick={() => setSelectedFilter(filter.id)}
// //               onMouseEnter={(e) => {
// //                 if (selectedFilter !== filter.id) {
// //                   e.currentTarget.style.backgroundColor = '#f3f4f6';
// //                   e.currentTarget.style.transform = 'translateY(-2px)';
// //                 }
// //               }}
// //               onMouseLeave={(e) => {
// //                 if (selectedFilter !== filter.id) {
// //                   e.currentTarget.style.backgroundColor = 'white';
// //                   e.currentTarget.style.transform = 'translateY(0)';
// //                 }
// //               }}
// //             >
// //               <IconComponent size={20} />
// //               {filter.label}
// //             </button>
// //           );
// //         })}
// //       </div>

// //       {/* Destinations Grid */}
// //       <div style={styles.grid}>
// //         {filteredDestinations.map((dest, index) => (
// //           <div
// //             key={dest.id}
// //             style={{
// //               ...styles.card,
// //               ...(animateIn ? {
// //                 ...styles.animatedIn,
// //                 transitionDelay: `${index * 100 + 400}ms`
// //               } : styles.animatedOut)
// //             }}
// //             onMouseEnter={() => setHoveredCard(dest.id)}
// //             onMouseLeave={() => setHoveredCard(null)}
// //           >
// //             {/* Card Image */}
// //             <div style={styles.imageContainer}>
// //               <img
// //                 src={dest.imageUrl}
// //                 alt={dest.title}
// //                 style={{
// //                   ...styles.image,
// //                   ...(hoveredCard === dest.id ? { transform: 'scale(1.1)' } : {})
// //                 }}
// //               />
// //               <div style={styles.overlay}></div>
// //             </div>

// //             {/* Content Overlay */}
// //             <div style={styles.content}>
// //               <div style={styles.topSection}>
// //                 <div style={styles.badge}>
// //                   <Star style={{ width: '16px', height: '16px', color: '#f59e0b', fill: '#f59e0b' }} />
// //                   <span style={styles.badgeText}>{dest.rating}</span>
// //                 </div>
// //                 <div style={styles.badge}>
// //                   <Clock style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
// //                   <span style={styles.badgeText}>{dest.duration}</span>
// //                 </div>
// //               </div>

// //               <div>
// //                 <h3 style={{
// //                   ...styles.cardTitle,
// //                   ...(hoveredCard === dest.id ? { color: '#93c5fd' } : {})
// //                 }}>
// //                   {dest.title}
// //                 </h3>
// //                 <p style={styles.cardSubtitle}>{dest.subtitle}</p>

// //                 <p style={{
// //                   ...styles.description,
// //                   ...(hoveredCard === dest.id ?
// //                     { opacity: 1, transform: 'translateY(0)' } :
// //                     { opacity: 0.7, transform: 'translateY(8px)' })
// //                 }}>
// //                   {dest.description}
// //                 </p>

// //                 {/* Highlights */}
// //                 <div style={{
// //                   ...styles.highlights,
// //                   ...(hoveredCard === dest.id ?
// //                     { opacity: 1, transform: 'translateY(0)' } :
// //                     { opacity: 0, transform: 'translateY(16px)' })
// //                 }}>
// //                   {dest.highlights.map((highlight) => (
// //                     <span key={highlight} style={styles.highlightTag}>
// //                       {highlight}
// //                     </span>
// //                   ))}
// //                 </div>

// //                 {/* Explore Now Button */}
// //                 <button
// //                   style={{
// //                     ...styles.ctaButton,
// //                     ...(hoveredCard === dest.id ?
// //                       { transform: 'translateX(0)', opacity: 1 } :
// //                       { transform: 'translateX(16px)', opacity: 0 })
// //                   }}
// //                   onClick={(e) => {
// //                     e.stopPropagation(); // Prevent event bubbling
// //                     handleCardClick(dest.path, dest.title);
// //                   }}
// //                   onMouseEnter={(e) => {
// //                     e.currentTarget.style.backgroundColor = '#f3f4f6';
// //                     e.currentTarget.style.transform = 'scale(1.05)';
// //                   }}
// //                   onMouseLeave={(e) => {
// //                     e.currentTarget.style.backgroundColor = 'white';
// //                     e.currentTarget.style.transform = 'scale(1)';
// //                   }}
// //                 >
// //                   Explore Now
// //                   <ArrowRight style={{
// //                     width: '20px',
// //                     height: '20px',
// //                     transition: 'transform 0.3s ease'
// //                   }} />
// //                 </button>
// //               </div>
// //             </div>

// //             <div style={{
// //               ...styles.hoverBorder,
// //               ...(hoveredCard === dest.id ? styles.hoverBorderActive : {})
// //             }}></div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Call to Action */}
// //       <div style={{
// //         ...styles.ctaSection,
// //         ...(animateIn ? { ...styles.animatedIn, transitionDelay: '0.8s' } : styles.animatedOut)
// //       }}>
// //         <p style={styles.ctaText}>
// //           Can't decide? Let us help you plan the perfect itinerary
// //         </p>
// //         <button 
// //           style={styles.planTripBtn}
// //           onClick={() => alert('Navigate to Contact page!\n\nIn your React Router app: navigate("/contact")')}
// //           onMouseEnter={(e) => {
// //             e.currentTarget.style.backgroundColor = '#2563eb';
// //             e.currentTarget.style.transform = 'translateY(-2px)';
// //             e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)';
// //           }}
// //           onMouseLeave={(e) => {
// //             e.currentTarget.style.backgroundColor = '#3b82f6';
// //             e.currentTarget.style.transform = 'translateY(0)';
// //             e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
// //           }}
// //         >
// //           Plan My Trip
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   container: {
// //     minHeight: '100vh',
// //     background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
// //     position: 'relative' as const,
// //     overflow: 'hidden' as const,
// //     padding: '3rem 1.5rem',
// //   },
// //   header: {
// //     textAlign: 'center' as const,
// //     marginBottom: '4rem',
// //     transition: 'all 1s ease-out',
// //   },
// //   title: {
// //     fontSize: '3.5rem',
// //     fontWeight: 'bold' as const,
// //     color: '#1f2937',
// //     marginBottom: '1rem',
// //     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
// //   },
// //   subtitle: {
// //     fontSize: '1.25rem',
// //     color: '#6b7280',
// //     maxWidth: '600px',
// //     margin: '0 auto',
// //     lineHeight: 1.6,
// //   },
// //   filters: {
// //     display: 'flex',
// //     flexWrap: 'wrap' as const,
// //     justifyContent: 'center' as const,
// //     gap: '1rem',
// //     marginBottom: '3rem',
// //     transition: 'all 1s ease-out',
// //   },
// //   filterBtn: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '0.5rem',
// //     padding: '0.75rem 1.5rem',
// //     border: '2px solid #e5e7eb',
// //     borderRadius: '50px',
// //     background: 'white',
// //     color: '#374151',
// //     fontWeight: '500',
// //     cursor: 'pointer',
// //     transition: 'all 0.3s ease',
// //     fontSize: '1rem',
// //   },
// //   filterBtnActive: {
// //     backgroundColor: '#3b82f6',
// //     borderColor: '#3b82f6',
// //     color: 'white',
// //     boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
// //   },
// //   filterBtnInactive: {
// //     backgroundColor: 'white',
// //     borderColor: '#e5e7eb',
// //     color: '#374151',
// //   },
// //   grid: {
// //     display: 'grid',
// //     gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
// //     gap: '2rem',
// //     marginBottom: '5rem',
// //     maxWidth: '1200px',
// //     margin: '0 auto 5rem auto',
// //   },
// //   card: {
// //     position: 'relative' as const,
// //     height: '400px',
// //     borderRadius: '24px',
// //     overflow: 'hidden' as const,
// //     cursor: 'pointer',
// //     transition: 'all 0.7s ease',
// //     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
// //   },
// //   imageContainer: {
// //     position: 'relative' as const,
// //     height: '100%',
// //     overflow: 'hidden' as const,
// //     borderRadius: '24px',
// //   },
// //   image: {
// //     width: '100%',
// //     height: '100%',
// //     objectFit: 'cover' as const,
// //     transition: 'transform 0.7s ease',
// //   },
// //   overlay: {
// //     position: 'absolute' as const,
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%)',
// //   },
// //   content: {
// //     position: 'absolute' as const,
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     padding: '2rem',
// //     display: 'flex',
// //     flexDirection: 'column' as const,
// //     justifyContent: 'space-between',
// //   },
// //   topSection: {
// //     display: 'flex',
// //     justifyContent: 'space-between',
// //     alignItems: 'flex-start',
// //   },
// //   badge: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '0.5rem',
// //     background: 'rgba(255, 255, 255, 0.9)',
// //     backdropFilter: 'blur(10px)',
// //     padding: '0.5rem 1rem',
// //     borderRadius: '50px',
// //     fontSize: '0.875rem',
// //     fontWeight: '500',
// //     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
// //   },
// //   badgeText: {
// //     color: '#1f2937',
// //     fontWeight: '500',
// //   },
// //   cardTitle: {
// //     fontSize: '2.5rem',
// //     fontWeight: 'bold' as const,
// //     color: 'white',
// //     marginBottom: '0.5rem',
// //     transition: 'color 0.3s ease',
// //   },
// //   cardSubtitle: {
// //     fontSize: '1.125rem',
// //     color: '#93c5fd',
// //     fontWeight: '500',
// //     marginBottom: '1rem',
// //   },
// //   description: {
// //     color: '#e5e7eb',
// //     marginBottom: '1rem',
// //     transition: 'all 0.3s ease',
// //   },
// //   highlights: {
// //     display: 'flex',
// //     flexWrap: 'wrap' as const,
// //     gap: '0.5rem',
// //     marginBottom: '1.5rem',
// //     transition: 'all 0.3s ease',
// //   },
// //   highlightTag: {
// //     background: 'rgba(255, 255, 255, 0.2)',
// //     border: '1px solid rgba(255, 255, 255, 0.3)',
// //     backdropFilter: 'blur(10px)',
// //     color: 'white',
// //     padding: '0.25rem 0.75rem',
// //     borderRadius: '50px',
// //     fontSize: '0.75rem',
// //   },
// //   ctaButton: {
// //     display: 'flex',
// //     alignItems: 'center',
// //     gap: '0.5rem',
// //     background: 'white',
// //     color: '#1f2937',
// //     padding: '0.75rem 1.5rem',
// //     border: 'none',
// //     borderRadius: '50px',
// //     fontWeight: '600',
// //     cursor: 'pointer',
// //     transition: 'all 0.3s ease',
// //     fontSize: '1rem',
// //   },
// //   hoverBorder: {
// //     position: 'absolute' as const,
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     borderRadius: '24px',
// //     border: '2px solid transparent',
// //     transition: 'all 0.3s ease',
// //   },
// //   hoverBorderActive: {
// //     borderColor: '#3b82f6',
// //     boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
// //   },
// //   ctaSection: {
// //     textAlign: 'center' as const,
// //     transition: 'all 1s ease-out',
// //   },
// //   ctaText: {
// //     color: '#6b7280',
// //     fontSize: '1.125rem',
// //     marginBottom: '2rem',
// //   },
// //   planTripBtn: {
// //     background: '#3b82f6',
// //     color: 'white',
// //     fontWeight: 'bold' as const,
// //     padding: '1rem 2rem',
// //     border: 'none',
// //     borderRadius: '50px',
// //     fontSize: '1.125rem',
// //     cursor: 'pointer',
// //     transition: 'all 0.3s ease',
// //     boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
// //   },
// //   animatedIn: {
// //     opacity: 1,
// //     transform: 'translateY(0)',
// //   },
// //   animatedOut: {
// //     opacity: 0,
// //     transform: 'translateY(30px)',
// //   },
// // };

// // export default Destinations;


// import React, { useState, useEffect } from 'react';
// import { MapPin, ArrowRight, Star, Clock, Camera } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';

// const Destinations: React.FC = () => {
//   const [hoveredCard, setHoveredCard] = useState<string | null>(null);
//   const [selectedFilter, setSelectedFilter] = useState('all');
//   const [animateIn, setAnimateIn] = useState(false);
//   const navigate = useNavigate();

//   const destinations = [
//     {
//       id: 'ooty',
//       title: 'Ooty',
//       subtitle: 'Queen of Hill Stations',
//       imageUrl: 'https://images.unsplash.com/photo-1559147861-32715680aef8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
//       path: '/ooty',
//       category: 'hillstation',
//       rating: 4.8,
//       duration: '2-3 Days',
//       highlights: ['Toy Train', 'Botanical Garden', 'Tea Gardens'],
//       description: 'Misty mountains and colonial charm await in this pristine hill station.',
//     },
//     {
//       id: 'pykara',
//       title: 'Pykara',
//       subtitle: 'Waterfall Paradise',
//       imageUrl: 'https://images.unsplash.com/photo-1711553186791-499afea915d7?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
//       path: '/pykara',
//       category: 'nature',
//       rating: 4.6,
//       duration: '1 Day',
//       highlights: ['Waterfalls', 'Boating', 'Wildlife'],
//       description: 'Cascading waterfalls and serene lakes in pristine wilderness.',
//     },
//     {
//       id: 'coonoor',
//       title: 'Coonoor',
//       subtitle: 'Tea Capital',
//       imageUrl: 'https://images.unsplash.com/photo-1655276033960-7b7717fb92cd?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
//       path: '/coonoor',
//       category: 'hillstation',
//       rating: 4.7,
//       duration: '1-2 Days',
//       highlights: ['Tea Estates', 'Viewpoints', 'Pleasant Weather'],
//       description: 'Rolling tea plantations and breathtaking valley views.',
//     },
//     {
//       id: 'avalanche',
//       title: 'Avalanche',
//       subtitle: 'Hidden Gem',
//       imageUrl: 'https://images.unsplash.com/photo-1678727507532-03c8122bae14?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
//       path: '/avalanche',
//       category: 'adventure',
//       rating: 4.9,
//       duration: '2-4 Days',
//       highlights: ['Trekking', 'Camping', 'Photography'],
//       description: 'Untouched wilderness perfect for adventure seekers.',
//     },
//   ];

//   const filters = [
//     { id: 'all', label: 'All Destinations', icon: MapPin },
//     { id: 'hillstation', label: 'Hill Stations', icon: MapPin },
//     { id: 'nature', label: 'Nature', icon: Camera },
//     { id: 'adventure', label: 'Adventure', icon: ArrowRight }
//   ];

//   const filteredDestinations = selectedFilter === 'all'
//     ? destinations
//     : destinations.filter(dest => dest.category === selectedFilter);

//   useEffect(() => {
//     setAnimateIn(true);
//   }, []);

//   const handleCardClick = (path: string) => {
//     navigate(path);
//   };

//   return (
//     <div style={styles.container}>
//       {/* Header */}
//       <div style={{
//         ...styles.header,
//         ...(animateIn ? styles.animatedIn : styles.animatedOut)
//       }}>
//         <h1 style={styles.title}>Explore Destinations</h1>
//         <p style={styles.subtitle}>
//           Discover breathtaking locations and create unforgettable memories
//         </p>
//       </div>

//       {/* Filters */}
//       <div style={{
//         ...styles.filters,
//         ...(animateIn ? { ...styles.animatedIn, transitionDelay: '0.2s' } : styles.animatedOut)
//       }}>
//         {filters.map((filter) => {
//           const IconComponent = filter.icon;
//           return (
//             <button
//               key={filter.id}
//               style={{
//                 ...styles.filterBtn,
//                 ...(selectedFilter === filter.id ? styles.filterBtnActive : styles.filterBtnInactive)
//               }}
//               onClick={() => setSelectedFilter(filter.id)}
//               onMouseEnter={(e) => {
//                 if (selectedFilter !== filter.id) {
//                   e.currentTarget.style.backgroundColor = '#f3f4f6';
//                   e.currentTarget.style.transform = 'translateY(-2px)';
//                 }
//               }}
//               onMouseLeave={(e) => {
//                 if (selectedFilter !== filter.id) {
//                   e.currentTarget.style.backgroundColor = 'white';
//                   e.currentTarget.style.transform = 'translateY(0)';
//                 }
//               }}
//             >
//               <IconComponent size={20} />
//               {filter.label}
//             </button>
//           );
//         })}
//       </div>

//       {/* Destinations Grid */}
//       <div style={styles.grid}>
//         {filteredDestinations.map((dest, index) => (
//           <div
//             key={dest.id}
//             style={{
//               ...styles.card,
//               ...(animateIn ? {
//                 ...styles.animatedIn,
//                 transitionDelay: `${index * 100 + 400}ms`
//               } : styles.animatedOut)
//             }}
//             onMouseEnter={() => setHoveredCard(dest.id)}
//             onMouseLeave={() => setHoveredCard(null)}
//           >
//             {/* Card Image */}
//             <div style={styles.imageContainer}>
//               <img
//                 src={dest.imageUrl}
//                 alt={dest.title}
//                 style={{
//                   ...styles.image,
//                   ...(hoveredCard === dest.id ? { transform: 'scale(1.1)' } : {})
//                 }}
//               />
//               <div style={styles.overlay}></div>
//             </div>

//             {/* Content Overlay */}
//             <div style={styles.content}>
//               <div style={styles.topSection}>
//                 <div style={styles.badge}>
//                   <Star style={{ width: '16px', height: '16px', color: '#f59e0b', fill: '#f59e0b' }} />
//                   <span style={styles.badgeText}>{dest.rating}</span>
//                 </div>
//                 <div style={styles.badge}>
//                   <Clock style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
//                   <span style={styles.badgeText}>{dest.duration}</span>
//                 </div>
//               </div>

//               <div>
//                 <h3 style={{
//                   ...styles.cardTitle,
//                   ...(hoveredCard === dest.id ? { color: '#93c5fd' } : {})
//                 }}>
//                   {dest.title}
//                 </h3>
//                 <p style={styles.cardSubtitle}>{dest.subtitle}</p>

//                 <p style={{
//                   ...styles.description,
//                   ...(hoveredCard === dest.id ?
//                     { opacity: 1, transform: 'translateY(0)' } :
//                     { opacity: 0.7, transform: 'translateY(8px)' })
//                 }}>
//                   {dest.description}
//                 </p>

//                 {/* Highlights */}
//                 <div style={{
//                   ...styles.highlights,
//                   ...(hoveredCard === dest.id ?
//                     { opacity: 1, transform: 'translateY(0)' } :
//                     { opacity: 0, transform: 'translateY(16px)' })
//                 }}>
//                   {dest.highlights.map((highlight) => (
//                     <span key={highlight} style={styles.highlightTag}>
//                       {highlight}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Explore Now Button */}
//                 <button
//                   style={{
//                     ...styles.ctaButton,
//                     ...(hoveredCard === dest.id ?
//                       { transform: 'translateX(0)', opacity: 1 } :
//                       { transform: 'translateX(16px)', opacity: 0 })
//                   }}
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     handleCardClick(dest.path);
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = '#f3f4f6';
//                     e.currentTarget.style.transform = 'scale(1.05)';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = 'white';
//                     e.currentTarget.style.transform = 'scale(1)';
//                   }}
//                 >
//                   Explore Now
//                   <ArrowRight style={{
//                     width: '20px',
//                     height: '20px',
//                     transition: 'transform 0.3s ease'
//                   }} />
//                 </button>
//               </div>
//             </div>

//             <div style={{
//               ...styles.hoverBorder,
//               ...(hoveredCard === dest.id ? styles.hoverBorderActive : {})
//             }}></div>
//           </div>
//         ))}
//       </div>

//       {/* Call to Action */}
//       <div style={{
//         ...styles.ctaSection,
//         ...(animateIn ? { ...styles.animatedIn, transitionDelay: '0.8s' } : styles.animatedOut)
//       }}>
//         <p style={styles.ctaText}>
//           Can't decide? Let us help you plan the perfect itinerary
//         </p>
//         <button 
//           style={styles.planTripBtn}
//           onClick={() => navigate('/contact')}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.backgroundColor = '#2563eb';
//             e.currentTarget.style.transform = 'translateY(-2px)';
//             e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.backgroundColor = '#3b82f6';
//             e.currentTarget.style.transform = 'translateY(0)';
//             e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
//           }}
//         >
//           Plan My Trip
//         </button>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   container: {
//     minHeight: '100vh',
//     background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
//     position: 'relative' as const,
//     overflow: 'hidden' as const,
//     padding: '3rem 1.5rem',
//   },
//   header: {
//     textAlign: 'center' as const,
//     marginBottom: '4rem',
//     transition: 'all 1s ease-out',
//   },
//   title: {
//     fontSize: '3.5rem',
//     fontWeight: 'bold' as const,
//     color: '#1f2937',
//     marginBottom: '1rem',
//     fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
//   },
//   subtitle: {
//     fontSize: '1.25rem',
//     color: '#6b7280',
//     maxWidth: '600px',
//     margin: '0 auto',
//     lineHeight: 1.6,
//   },
//   filters: {
//     display: 'flex',
//     flexWrap: 'wrap' as const,
//     justifyContent: 'center' as const,
//     gap: '1rem',
//     marginBottom: '3rem',
//     transition: 'all 1s ease-out',
//   },
//   filterBtn: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     padding: '0.75rem 1.5rem',
//     border: '2px solid #e5e7eb',
//     borderRadius: '50px',
//     background: 'white',
//     color: '#374151',
//     fontWeight: '500',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     fontSize: '1rem',
//   },
//   filterBtnActive: {
//     backgroundColor: '#3b82f6',
//     borderColor: '#3b82f6',
//     color: 'white',
//     boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
//   },
//   filterBtnInactive: {
//     backgroundColor: 'white',
//     borderColor: '#e5e7eb',
//     color: '#374151',
//   },
//   grid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
//     gap: '2rem',
//     marginBottom: '5rem',
//     maxWidth: '1200px',
//     margin: '0 auto 5rem auto',
//   },
//   card: {
//     position: 'relative' as const,
//     height: '400px',
//     borderRadius: '24px',
//     overflow: 'hidden' as const,
//     cursor: 'pointer',
//     transition: 'all 0.7s ease',
//     boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
//   },
//   imageContainer: {
//     position: 'relative' as const,
//     height: '100%',
//     overflow: 'hidden' as const,
//     borderRadius: '24px',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover' as const,
//     transition: 'transform 0.7s ease',
//   },
//   overlay: {
//     position: 'absolute' as const,
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%)',
//   },
//   content: {
//     position: 'absolute' as const,
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     padding: '2rem',
//     display: 'flex',
//     flexDirection: 'column' as const,
//     justifyContent: 'space-between',
//   },
//   topSection: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'flex-start',
//   },
//   badge: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     background: 'rgba(255, 255, 255, 0.9)',
//     backdropFilter: 'blur(10px)',
//     padding: '0.5rem 1rem',
//     borderRadius: '50px',
//     fontSize: '0.875rem',
//     fontWeight: '500',
//     boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
//   },
//   badgeText: {
//     color: '#1f2937',
//     fontWeight: '500',
//   },
//   cardTitle: {
//     fontSize: '2.5rem',
//     fontWeight: 'bold' as const,
//     color: 'white',
//     marginBottom: '0.5rem',
//     transition: 'color 0.3s ease',
//   },
//   cardSubtitle: {
//     fontSize: '1.125rem',
//     color: '#93c5fd',
//     fontWeight: '500',
//     marginBottom: '1rem',
//   },
//   description: {
//     color: '#e5e7eb',
//     marginBottom: '1rem',
//     transition: 'all 0.3s ease',
//   },
//   highlights: {
//     display: 'flex',
//     flexWrap: 'wrap' as const,
//     gap: '0.5rem',
//     marginBottom: '1.5rem',
//     transition: 'all 0.3s ease',
//   },
//   highlightTag: {
//     background: 'rgba(255, 255, 255, 0.2)',
//     border: '1px solid rgba(255, 255, 255, 0.3)',
//     backdropFilter: 'blur(10px)',
//     color: 'white',
//     padding: '0.25rem 0.75rem',
//     borderRadius: '50px',
//     fontSize: '0.75rem',
//   },
//   ctaButton: {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '0.5rem',
//     background: 'white',
//     color: '#1f2937',
//     padding: '0.75rem 1.5rem',
//     border: 'none',
//     borderRadius: '50px',
//     fontWeight: '600',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     fontSize: '1rem',
//   },
//   hoverBorder: {
//     position: 'absolute' as const,
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     borderRadius: '24px',
//     border: '2px solid transparent',
//     transition: 'all 0.3s ease',
//   },
//   hoverBorderActive: {
//     borderColor: '#3b82f6',
//     boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
//   },
//   ctaSection: {
//     textAlign: 'center' as const,
//     transition: 'all 1s ease-out',
//   },
//   ctaText: {
//     color: '#6b7280',
//     fontSize: '1.125rem',
//     marginBottom: '2rem',
//   },
//   planTripBtn: {
//     background: '#3b82f6',
//     color: 'white',
//     fontWeight: 'bold' as const,
//     padding: '1rem 2rem',
//     border: 'none',
//     borderRadius: '50px',
//     fontSize: '1.125rem',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
//   },
//   animatedIn: {
//     opacity: 1,
//     transform: 'translateY(0)',
//   },
//   animatedOut: {
//     opacity: 0,
//     transform: 'translateY(30px)',
//   },
// };

// export default Destinations;


import React, { useState, useEffect } from 'react';
import { MapPin, ArrowRight, Star, Clock, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Destinations: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [animateIn, setAnimateIn] = useState(false);
  const navigate = useNavigate();

  const destinations = [
    {
      id: 'ooty',
      title: 'Ooty',
      subtitle: 'Queen of Hill Stations',
      imageUrl: 'https://images.unsplash.com/photo-1559147861-32715680aef8?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
      path: '/ooty',
      category: 'hillstation',
      rating: 4.8,
      duration: '2-3 Days',
      highlights: ['Toy Train', 'Botanical Garden', 'Tea Gardens'],
      description: 'Misty mountains and colonial charm await in this pristine hill station.',
    },
    {
      id: 'pykara',
      title: 'Pykara',
      subtitle: 'Waterfall Paradise',
      imageUrl: 'https://images.unsplash.com/photo-1711553186791-499afea915d7?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
      path: '/pykara',
      category: 'nature',
      rating: 4.6,
      duration: '1 Day',
      highlights: ['Waterfalls', 'Boating', 'Wildlife'],
      description: 'Cascading waterfalls and serene lakes in pristine wilderness.',
    },
    {
      id: 'coonoor',
      title: 'Coonoor',
      subtitle: 'Tea Capital',
      imageUrl: 'https://images.unsplash.com/photo-1655276033960-7b7717fb92cd?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
      path: '/coonoor',
      category: 'hillstation',
      rating: 4.7,
      duration: '1-2 Days',
      highlights: ['Tea Estates', 'Viewpoints', 'Pleasant Weather'],
      description: 'Rolling tea plantations and breathtaking valley views.',
    },
    {
      id: 'avalanche',
      title: 'Avalanche',
      subtitle: 'Hidden Gem',
      imageUrl: 'https://images.unsplash.com/photo-1678727507532-03c8122bae14?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
      path: '/avalanche',
      category: 'adventure',
      rating: 4.9,
      duration: '2-4 Days',
      highlights: ['Trekking', 'Camping', 'Photography'],
      description: 'Untouched wilderness perfect for adventure seekers.',
    },
  ];

  const filters = [
    { id: 'all', label: 'All Destinations', icon: MapPin },
    { id: 'hillstation', label: 'Hill Stations', icon: MapPin },
    { id: 'nature', label: 'Nature', icon: Camera },
    { id: 'adventure', label: 'Adventure', icon: ArrowRight }
  ];

  const filteredDestinations = selectedFilter === 'all'
    ? destinations
    : destinations.filter(dest => dest.category === selectedFilter);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={{
        ...styles.header,
        ...(animateIn ? styles.animatedIn : styles.animatedOut)
      }}>
        <h1 style={styles.title}>Explore Destinations</h1>
        <p style={styles.subtitle}>
          Discover breathtaking locations and create unforgettable memories
        </p>
      </div>

      {/* Filters */}
      <div style={{
        ...styles.filters,
        ...(animateIn ? { ...styles.animatedIn, transitionDelay: '0.2s' } : styles.animatedOut)
      }}>
        {filters.map((filter) => {
          const IconComponent = filter.icon;
          return (
            <button
              key={filter.id}
              style={{
                ...styles.filterBtn,
                ...(selectedFilter === filter.id ? styles.filterBtnActive : styles.filterBtnInactive)
              }}
              onClick={() => setSelectedFilter(filter.id)}
              onMouseEnter={(e) => {
                if (selectedFilter !== filter.id) {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedFilter !== filter.id) {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.transform = 'translateY(0)';
                }
              }}
            >
              <IconComponent size={20} />
              {filter.label}
            </button>
          );
        })}
      </div>

      {/* Destinations Grid */}
      <div style={styles.grid}>
        {filteredDestinations.map((dest, index) => (
          <div
            key={dest.id}
            style={{
              ...styles.card,
              ...(animateIn ? {
                ...styles.animatedIn,
                transitionDelay: `${index * 100 + 400}ms`
              } : styles.animatedOut)
            }}
            onMouseEnter={() => setHoveredCard(dest.id)}
            onMouseLeave={() => setHoveredCard(null)}
            // Make the entire card clickable
            onClick={() => handleCardClick(dest.path)}
          >
            {/* Card Image */}
            <div style={styles.imageContainer}>
              <img
                src={dest.imageUrl}
                alt={dest.title}
                style={{
                  ...styles.image,
                  ...(hoveredCard === dest.id ? { transform: 'scale(1.1)' } : {})
                }}
              />
              <div style={styles.overlay}></div>
            </div>

            {/* Content Overlay */}
            <div style={styles.content}>
              <div style={styles.topSection}>
                <div style={styles.badge}>
                  <Star style={{ width: '16px', height: '16px', color: '#f59e0b', fill: '#f59e0b' }} />
                  <span style={styles.badgeText}>{dest.rating}</span>
                </div>
                <div style={styles.badge}>
                  <Clock style={{ width: '16px', height: '16px', color: '#3b82f6' }} />
                  <span style={styles.badgeText}>{dest.duration}</span>
                </div>
              </div>

              <div>
                <h3 style={{
                  ...styles.cardTitle,
                  ...(hoveredCard === dest.id ? { color: '#93c5fd' } : {})
                }}>
                  {dest.title}
                </h3>
                <p style={styles.cardSubtitle}>{dest.subtitle}</p>

                <p style={{
                  ...styles.description,
                  ...(hoveredCard === dest.id ?
                    { opacity: 1, transform: 'translateY(0)' } :
                    { opacity: 0.7, transform: 'translateY(8px)' })
                }}>
                  {dest.description}
                </p>

                {/* Highlights */}
                <div style={{
                  ...styles.highlights,
                  ...(hoveredCard === dest.id ?
                    { opacity: 1, transform: 'translateY(0)' } :
                    { opacity: 0, transform: 'translateY(16px)' })
                }}>
                  {dest.highlights.map((highlight) => (
                    <span key={highlight} style={styles.highlightTag}>
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Explore Now Button */}
                <button
                  style={{
                    ...styles.ctaButton,
                    ...(hoveredCard === dest.id ?
                      { transform: 'translateX(0)', opacity: 1 } :
                      { transform: 'translateX(16px)', opacity: 0 })
                  }}
                  onClick={(e) => {
                    // Stop propagation to prevent card's onClick from firing again
                    e.stopPropagation();
                    handleCardClick(dest.path);
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'white';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  Explore Now
                  <ArrowRight style={{
                    width: '20px',
                    height: '20px',
                    transition: 'transform 0.3s ease'
                  }} />
                </button>
              </div>
            </div>

            <div style={{
              ...styles.hoverBorder,
              ...(hoveredCard === dest.id ? styles.hoverBorderActive : {})
            }}></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div style={{
        ...styles.ctaSection,
        ...(animateIn ? { ...styles.animatedIn, transitionDelay: '0.8s' } : styles.animatedOut)
      }}>
        <p style={styles.ctaText}>
          Can't decide? Let us help you plan the perfect itinerary
        </p>
        {/* <button
          style={styles.planTripBtn}
          onClick={() => navigate('/contact')}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2563eb';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#3b82f6';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
          }}
        >
          Plan My Trip
        </button> */}
        <button
  style={styles.planTripBtn}
  onClick={() => navigate('/contact')}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#2563eb';
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 15px 35px rgba(59, 130, 246, 0.4)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#3b82f6';
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 10px 25px rgba(59, 130, 246, 0.3)';
  }}
>
  Plan My Trip
</button>

      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
    position: 'relative',
    overflow: 'hidden',
    padding: '3rem 1.5rem',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
    transition: 'all 1s ease-out',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '1rem',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  subtitle: {
    fontSize: '1.25rem',
    color: '#6b7280',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.6,
  },
  filters: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
    marginBottom: '3rem',
    transition: 'all 1s ease-out',
  },
  filterBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.75rem 1.5rem',
    border: '2px solid #e5e7eb',
    borderRadius: '50px',
    background: 'white',
    color: '#374151',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
  },
  filterBtnActive: {
    backgroundColor: '#3b82f6',
    borderColor: '#3b82f6',
    color: 'white',
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
  },
  filterBtnInactive: {
    backgroundColor: 'white',
    borderColor: '#e5e7eb',
    color: '#374151',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
    gap: '2rem',
    marginBottom: '5rem',
    maxWidth: '1200px',
    margin: '0 auto 5rem auto',
  },
  card: {
    position: 'relative',
    height: '400px',
    borderRadius: '24px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.7s ease',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },
  imageContainer: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    borderRadius: '24px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.7s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 60%)',
  },
  content: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  badge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    fontSize: '0.875rem',
    fontWeight: '500',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  },
  badgeText: {
    color: '#1f2937',
    fontWeight: '500',
  },
  cardTitle: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: 'white',
    marginBottom: '0.5rem',
    transition: 'color 0.3s ease',
  },
  cardSubtitle: {
    fontSize: '1.125rem',
    color: '#93c5fd',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  description: {
    color: '#e5e7eb',
    marginBottom: '1rem',
    transition: 'all 0.3s ease',
  },
  highlights: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
    transition: 'all 0.3s ease',
  },
  highlightTag: {
    background: 'rgba(255, 255, 255, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    padding: '0.25rem 0.75rem',
    borderRadius: '50px',
    fontSize: '0.75rem',
  },
  ctaButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    background: 'white',
    color: '#1f2937',
    padding: '0.75rem 1.5rem',
    border: 'none',
    borderRadius: '50px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '1rem',
  },
  hoverBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: '24px',
    border: '2px solid transparent',
    transition: 'all 0.3s ease',
  },
  hoverBorderActive: {
    borderColor: '#3b82f6',
    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
  },
  ctaSection: {
    textAlign: 'center',
    transition: 'all 1s ease-out',
  },
  ctaText: {
    color: '#6b7280',
    fontSize: '1.125rem',
    marginBottom: '2rem',
  },
  planTripBtn: {
    background: '#3b82f6',
    color: 'white',
    fontWeight: 'bold',
    padding: '1rem 2rem',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.125rem',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
  },
  animatedIn: {
    opacity: 1,
    transform: 'translateY(0)',
  },
  animatedOut: {
    opacity: 0,
    transform: 'translateY(30px)',
  },
};

export default Destinations;