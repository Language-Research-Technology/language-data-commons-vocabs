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
const prof = require("./profiles.js")

describe("Returns ", function() {



  it("Should make a prov object", function() {

     assert.equal(prof("Collection"), "https://github.com/Language-Research-Technology/ro-crate-profile#Collection")
     assert.equal(prof("Object"), "https://github.com/Language-Research-Technology/ro-crate-profile#Object")

    try {
      prof("it");
    } catch(e) {
      assert.equal(e, "Type needs to be 'Object' or 'Collection'", "Throws an exception if you give it a dodgy type")
    }
    
  });




  

});