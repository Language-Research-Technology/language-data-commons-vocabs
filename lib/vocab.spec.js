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
     assert(an["@id"] === "https://purl.archive.org/language-data-commons/terms#Annotation");
     assert.equal(v.count("DefinedTerm"), 43);
     assert.equal(v.count("DefinedTermSet"), 9);
     assert.equal(v.count("rdf:Property"), 46);
     assert.equal(v.count("rdfs:Class"), 9);
    const cont = v.getContext();
    assert.equal(cont["Annotation"], "https://purl.archive.org/language-data-commons/terms#Annotation");

  });
 

});