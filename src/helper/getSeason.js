
import axios from "axios";

export default  async  function getSeason (id){
   
        const response = await axios.get(
            'https://www.breakingbadapi.com/api/episodes'
        )
        const season = await(response.data)
        const filteredSeason = await season.filter(seasonfilter => seasonfilter.season === id && seasonfilter.series ==="Breaking Bad")
        return filteredSeason;

      
}




