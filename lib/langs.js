
/* This is part of RO-Crate-language tools 

(c) The University of Queensland 2021

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

const axios = require("axios");
const LANGUAGE_DATA_URL = "https://raw.githubusercontent.com/Arkisto-Platform/describo-data-packs/698c16a6b35dc9179cac7c6d794186e10396649c/ISO-639-6-language-data/iso-639-6-language-data-pack.json"

class Languages {
  constructor() {
    
  }
  async fetch() {
    const response = await axios.get(LANGUAGE_DATA_URL,{headers: {
      'accept': "application/ld+json, application/ld+json, text/text" 
      } });
    

    this.__langs = response.data;
    this.__lookupByName = {};
    for (let lg of this.__langs) {
      //console.log(lg["name"])
      this.__lookupByName[lg["name"]] = lg;
      this.__lookupByName[lg["alternateName"]] = lg;

    }
  }
  getLanguage(name) {
    return this.__lookupByName[name];
  }

  }


module.exports = Languages;