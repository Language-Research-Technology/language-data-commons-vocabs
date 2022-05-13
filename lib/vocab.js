
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

// TODO - put this somewhere more generic - not language specific

const {ROCrate} = require("ro-crate");
const fs = require("fs");
const path = require("path");
const { timingSafeEqual } = require("crypto");
const ONTOLOGY_TYPES = ["rdfs:Class","rdf:Property", "DefinedTerm", "DefinedTermSet"];
const VOCAB_URL = "https://github.com/Language-Research-Technology/language-data-node-tools/blob/master/ontology.md#";
const VOCAB_PREFIX = "olac"
class Vocab {
  constructor() {
    this.__context  = {}
    this.__context[VOCAB_PREFIX] = VOCAB_URL;
    this.__vocabItems = {};
    this.__stats = {}
  }
  async load() {
    const vocabCrate = new ROCrate(JSON.parse(fs.readFileSync(path.join(__dirname, "../ontology/ro-crate-metadata.json"))));
    vocabCrate.index();
    for (let item of vocabCrate.getGraph() ) {
      const t = vocabCrate.utils.asArray(item["@type"])[0];
      if (ONTOLOGY_TYPES.includes(t)) {
        this.__vocabItems[item.name] = item;
        this.__context[item.name] = item["@id"];
        if (!this.__stats[t]) {
          this.__stats[t] = 1;
        } else {
          this.__stats[t] += 1;
        }
      }
    }

  }
  getVocabItem(name) {
    return this.__vocabItems[name];
  }
  getContext() {
    return this.__context;
  }
  count(t) {
    return this.__stats[t];
  }



}

module.exports = Vocab;