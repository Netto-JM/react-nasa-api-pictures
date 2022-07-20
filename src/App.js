import React, { useState, useEffect } from 'react';
import rocket from './rocket.svg';
import './App.css';
import ImagesContainer from "./components/images-container/images-container.component";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loadTimes, setLoadTimes] = useState(0);
  const [countImages, setCountImages] = useState(10);
  const [apiKey, setApiKey] = useState('DEMO_KEY');
  const [apiURL, setApiURL] = useState(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${countImages}`);
  const [apodData, setApodData] = useState([]);
  const [isFavoritesPage, setIsFavoritesPage] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [showAdded, setShowAdded] = useState(false);
  const [showRemoved, setShowRemoved] = useState(false);
  const [hideConfirmation, setHideConfirmation] = useState(0);

  useEffect(() => {
    setApiURL(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${countImages}`);
  }, [countImages, apiKey]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiURL);
        resultsArray = await ((response) => {
          if (!response.ok) {
            throw new Error(
              `This is an HTTP error: The status is ${response.status}`
            );
          }
          return response.json();
        })(response);
        setApodData(resultsArray);
        setError(null);
      } catch (error) {
        console.log(error.message);
        setError(error.message);
        setApodData([]);
      } finally {
        setIsLoading(false)
      }
    })();
  }, [loadTimes]);



  useEffect(() => {
    const interval = setInterval(() => {
      setShowAdded(false);
      setShowRemoved(false);
    }, 2000);

    return () => clearInterval(interval);
  }, [hideConfirmation]);


  const loadMore = () => {
    setLoadTimes((prev) => prev + 1);
  };

  const isNewFavorite = (url) => {
    const index = favorites.findIndex(card => card.url === url);
    return index === -1;
  }

  const saveFavorite = (url) => {
    const card = apodData.find(card => card.url === url);
    if (isNewFavorite) {
      setFavorites((prev) => {
        return [...prev, card];
      });
      setShowAdded(true);
      setShowRemoved(false);
      setHideConfirmation((prev) => prev + 1);
    };
  };

  const removeFavorite = (url) => {
    const newFavorites = favorites.filter(card => card.url !== url)
    setFavorites(newFavorites);
    setShowAdded(false);
    setShowRemoved(true);
    setHideConfirmation((prev) => prev + 1);
  }

  let resultsArray = [{
      "copyright": "Wally Pacholka",
      "date": "2005-10-31",
      "explanation": "From sunset to sunrise, an unusually bright yellowish orb will hang in the sky this Halloween: Mars.  Yesterday, Earth passed Mars as they orbited the Sun, bringing Mars closer than it will be for the next thirteen years.  Tonight though, Mars will be nearly as bright as last night, a beacon of extraterrestrial spookiness.  Opposite the Sun, Mars will rise just when the Sun sets, set just when the Sun rises, and be visible the entire night.  Mars will not always be the brightest object in tonight's sky, though.  Brighter than even Mars, almost spooky Venus will light up the western horizon for a brief time just after sunset.   Please have a safe and happy All Hallows Eve.",
      "hdurl": "https://apod.nasa.gov/apod/image/0510/marshalloween_pacholka_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "A Martian Halloween",
      "url": "https://apod.nasa.gov/apod/image/0510/marshalloween_pacholka.jpg"
    },
    {
      "date": "2021-09-15",
      "explanation": "Where on Earth do cyclones go? Usually known as hurricanes when in the Atlantic Ocean and typhoons when in the Pacific, the featured map shows the path of all major storms from 1985 through 2005.  The map shows graphically that cyclones usually occur over water, which makes sense since evaporating warm water gives them energy. The map also shows that cyclones never cross -- and rarely approach -- the Earth's equator, since the Coriolis effect goes to zero there, and cyclones need the Coriolis force to circulate. The Coriolis force also causes cyclone paths to arc away from the equator. Although long-term trends remain a topic of research, evidence indicates that hurricanes have become, on the average, more powerful in the North Atlantic over the past 30 years, and their power is projected to keep increasing.   Follow APOD on Instagram in: English, Farsi, Indonesian, Persian, or Portuguese",
      "hdurl": "https://apod.nasa.gov/apod/image/2109/StormPaths_NHC_8000.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Cyclone Paths on Planet Earth",
      "url": "https://apod.nasa.gov/apod/image/2109/StormPaths_NHC_1080.jpg"
    },
    {
      "date": "2002-05-16",
      "explanation": "During April and May, attention has been focused on the western evening sky, presenting its spectacle of bright planets and crescent moons shortly after sunset. Meanwhile, the the Sun itself has not been just sinking quietly below the horizon. For example on May 2nd, two enormous clouds of energetic particles blasted away from the solar surface in nearly simultaneous eruptions. Known as coronal mass ejections (CMEs), they appear as large \"bubbles\" oriented at about 2 o'clock and 8 o'clock in this composite image from cameras onboard the sun-staring SOHO spacecraft. At picture center, an extreme ultraviolet image of the Sun recorded near the time of these eruptions has been superimposed for scale. The blank region surrounding it corresponds to an occulting disk in one of SOHO's coronagraphic cameras. Speeding outward at millions of kilometers per hour, these two CMEs missed our fair planet. But those that do impact Earth's magnetosphere often trigger auroral displays and disruptions.",
      "hdurl": "https://apod.nasa.gov/apod/image/0205/doublecme_soho_big.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Double Trouble Solar Bubbles",
      "url": "https://apod.nasa.gov/apod/image/0205/doublecme_soho.jpg"
    },
    {
      "copyright": "Hubble Legacy Archive",
      "date": "2018-05-25",
      "explanation": "This stunning group of galaxies is far, far away, about 450 million light-years from planet Earth and cataloged as galaxy cluster Abell S0740. Dominated by the cluster's large central elliptical galaxy (ESO 325-G004), this reprocessed Hubble Space Telescope view takes in a remarkable assortment of galaxy shapes and sizes with only a few spiky foreground stars scattered through the field. The giant elliptical galaxy (right of center) spans over 100,000 light years and contains about 100 billion stars, comparable in size to our own spiral Milky Way galaxy. The Hubble data can reveal a wealth of detail in even these distant galaxies, including arms and dust lanes, star clusters, ring structures, and gravitational lensing arcs.",
      "hdurl": "https://apod.nasa.gov/apod/image/1805/ESO325-Pestana.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Galaxies Away",
      "url": "https://apod.nasa.gov/apod/image/1805/ESO325-Pestana1024.jpg"
    },
    {
      "copyright": "John P. Gleason",
      "date": "2009-09-16",
      "explanation": "The Tarantula Nebula is more than 1,000 light-years in diameter -- a giant star forming region within our neighboring galaxy the Large Magellanic Cloud (LMC). That cosmic arachnid lies left of center in this sharp, colorful telescopic image taken through narrow-band filters. It covers a part of the LMC over 2,000 light-years across. Within the Tarantula (NGC 2070), intense radiation, stellar winds and supernova shocks from the central young cluster of massive stars, cataloged as R136, energize the nebular glow and shape the spidery filaments. Around the Tarantula are other violent star-forming regions with young star clusters, filaments and bubble-shaped clouds. The rich field is about as wide as the full Moon on the sky, located in the southern constellation Dorado.   digg_url ='http://apod.nasa.gov/apod/ap090916.html'; digg_skin = 'compact';",
      "hdurl": "https://apod.nasa.gov/apod/image/0909/tarantula_gleason.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "The Tarantula Zone",
      "url": "https://apod.nasa.gov/apod/image/0909/tarantula_gleason900.jpg"
    },
    {
      "copyright": "CARA Project",
      "date": "2015-02-27",
      "explanation": "Buffeted by the solar wind, Comet Lovejoy's crooked ion tail stretches over 3 degrees across this telescopic field of view, recorded on February 20. The starry background includes awesome bluish star Phi Persei below, and pretty planetary nebula M76 just above Lovejoy's long tail. Also known as the Little Dumbbell Nebula, after its brighter cousin M27 the Dumbbell Nebula, M76 is only a Full Moon's width away from the comet's greenish coma. Still shining in northern hemisphere skies, this Comet Lovejoy (C/2014 Q2) is outbound from the inner solar system some 10 light-minutes or 190 million kilometers from Earth. But the Little Dumbbell actually lies over 3 thousand light-years away. Now sweeping steadily north toward the constellation Cassiopeia Comet Lovejoy is fading more slowly than predicted and is still a good target for small telescopes.",
      "hdurl": "https://apod.nasa.gov/apod/image/1502/Feb20Lovejoy_astroligu60.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Long Lovejoy and Little Dumbbell",
      "url": "https://apod.nasa.gov/apod/image/1502/Feb20Lovejoy_astroligu60c1024.jpg"
    },
    {
      "copyright": "Bob Andersson",
      "date": "2013-04-15",
      "explanation": "Stars are forming in the Soul of the Queen of Aethopia. More specifically, a large star forming region called the Soul Nebula can be found in the direction of the constellation Cassiopeia, who Greek mythology credits as the vain wife of a King who long ago ruled lands surrounding the upper Nile river. The Soul Nebula houses several open clusters of stars, a large radio source known as W5, and huge evacuated bubbles formed by the winds of young massive stars. Located about 6,500 light years away, the Soul Nebula spans about 100 light years and is usually imaged next to its celestial neighbor the Heart Nebula (IC 1805). The above image appears mostly red due to the emission of a specific color of light emitted by excited hydrogen gas.   Follow APOD on: Facebook (Daily) (Sky) (Spanish) or Google Plus (Daily) (River)",
      "hdurl": "https://apod.nasa.gov/apod/image/1304/soul_andersson_2048.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "IC 1848: The Soul Nebula",
      "url": "https://apod.nasa.gov/apod/image/1304/soul_andersson_960.jpg"
    },
    {
      "date": "1997-05-02",
      "explanation": "The life-cycles of stars help drive the ecology of our Galaxy, churning, processing, and redistributing matter. Massive stars reach a spectacular evolutionary endpoint - supernovae explosions which blast off their outer layers, violently merging stellar material with the gas and dust of the Milky Way. The supernova remnant IC 443 is typical of the aftermath. Seen in this false color X-ray image are the shocked, expanding shells of gas from a star which exploded thousands of years ago. Known to be interacting with galactic molecular clouds, the expanding supernova remnant was also recently discovered to have regions of intense higher energy X-ray emission (coded blue in this map) near the molecular cloud boundaries. This X-ray emission may indicate that electrons are being accelerated within the remnant, gaining in energy as they surf back and forth across the expanding shock wave. If so, IC 443 could also be one source of our Galaxy's puzzling high energy cosmic-rays.",
      "hdurl": "https://apod.nasa.gov/apod/image/9705/ic443_asca_orig.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "X-Rays From IC 443\nCredit:",
      "url": "https://apod.nasa.gov/apod/image/9705/ic443_asca.jpg"
    },
    {
      "date": "2018-04-24",
      "explanation": "Sure, you've seen Saturn's rings -- but have you ever heard them? Well then please take this opportunity to play Saturn's rings like a harp.  In the featured sonification, increasing brighter regions of Saturn's central B-ring play as increasingly higher pitched notes. With a computer browser, click anywhere on the image to begin, and pluck consecutive strings by sliding the spacecraft icon's magnetometer boom across the strings.  Both manual and automatic modes are possible.  The featured natural-color image was taken by the late Cassini spacecraft in 2017 July as it grazed Saturn's rings and took the highest-resolution ring images ever.  The reason why the mostly water-ice rings have a tan hue -- instead of white -- is currently a topic of research.  Played in minor harmony, a different false-color version of the same image appears where regions with a greater abundance of water ice appears more red.",
      "media_type": "video",
      "service_version": "v1",
      "title": "Play Saturn's Rings Like a Harp",
      "url": "https://apod.nasa.gov/apod/image/1804/saturn-harp/index.html"
    },
    {
      "date": "2014-04-25",
      "explanation": "\"Beautiful Nebula discovered between the Balance [Libra] & the Serpent [Serpens] ...\" begins the description of the 5th entry in 18th century astronomer Charles Messier's famous catalog of nebulae and star clusters. Though it appeared to Messier to be fuzzy and round and without stars, Messier 5 (M5) is now known to be a globular star cluster, 100,000 stars or more, bound by gravity and packed into a region around 165 light-years in diameter. It lies some 25,000 light-years away. Roaming the halo of our galaxy, globular star clusters are ancient members of the Milky Way. M5 is one of the oldest globulars, its stars estimated to be nearly 13 billion years old. The beautiful star cluster is a popular target for Earthbound telescopes. Of course, deployed in low Earth orbit on April 25, 1990, the Hubble Space Telescope has also captured its own stunning close-up view that spans about 20 light-years near the central region of M5. Even close to its dense core at the left, the cluster's aging red and blue giant stars and rejuvenated blue stragglers stand out in yellow and blue hues in the sharp color image.",
      "hdurl": "https://apod.nasa.gov/apod/image/1404/m5hst2048.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Hubble's Messier 5",
      "url": "https://apod.nasa.gov/apod/image/1404/m5hst950.jpg"
    }
  ];

  return (
    <React.Fragment>
      {
      isLoading 
      ?
        <div className="loader">
          <img src={rocket} alt="Rocket Loading Animation" />
        </div>
      :
      error
      ?
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      :
        <>
          <div className="container">
            <div className="navigation-container">
              <span className="background"></span>
              {
                isFavoritesPage
                ?
                <span className="navigation-items" id="favoritesNav">
                  <h3 className="clickable" onClick={() => {
                    loadMore()
                    setIsFavoritesPage(false)
                  }}>Load More NASA Images</h3>
                  <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
                  <h3 className="clickable" onClick={() => {
                    setIsFavoritesPage(false)
                  }}>Go Back</h3>
                </span>
                :
                <span className="navigation-items" id="resultsNav">
                  <h3 className="clickable" onClick={() => {
                    setIsFavoritesPage(true)
                  }}>Favorites</h3>
                  <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
                  <h3 className="clickable" onClick={loadMore}>Load More</h3>
                </span>
                }
            </div>
            {
              isFavoritesPage
              ?
              < ImagesContainer cards = {
              favorites
              }
              saveFavorite = {
                saveFavorite
              }
              removeFavorite = {
                removeFavorite
              }
              favoritPage = {
                true
              }
              />
              :
              < ImagesContainer cards = {
                apodData
              }
              saveFavorite = {
                saveFavorite
              }
              removeFavorite = {
                removeFavorite
              }
              favoritPage = {
                false
              }
              />
            }
          </div>
          { showAdded &&
          <div className="confirmed">
            <h1>ADDED!</h1>
          </div>
          }
          { showRemoved &&
          <div className="confirmed">
            <h1>REMOVED!</h1>
          </div>
          }
        </>
      }
    </React.Fragment>
  );
}

export default App;
