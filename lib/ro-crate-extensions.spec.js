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
const ROCrate = require("./ro-crate-extensions.js")
var expect = require('chai').expect;

describe("Add provenance", function() {



  it("Should add something", function() {
     const crate = new ROCrate();
     crate.index();
     crate.addLgProfile("Object");
     assert.equal(crate.metadataFileEntity.conformsTo[1]["@id"], "https://github.com/Language-Research-Technology/ro-crate-profile#Object")

     
  });

  it('should throw an error if you give it the wrong type', function() {
    expect(function() {
        const crate = new ROCrate();
        crate.index();
        crate.addLgProfile("Item")
    }).to.throw("Type needs to be 'Object' or 'Collection'")
  })




  
  

});