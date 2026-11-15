import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BUSINESS } from '@/config/business';
import { photoCategories } from '@/data/gallery';

// Category-specific alt text descriptions for better accessibility
const categoryDescriptions: Record<string, string> = {
  'Ameristar': 'Ameristar ornamental steel fence installation in Tulsa area',
  'Commercial': 'Commercial security fence installation for business property',
  'Gates-and-Gate-Operators': 'Custom gate and automatic gate operator installation',
  'Pre-Stained': 'Pre-stained wood fence showcasing available color options',
  'Privacy': 'Privacy fence installation for residential property in Oklahoma',
  'Round Rail': 'Round rail ranch-style fence installation',
  'Vinyl': 'Vinyl fence installation with low-maintenance design'
};

const getImageAltText = (category: string, index: number): string => {
  const baseDescription = categoryDescriptions[category] || `${category} fence project`;
  return `${baseDescription} - Project ${index + 1} by Omni Fence and Deck`;
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<{ src: string; category: string } | null>(null);

  // Get all categories including 'All'
  const categories = ['All', ...Object.keys(photoCategories)];

  // Filter images based on selected category
  const filteredImages = useMemo(() => {
    // Helper function to encode spaces as %20 but leave other characters alone
    const encodeSpaces = (str: string) => {
      return str.replace(/ /g, '%20');
    };

    if (selectedCategory === 'All') {
      // Return all images with their category info
      return Object.entries(photoCategories).flatMap(([category, images]) =>
        images.map(image => ({
          src: `/${encodeSpaces(category)}/${encodeSpaces(image)}`,
          category,
          filename: image
        }))
      );
    } else {
      // Return images from selected category
      return photoCategories[selectedCategory as keyof typeof photoCategories]?.map(image => ({
        src: `/${encodeSpaces(selectedCategory)}/${encodeSpaces(image)}`,
        category: selectedCategory,
        filename: image
      })) || [];
    }
  }, [selectedCategory]);

  const openLightbox = (imageSrc: string, category: string) => {
    setSelectedImage({ src: imageSrc, category });
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Handle Escape key to close lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        closeLightbox();
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Project Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our completed fence and deck projects. See the quality and craftsmanship that sets us apart.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-heading font-semibold mb-2">Filter by Project Type</h2>
            <p className="text-gray-600">Select a category to view specific project types</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "hover:bg-primary hover:text-white"
                }`}
              >
                {category}
                {category !== 'All' && (
                  <Badge variant="secondary" className="ml-2">
                    {photoCategories[category as keyof typeof photoCategories]?.length || 0}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-12">
        <div className="container-custom">
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <Card
                  key={`${image.category}-${index}`}
                  className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group"
                  onClick={() => openLightbox(image.src, image.category)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={getImageAltText(image.category, index)}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      <div className="absolute top-2 left-2">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {image.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No images found for the selected category.</p>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <span id="lightbox-title" className="sr-only">
            Image viewer - {selectedImage.category} project
          </span>
          <div className="relative max-w-7xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
              aria-label="Close image viewer"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={`${selectedImage.category} fence project by Omni Fence`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us bring your vision to life with our expert craftsmanship and quality materials.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/quote">Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="hover:bg-primary/10 hover:text-primary hover:border-primary/30">
              <a href={`tel:${BUSINESS.phoneRaw}`}>Call {BUSINESS.phone}</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
