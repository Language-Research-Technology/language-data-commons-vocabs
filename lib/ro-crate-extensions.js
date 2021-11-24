const OldROCrate = require("ro-crate").ROCrate;

class ROCrate extends OldROCrate {

    arcpId(ns, type, id) {
    if (!id.startsWith('/')) {
      id = `/${id}`;
    }
    return `arcp://name,${ns}/${type}${id}`;
  }
  
  // TODO: Move this to RO-Crate library 
   addLgProfile(type) {
    const baseURI = "https://github.com/Language-Research-Technology/ro-crate-profile";
    var URI;
    if (type === "Collection") {
      URI = `${baseURI}#Collection`;
    } else if (type === "Object") {
      URI = `${baseURI}#Object`;
    } else {
      throw "Type needs to be 'Object' or 'Collection'"
    }
    const metadataDescriptor = this.getItem("ro-crate-metadata.json");
    metadataDescriptor.conformsTo = this.utils.asArray(metadataDescriptor.conformsTo)
    metadataDescriptor.conformsTo.push({"@id": URI});
  }

  addProvenance(prov) {
      this.addItem(prov.corpusTool);
      this.addItem(prov.createAction);
  }



  
  
}


  module.exports = ROCrate;