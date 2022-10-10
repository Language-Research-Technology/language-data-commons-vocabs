arkisto-types:
	rocxl ontology ;  cp ontology/ro-crate-metadata.json ../arkisto-type-definitions/schema.org-extensions/text-commons-extensions.jsonld ; cd ../arkisto-type-definitions/; ./write-schema-org-types ; cd -

ont:
	rocschema ontology  -t -u https://purl.archive.org/language-data-node-tools/terms 
	rocschema ontology -t --html -u https://purl.archive.org/language-data-node-tools/terms  

austalk:
	rocschema --html vocabs/austalk  
	rocschema  vocabs/austalk  