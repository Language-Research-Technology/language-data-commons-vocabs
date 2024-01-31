arkisto-types:
	rocxl ontology ;  cp ontology/ro-crate-metadata.json ../arkisto-type-definitions/schema.org-extensions/text-commons-extensions.jsonld ; cd ../arkisto-type-definitions/; ./write-schema-org-types ; cd -

ont:
	rocschema ontology  -t -u https://w3id.org/ldac/terms 
	rocschema ontology -t --html -u https://w3id.org/ldac/terms  

austalk:
	rocschema --html vocabs/austalk  
	rocschema  vocabs/austalk  