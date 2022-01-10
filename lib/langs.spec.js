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
const Languages = require("./langs.js")

describe("Returns ", function() {

  it("Should make a languages object", async function() {
    langs = new Languages();
    await langs.fetch();
    assert.equal(langs.getLanguage("Grenadian Creole English")["@id"], langs.getLanguage("gcl")["@id"])
    
  });

});