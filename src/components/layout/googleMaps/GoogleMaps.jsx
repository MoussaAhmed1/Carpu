import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Input,
} from '@chakra-ui/react';

import {FaLocationArrow, FaTimes } from 'react-icons/fa'
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api'
import { useRef, useState } from 'react'
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
const center = { lat: 30.472876 , lng: 30.926498 }

function GoogleMaps({handelTo,handelFrom,setDistance,setDuration,distance,duration,setDuration_Distance}) {



  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyB-HGfNuvKBsRd8DNnzDLb_9xg9xc38rkg",
    libraries: ['places'],
  })

  const [map, setMap] = useState(/** @type google.maps.Map */ (null))
  const [directionsResponse, setDirectionsResponse] = useState(null)
  // const [selected, setSelected] = useState(null);

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef("")
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef("")

  if (!isLoaded) {
    return "......"
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
    const duration =  results.routes[0].legs[0].duration.text
    const distance =  results.routes[0].legs[0].distance.text
    setDuration_Distance(duration,distance)
     
  }

  function clearRoute() {
    setDirectionsResponse(null)
    setDistance('')
    setDuration('')
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    > 
      <Box position='absolute' left={0} top={0} h='100%' w='100%'>
        {/* Google Map Box */}
        <GoogleMap
          center={center}
          zoom={15}
          mapContainerStyle={{ width: '100%', height: '100%' }}
          options={{
            zoomControl: true,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={map => setMap(map)}
        >
          <Marker position={center} />
          {directionsResponse && (
            <DirectionsRenderer directions={directionsResponse} />
          )}
        </GoogleMap>
      </Box>
      <Box
        p={4}
        borderRadius='lg'
        m={4}
        bgColor='white'
        shadow='base'
        minW='container.md'
        zIndex='1'
      >
        <HStack spacing={5} justifyContent='space-between' >
          <Box flexGrow={1} >
            <Autocomplete >
              <Input  type='text' placeholder='Origin' ref={originRef} value={originRef.current.value}
                onChange={(e)=>handelFrom(e.target.value)}
                onSelect={(e)=>handelFrom(e.target.value)}
                />
            </Autocomplete>


            {/* <div className="places-container">
        <PlacesAutocomplete setSelected={setSelected} handelFrom={handelFrom} />
      </div> */}
          </Box>
          <Box flexGrow={1}>
            <Autocomplete >
              <Input
                type='text'
                placeholder='Destination'
                ref={destiantionRef}
                value={destiantionRef.current.value}
                onChange={(e)=>handelTo(e.target.value)}
                onSelect={(e)=>handelTo(e.target.value)}
              />
            </Autocomplete>
          </Box>

          <ButtonGroup>
            <Button colorScheme='pink' type='submit' onClick={calculateRoute}>
              Calculate Route
            </Button>
            <IconButton
              aria-label='center back'
              icon={<FaTimes />}
              onClick={clearRoute}
            />
          </ButtonGroup>
        </HStack>
        <HStack spacing={4} mt={5} justifyContent='space-between'>
          <h6 className='text-primary my-2'>Distance: {distance} </h6>
          <h6 className='text-primary my-2'>Duration: {duration} </h6>
          <IconButton
            aria-label='center back'
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center)
              map.setZoom(15)
            }}
          />
        </HStack>
      
      </Box>
      
    </Flex>

  )
}


export default GoogleMaps


