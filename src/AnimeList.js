import React, { Component } from 'react';
import './App.css';

// Source: https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/
function removeTags(str) { 
    if ((str===null) || (str==='')) 
        return false; 
    else
        str = str.toString(); 
          
    // Regular expression to identify HTML tags in  
    // the input string. Replacing the identified  
    // HTML tag with a null string. 
    return str.replace( /(<([^>]+)>)/ig, ''); 
} 

// Source: https://www.w3resource.com/javascript-exercises/javascript-date-exercise-37.php
function timezone() 
{ 
  return /\((.*)\)/.exec(new Date().toString())[1];
}

class Mats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anime: [],
            season: "",
            seasonYear: 0
        };
    }

    componentDidMount() {
        const d = new Date();
        let y = 0;
        let s = "";
        y = d.getFullYear();
        const month = d.getMonth();
        if (month >= 0 && month <= 2) {
            s = "WINTER";
        } else if (month >= 3 && month <= 5) {
            s = "SPRING";
        } else if (month >= 6 && month <= 8) {
            s = "SUMMER";
        } else {
            s = "FALL";
        }
        this.getData(s, y).then(results => {
            return this.setState({
                anime: results,
                season: s,
                seasonYear: y 
            })
        }).catch(error => console.log(error));
    }

    getData(season, seasonYear) {
        const vars = {
            season: season,
            page: 1,
            perPage: 20,
            seasonYear: seasonYear,
        };
        let query = `
        query ($season: MediaSeason, $page: Int, $perPage: Int, $seasonYear: Int) {
            page: Page(page: $page, perPage: $perPage) {
                pageInfo: pageInfo {
                    total
                    perPage
                    currentPage
                    lastPage
                    hasNextPage
                }
                anime: media(season: $season, seasonYear: $seasonYear, sort:POPULARITY_DESC) {
                    title {
                        native
                        romaji
                        english
                    }
                    description
                    startDate {
                        year
                        month
                        day
                    }
                    endDate {
                        year
                        month
                        day
                    }
                    coverImage {
                        extraLarge
                        large
                        medium
                        color
                    }
                    bannerImage
                    genres
                    startDate {
                        year
                        month
                        day
                    }
                    nextAiringEpisode {
                        airingAt
                        timeUntilAiring
                        episode
                    }
                    popularity
                    externalLinks {
                        id
                        url
                        site
                      }
                }
            }
        }
        `;
    
    
        let url = 'https://graphql.anilist.co',
            options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify({
                    query: query,
                    variables: vars
                })
            };
        let anime;
        anime = fetch(url, options).then(response => response.json())
                        .then(data => {
                            anime = data.data.page.anime;
                            return anime;
                        })
                        .catch(error => console.log(error));
        return anime;
    }
    
    render() {
        console.log(this.state.anime);
        if (typeof this.state.anime === 'undefined') {
            return (
                <div className="mats-container">
                    <h1>MATS</h1>
                    <div>
                        Could not load the information. Try reloading the page.
                    </div>
                </div>
            );
        } else {
            return (
                <div className="mats-container">
                    <h1>MATS</h1>
                    <h2>{this.state.season} Anime {this.state.seasonYear}</h2>
                    <div className="anime-container">
                        {this.state.anime.map(show => {
                            const airing = show.nextAiringEpisode === null? "Completed": new Date(show.nextAiringEpisode.airingAt * 1000);
                            let time = "";
                            if (airing === "Completed") {
                                time = "Finished Airing.";
                            } else {
                                time = time.concat('Airing at ', (airing.getMonth() + 1).toString(), '-', airing.getDate(), '-', airing.getFullYear(), ' at ', airing.getHours(), ':', airing.getMinutes() < 10? "0" + airing.getMinutes(): airing.getMinutes(), ' ', timezone());
                            } 
                            return (
                            <div className="anime-card" key={show.title.native}>
                                <a href={show.externalLinks.filter(exlink => exlink.site === "Official Site")[0].site === "Official Site"?show.externalLinks.filter(exlink => exlink.site === "Official Site")[0].url:"/mats"}>
                                    <img src={show.coverImage.extraLarge} alt="Show Cover"></img>
                                </a>
                                <p>{show.title.romaji}</p>
                                <div className="layer-slidedown">
                                    <div className="layer-slidedown-text">{time}</div>
                                    <div className="layer-slidedown-text">{removeTags(show.description)}</div>
                                </div>
                            </div>
                            )
                        })} 
                    </div>
                </div>
            );
        }
    }

}

export default Mats;