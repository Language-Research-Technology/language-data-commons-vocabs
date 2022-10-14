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

/* Test for collection.js */

const assert = require("assert");
const Vocab  = require("./vocab.js");

describe("Returns names nicely ", async function() {



  it("Should find all my vocab", async function() {
     v = new Vocab();
     await v.load();
     const an = v.getVocabItem("Annotation");
     assert.equal(an.name, "Annotation");
     assert(an["@id"] === "olac:Annotation");
     assert.equal(v.count("DefinedTerm"), 29);
     assert.equal(v.count("DefinedTermSet"), 5);
     assert.equal(v.count("rdf:Property"), 36);
     assert.equal(v.count("rdfs:Class"), 7);
    const cont = v.getContext();
    console.log(cont)
    assert.equal(cont["Annotation"], "olac:Annotation");
    assert.equal(cont["olac:"], "https://github.com/Language-Research-Technology/language-data-node-tools/blob/master/ontology.md");

  });




  

});