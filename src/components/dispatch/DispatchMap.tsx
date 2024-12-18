import React, { useCallback, useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';
import { Package, ArrowUpCircle } from 'lucide-react';
import type { DeliveryJob } from '../../types/dispatch';

interface DispatchMapProps {
  jobs: DeliveryJob[];
  onJobSelect?: (job: DeliveryJob) => void;
}

// Mock coordinates for demonstration
const getJobCoordinates = (job: DeliveryJob) => {
  // In a real app, these would come from your job data
  const coordinates = {
    'Downtown': [-74.006, 40.7128], // NYC coordinates
    'Suburbs': [-73.9665, 40.7829], // Upper Manhattan
    'Warehouse': [-74.0060, 40.7505], // Penn Station area
    'Office': [-73.9862, 40.7589], // Midtown
  };
  
  const location = job.location.split(' ')[2]; // Get the last word of location
  return coordinates[location as keyof typeof coordinates] || [-74.006, 40.7128];
};

export const DispatchMap: React.FC<DispatchMapProps> = ({ jobs, onJobSelect }) => {
  const [viewState, setViewState] = useState({
    longitude: -74.006,
    latitude: 40.7128,
    zoom: 11
  });

  const handleMarkerClick = useCallback((job: DeliveryJob) => {
    onJobSelect?.(job);
  }, [onJobSelect]);

  return (
    <div className="h-[300px] w-full rounded-lg overflow-hidden">
      <Map
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/dark-v11"
        mapboxAccessToken="pk.eyJ1IjoiYm9sdC1kZW1vIiwiYSI6ImNsdGk2dHB1ZzE5Y2sya3BleWNqYmx6Y3IifQ.XuYj4TWLmE_nDbBGj2dYug"
      >
        <NavigationControl position="top-right" />
        
        {jobs.map(job => {
          const [longitude, latitude] = getJobCoordinates(job);
          return (
            <Marker
              key={job.id}
              longitude={longitude}
              latitude={latitude}
              anchor="bottom"
              onClick={() => handleMarkerClick(job)}
            >
              <div className={`p-2 rounded-full cursor-pointer transform transition-transform hover:scale-110 ${
                job.type === 'delivery' 
                  ? 'bg-accent-500' 
                  : 'bg-yellow-500'
              }`}>
                {job.type === 'delivery' ? (
                  <Package className="h-5 w-5 text-white" />
                ) : (
                  <ArrowUpCircle className="h-5 w-5 text-white" />
                )}
              </div>
            </Marker>
          );
        })}
      </Map>
    </div>
  );
};