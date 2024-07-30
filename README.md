# Language Data Commons Vocabulary Tools


This is a set of libraries and vocabularies supporting the use of RO-Crate lanaguage data.

It contains:

- A vocabulary (Classes, Properties, Defined Terms and Defined Term Sets) for the [Language Data Commons RO-Crate Profile](https://github.com/Language-Research-Technology/ldac-profile)
- Other vocabularies for collections held by the Lanaguage Data Commons of Australia (e.g. AusTalk)
- A library for using these vocabularies in Node code to generate RO-Crates.

<br>

## Language Data Commons Schema Terms Updates

Updates to the Language Data Commons Schema Terms can be made in `ontology/ro-crate-metadata.json` which is used to create `ontology.md`.

### Capitalisation of Term Names

Classes, Defined Terms and Defined Term Sets should have uppercase names (e.g. CollectionEvent) and Properties should have lowercase (e.g. annotationOf).
Capitalisation can be checked using the following regexes:
- Find Properties that should be lowercase: `terms#[A-Z].*$\n.*Property`
- Find Classes, Defined Terms and Defined Term Sets that should be uppercase: `terms#[^A-Z].*$\n.*(Class|Defined)`

### Regenerate ontology.md

To generate a new version of `ontology.md` run:

`make ont`