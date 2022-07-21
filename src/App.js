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
  const [hideConfirmation, setHideConfirmation] = useState(() => () => {});
  

  useEffect(() => {
    const nasaFavorites = JSON.parse(localStorage.getItem('nasaFavorites'));
    if (nasaFavorites) {
      setFavorites(nasaFavorites);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('nasaFavorites', JSON.stringify(favorites))
  }, [favorites]);

  useEffect(() => {
    setApiURL(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${countImages}`);
  }, [countImages, apiKey]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(apiURL);
        const resultsArray = await ((response) => {
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
        setError(error.message);
        setApodData([]);
      } finally {
        setIsLoading(false)
      }
    })();
  }, [loadTimes]);

  useEffect(() => {
    const interval = setInterval(() => {
      hideConfirmation();
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
    if (isNewFavorite(url)) {
      const card = apodData.find(card => card.url === url);
      setFavorites((prev) => {
        return [...prev, card];
      });
      setShowAdded(true);
      setShowRemoved(false);
      setHideConfirmation(() => () => {
        setShowAdded(false);
      });
    };
  };

  const removeFavorite = (url) => {
    const newFavorites = favorites.filter(card => card.url !== url)
    setFavorites(newFavorites);
    setShowAdded(false);
    setShowRemoved(true);
    setHideConfirmation(() => () => {
      setShowRemoved(false);
    });
  }


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
                    setIsFavoritesPage(false)
                  }}>Go Back</h3>
                  <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
                  <h3 className="clickable" onClick={() => {
                    loadMore()
                    setIsFavoritesPage(false)
                  }}>Load More NASA Images</h3>
                </span>
                :
                <span className="navigation-items" id="resultsNav">
                  <h3 className="clickable" onClick={() => {
                    setIsFavoritesPage(true)
                  }}>Favorites</h3>
                  <h3>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;</h3>
                  <h3 className="clickable" onClick={loadMore}>Load More NASA Images</h3>
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
