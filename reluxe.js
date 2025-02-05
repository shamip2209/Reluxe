let musicList = []; 

        async function fetchMusicData() {
            try {
                const response = await fetch('https://my-json-server.typicode.com/ridoansaleh/my-music-api/db');
                const data = await response.json();
                musicList = data.songs; 
                displaySongs(musicList); // Initially display all songs
            } catch (error) {
                console.error("Error fetching music data:", error);
            }
        }

        function displaySongs(songs) {
            const tableBody = document.querySelector(".js-table-container");
            tableBody.innerHTML = ""; // Clear previous data

            songs.forEach(song => {
                const row = `
                   <table class="music-table">
                        <tbody style="border: 2px;">
                            <tr class="table-row">
                                <td>${song.id}</td>
                                <td>
                                    <div>${song.title}</div>
                                    <div>${song.singer}</div>
                                </td>
                                <td>${song.genre}</td>
                                <td><a href="https://open.spotify.com/track/5Z3GHaZ6ec9bsiI5BenrbY?si=10ca35a7dad74f80"><button class="play-button">Play</button></a></td>
                            </tr>
                            
                  
                  
                        </tbody>
                  
                    </table>
                `;
                tableBody.innerHTML += row;
            });
        }

        function searchSong() {
            const searchText = document.querySelector(".search-input").value.toLowerCase().trim();
            
            if (searchText === "") {
                displaySongs(musicList); // Show all songs if input is empty
                return;
            }

            const filteredSongs = musicList.filter(song => song.title.toLowerCase().includes(searchText));
            displaySongs(filteredSongs);
        }

        fetchMusicData();

        document.querySelector(".search-input").addEventListener("keydown", (event) => {
            if(event.key==='Enter'){
              searchSong();
            }
        });
            