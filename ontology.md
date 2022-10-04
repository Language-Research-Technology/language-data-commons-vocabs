# Classes

<a href="#PrimaryText">PrimaryText</a> | <a href="#Annotation">Annotation</a> | <a href="#CollectionEvent">CollectionEvent</a> | <a href="#CollectionProtocol">CollectionProtocol</a> | <a href="#DerivedResource">DerivedResource</a> | <a href="#OrganizationBasedLicense">OrganizationBasedLicense</a> | <a href="#OrganizationDepositLicense">OrganizationDepositLicense</a> | <a href="#OrganizationReuseLicense">OrganizationReuseLicense</a> | <a href="#PersonSnapshot">PersonSnapshot</a>

# Properties

<a href="#annotationOf">annotationOf</a> | <a href="#annotationType">annotationType</a> | <a href="#annotator">annotator</a> | <a href="#author">author</a> | <a href="#channels">channels</a> | <a href="#collectionEventType">collectionEventType</a> | <a href="#collectionProtocolType">collectionProtocolType</a> | <a href="#compiler">compiler</a> | <a href="#consultant">consultant</a> | <a href="#dataInputter">dataInputter</a> | <a href="#depositor">depositor</a> | <a href="#derivationOf">derivationOf</a> | <a href="#developer">developer</a> | <a href="#doi">doi</a> | <a href="#editor">editor</a> | <a href="#geoJSON">geoJSON</a> | <a href="#hasAnnotation">hasAnnotation</a> | <a href="#hasDerivation">hasDerivation</a> | <a href="#illustrator">illustrator</a> | <a href="#indexableText">indexableText</a> | <a href="#interpreter">interpreter</a> | <a href="#interviewee">interviewee</a> | <a href="#interviewer">interviewer</a> | <a href="#licensedOrganization">licensedOrganization</a> | <a href="#linguisticGenre">linguisticGenre</a> | <a href="#modality">modality</a> | <a href="#participant">participant</a> | <a href="#performer">performer</a> | <a href="#person">person</a> | <a href="#photographer">photographer</a> | <a href="#recorder">recorder</a> | <a href="#register">register</a> | <a href="#researchParticipant">researchParticipant</a> | <a href="#researcher">researcher</a> | <a href="#responder">responder</a> | <a href="#signer">signer</a> | <a href="#singer">singer</a> | <a href="#speaker">speaker</a> | <a href="#sponsor">sponsor</a> | <a href="#transcriber">transcriber</a> | <a href="#translator">translator</a> | <a href="#hasCollectionProtocol">hasCollectionProtocol</a> | <a href="#isDeIdentified">isDeIdentified</a>

# DefinedTerms

<a href="#Coded">Coded</a> | <a href="#Dialogue">Dialogue</a> | <a href="#Drama">Drama</a> | <a href="#ElicitationTask">ElicitationTask</a> | <a href="#Formulaic">Formulaic</a> | <a href="#Gesture">Gesture</a> | <a href="#Handwritten">Handwritten</a> | <a href="#Informational">Informational</a> | <a href="#Interview">Interview</a> | <a href="#Lexicon">Lexicon</a> | <a href="#Ludic">Ludic</a> | <a href="#Oratory">Oratory</a> | <a href="#Orthographic">Orthographic</a> | <a href="#PartOfSpeech">PartOfSpeech</a> | <a href="#Phonemic">Phonemic</a> | <a href="#Phonetic">Phonetic</a> | <a href="#Phonological">Phonological</a> | <a href="#Procedural">Procedural</a> | <a href="#Prosodic">Prosodic</a> | <a href="#Report">Report</a> | <a href="#Semantic">Semantic</a> | <a href="#Session">Session</a> | <a href="#SignLanguage">SignLanguage</a> | <a href="#Song">Song</a> | <a href="#SpokenLanguage">SpokenLanguage</a> | <a href="#Syntactic">Syntactic</a> | <a href="#TextSelectionCriteria">TextSelectionCriteria</a> | <a href="#Thesaurus">Thesaurus</a> | <a href="#TimeAligned">TimeAligned</a> | <a href="#Narrative">Narrative</a> | <a href="#Transcription">Transcription</a> | <a href="#Translation">Translation</a> | <a href="#Typeset">Typeset</a> | <a href="#Typewritten">Typewritten</a> | <a href="#WrittenLanguage">WrittenLanguage</a> | <a href="#WhistledLanguage">WhistledLanguage</a>



# DefinedTermsSets

<a href="#CollectionEventTypeTerms">CollectionEventTypeTerms</a> | <a href="#CollectionProtocolTypeTerms">CollectionProtocolTypeTerms</a> | <a href="#ModalityTerms">ModalityTerms</a> | <a href="#AnnotationTypeTerms">AnnotationTypeTerms</a> | <a href="#WrittenLanguageTypeTerms">WrittenLanguageTypeTerms</a> | <a href="#LinguisticGenreTerms">LinguisticGenreTerms</a>

<div id="PrimaryText" style="border-style: solid">

# Class: PrimaryText

This is a primary resource: the object of study, such as a literary work, film, or recording of natural discourse

## Subclass of 

   schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#text'> http://www.language-archives.org/REC/type-20020628.html#text </a>] |




</div><br>
<div id="Annotation" style="border-style: solid">

# Class: Annotation

The resource includes material which adds information to some other linguistic record.

## Subclass of 

   schema:CreativeWork | 



## Properties

[<a href='#annotationType'> annotationType </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#annotation'> http://www.language-archives.org/REC/type-20020628.html#annotation </a>] |




</div><br>
<div id="Coded"  style="border-style: solid">

# Defined Term: Coded

The resource contains an analysis or annotations represented by a code (such as the International Phonetic Alphabet).

</div><br>
<div id="CollectionEvent" style="border-style: solid">

# Class: CollectionEvent

A description of an event at which one or more PrimaryTexts were captured,  eg as video or audio

## Subclass of 

   schema:Event |  schema:CreateAction | 



## Properties

[<a href='#collectionEventType'> collectionEventType </a>] | 



</div><br>
<div id="CollectionEventTypeTerms"  style="border-style: solid">

# Defined Term Set: CollectionEventTypeTerms

Set of terms which are expected values for CollectionEvent types

## Has defined terms[<a href='#Session'> Session </a>] | 

</div><br>
<div id="CollectionProtocol" style="border-style: solid">

# Class: CollectionProtocol

Description of how this Object or Collection was obtained – such as strategy used for selecting written source texts, or the prompts given to participants 

## Subclass of 

   schema:CreativeWork | 



## Properties

[<a href='#collectionProtocolType'> collectionProtocolType </a>] | 



</div><br>
<div id="CollectionProtocolTypeTerms"  style="border-style: solid">

# Defined Term Set: CollectionProtocolTypeTerms

Set of terms which are expected values for CollectionProtocol types

## Has defined terms[<a href='#ElicitationTask'> ElicitationTask </a>] | [<a href='#TextSelectionCriteria'> TextSelectionCriteria </a>] | 

</div><br>
<div id="ModalityTerms"  style="border-style: solid">

# Defined Term Set: ModalityTerms

Set of expected values for modality types

## Has defined terms[<a href='#SpokenLanguage'> SpokenLanguage </a>] | [<a href='#WrittenLanguage'> WrittenLanguage </a>] | [<a href='#Song'> Song </a>] | [<a href='#Gesture'> Gesture </a>] | [<a href='#SignLanguage'> SignLanguage </a>] | 

</div><br>
<div id="DerivedResource" style="border-style: solid">

# Class: DerivedResource

A resource is derived from another resource, via some automated process, eg a downsampled video or an abstract of a resource which is not an annotation (description)

## Subclass of 

   schema:CreativeWork | 



## Properties

[<a href='#derivationOf'> derivationOf </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#text'> http://www.language-archives.org/REC/type-20020628.html#text </a>] |




</div><br>
<div id="AnnotationTypeTerms"  style="border-style: solid">

# Defined Term Set: AnnotationTypeTerms

The set of expected values for annotation types

## Has defined terms[<a href='#Phonemic'> Phonemic </a>] | [<a href='#Phonetic'> Phonetic </a>] | [<a href='#Phonological'> Phonological </a>] | [<a href='#Syntactic'> Syntactic </a>] | [<a href='#Translation'> Translation </a>] | [<a href='#Semantic'> Semantic </a>] | [<a href='#Transcription'> Transcription </a>] | [<a href='#TimeAligned'> TimeAligned </a>] | [<a href='#Prosodic'> Prosodic </a>] | 

</div><br>
<div id="Dialogue"  style="border-style: solid">

# Defined Term: Dialogue

An interactive discourse with two or more participants. Examples of dialogues include conversations, interviews, correspondence, consultations, greetings and leave-takings.

## Is an expected value for the following property

[<a href='#linguisticGenre'> linguisticGenre </a>] | 

</div><br>
<div id="Drama"  style="border-style: solid">

# Defined Term: Drama

A planned, creative, rendition of discourse with two or more participants intended for presentation to an audience.

## Is an expected value for the following property

[<a href='#linguisticGenre'> linguisticGenre </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#text/drama'> http://www.language-archives.org/REC/type-20020628.html#text/drama </a>] |


</div><br>
<div id="ElicitationTask"  style="border-style: solid">

# Defined Term: ElicitationTask

The collection protocol includes a task-based prompt to participants

## Is an expected value for the following property

[<a href='#collectionProtocolType'> collectionProtocolType </a>] | 

</div><br>
<div id="Formulaic"  style="border-style: solid">

# Defined Term: Formulaic

The resource is a ritually or conventionally structured discourse.

## Is an expected value for the following property

[<a href='#linguisticGenre'> linguisticGenre </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#text/formulaic'> http://www.language-archives.org/REC/type-20020628.html#text/formulaic </a>] |


</div><br>
<div id="Gesture"  style="border-style: solid">

# Defined Term: Gesture

The resource contains non-linguistic gestural communication (ie not sign language)

## Is an expected value for the following property

[<a href='#modality'> modality </a>] | 

</div><br>
<div id="Handwritten"  style="border-style: solid">

# Defined Term: Handwritten

The resource was written using a writing implement such as pen, pencil, brush or computer stylus  (From Nyingarn - TODO check this)

</div><br>
<div id="Informational"  style="border-style: solid">

# Defined Term: Informational

Discourse whose primary purpose is to inform the audience about the natural or social world.

## Is an expected value for the following property

[<a href='#linguisticGenre'> linguisticGenre </a>] | 

</div><br>
<div id="Interview"  style="border-style: solid">

# Defined Term: Interview

The resource is conversation where one or more speakers are directing the conversation

## Is an expected value for the following property

[<a href='#linguisticGenre'> linguisticGenre </a>] | 

</div><br>
<div id="Lexicon"  style="border-style: solid">

# Defined Term: Lexicon

The resource includes a systematic listing of lexical items.

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#Lexicon'> http://www.language-archives.org/REC/type-20020628.html#Lexicon </a>] |


</div><br>
<div id="Ludic"  style="border-style: solid">

# Defined Term: Ludic

Ludic discourse is language whose primary function is to be part of play, or a style of speech that involves a creative manipulation of the structures of the language. Examples of ludic discourse are play languages, jokes, secret languages, and speech disguises.

## Is an expected value for the following property

[<a href='#linguisticGenre'> linguisticGenre </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#text/ludic'> http://www.language-archives.org/REC/type-20020628.html#text/ludic </a>] |


</div><br>
<div id="Oratory"  style="border-style: solid">

# Defined Term: Oratory

The art of public speaking, or of speaking eloquently according to rules or conventions. Examples of oratory include sermons, lectures, political speeches, and invocations.

## Is an expected value for the following property

[<a href='#linguisticGenre'> linguisticGenre </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#text/orratory'> http://www.language-archives.org/REC/type-20020628.html#text/orratory </a>] |


</div><br>
<div id="OrganizationBasedLicense" style="border-style: solid">

# Class: OrganizationBasedLicense

A licence document setting out rights and oblications could be based copyright or other rights based on membership of an Organization. The organization could be any  group of people with appropriate governance from self selected individuals who agree to license terms, to groups of researchers, to ad-hoc groups of members of a community

## Subclass of 

   schema:CreativeWork | 



## Properties

[<a href='#licensedOrganization'> licensedOrganization </a>] | 



</div><br>
<div id="OrganizationDepositLicense" style="border-style: solid">

# Class: OrganizationDepositLicense

A license document setting out terms for deposit into a repository by one or more identified groups 

## Subclass of 

  [<a href='#OrganizationBasedLicense'> OrganizationBasedLicense </a>] | 





</div><br>
<div id="OrganizationReuseLicense" style="border-style: solid">

# Class: OrganizationReuseLicense

A license document setting out terms for reuse of data by one or more identified groups.

## Subclass of 

  [<a href='#OrganizationBasedLicense'> OrganizationBasedLicense </a>] | 





</div><br>
<div id="Orthographic"  style="border-style: solid">

# Defined Term: Orthographic

The resource contains annotations using orthography (a writing system) as opposed to a coded representation such as a phonetic transcription

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#description/orthographic'> http://www.language-archives.org/REC/type-20020628.html#description/orthographic </a>] |


</div><br>
<div id="PartOfSpeech"  style="border-style: solid">

# Defined Term: PartOfSpeech

An annotation which assigns lexical elements of language to classes on the basis of their distributional properties (for sign languages, the term 'sign class' is appropriate)

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#description/part-of-spoeech'> http://www.language-archives.org/REC/type-20020628.html#description/part-of-spoeech </a>] |


</div><br>
<div id="PersonSnapshot" style="border-style: solid">

# Class: PersonSnapshot

This class represents a snapshot of a Person in time, in their role as a contributor to one or more creative works. The purpose of this class is to capture the metadata that applies to a person at a particular time, as their name, age, gender, social status  etc may be different over time.

## Subclass of 

   schema:Person |  schema:Role | 



## Properties

[<a href='#person'> person </a>] | 



</div><br>
<div id="Phonemic"  style="border-style: solid">

# Defined Term: Phonemic

An annotation which represents speech in terms of the sound contrasts made in a language.

## Is an expected value for the following property

[<a href='#annotationType'> annotationType </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#description/phonemic'> http://www.language-archives.org/REC/type-20020628.html#description/phonemic </a>] |


</div><br>
<div id="Phonetic"  style="border-style: solid">

# Defined Term: Phonetic

A representation of speech in terms of the sounds produced, typically using the International Phonetic Alphabet

## Is an expected value for the following property

[<a href='#annotationType'> annotationType </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#description/phonetic'> http://www.language-archives.org/REC/type-20020628.html#description/phonetic </a>] |


</div><br>
<div id="Phonological"  style="border-style: solid">

# Defined Term: Phonological

An annotation which includes information about the sound system of a language, such as the contrasts between sounds which make up the sound system and the locally conditioned realisations of sounds which characterise speech in the language.

## Is an expected value for the following property

[<a href='#annotationType'> annotationType </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#description/phonological'> http://www.language-archives.org/REC/type-20020628.html#description/phonological </a>] |


</div><br>
<div id="Procedural"  style="border-style: solid">

# Defined Term: Procedural

An explanation or description of a method, process, or situation having ordered steps.

## Is an expected value for the following property

[<a href='#linguisticGenre'> linguisticGenre </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#text/procedural'> http://www.language-archives.org/REC/type-20020628.html#text/procedural </a>] |


</div><br>
<div id="Prosodic"  style="border-style: solid">

# Defined Term: Prosodic

An annotation which provides a symbolic record of intonation, stress, tone or other suprasegmental features that is expressed independently of regular phonetic transcription.

## Is an expected value for the following property

[<a href='#annotationType'> annotationType </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#description/prosodic'> http://www.language-archives.org/REC/type-20020628.html#description/prosodic </a>] |


</div><br>
<div id="Report"  style="border-style: solid">

# Defined Term: Report

A factual account of some event or circumstance.

## Is an expected value for the following property

[<a href='#linguisticGenre'> linguisticGenre </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#text/report'> http://www.language-archives.org/REC/type-20020628.html#text/report </a>] |


</div><br>
<div id="Semantic"  style="border-style: solid">

# Defined Term: Semantic

The resource includes annotation or analysis concerning the encoding of meaning.

## Is an expected value for the following property

[<a href='#annotationType'> annotationType </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#description/semantic'> http://www.language-archives.org/REC/type-20020628.html#description/semantic </a>] |


</div><br>
<div id="Session"  style="border-style: solid">

# Defined Term: Session

A collection event which is a recording or elicitation Session with participants.

## Is an expected value for the following property

[<a href='#collectionEventType'> collectionEventType </a>] | 

Same as: [<a href='https://www.mpi.nl/ISLE/documents/draft/ISLE_MetaData_2.5.pdf
'> https://www.mpi.nl/ISLE/documents/draft/ISLE_MetaData_2.5.pdf
 </a>] |


</div><br>
<div id="SignLanguage"  style="border-style: solid">

# Defined Term: SignLanguage

The resource contains data for which the medium of interaction was signing.

## Is an expected value for the following property

[<a href='#modality'> modality </a>] | 

</div><br>
<div id="Song"  style="border-style: solid">

# Defined Term: Song

"Words or sounds [articulated] in succession with musical inflections or modulations of the voice" OED.

## Is an expected value for the following property

[<a href='#modality'> modality </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#text/singing'> http://www.language-archives.org/REC/type-20020628.html#text/singing </a>] |


</div><br>
<div id="SpokenLanguage"  style="border-style: solid">

# Defined Term: SpokenLanguage

The resource contains data for which the medium of interaction was speech

## Is an expected value for the following property

[<a href='#modality'> modality </a>] | 

</div><br>
<div id="Syntactic"  style="border-style: solid">

# Defined Term: Syntactic

The resource contains annotation or analysis describing the combinatorial patterns of words in another resource

## Is an expected value for the following property

[<a href='#annotationType'> annotationType </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#description/syntactic'> http://www.language-archives.org/REC/type-20020628.html#description/syntactic </a>] |


</div><br>
<div id="TextSelectionCriteria"  style="border-style: solid">

# Defined Term: TextSelectionCriteria

A description of the criteria used to select texts in a collection

## Is an expected value for the following property

[<a href='#collectionProtocolType'> collectionProtocolType </a>] | 

</div><br>
<div id="Thesaurus"  style="border-style: solid">

# Defined Term: Thesaurus

The resource contains a list or data structure consisting of words or concepts arranged according to sense.

## Is an expected value for the following property

[<a href='#linguisticGenre'> linguisticGenre </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#lexicon/thesaurus'> http://www.language-archives.org/REC/type-20020628.html#lexicon/thesaurus </a>] |


</div><br>
<div id="TimeAligned"  style="border-style: solid">

# Defined Term: TimeAligned

The resource contains a written or coded annotation(s) which has data aligning the annotation(s) with a PrimaryText

## Is an expected value for the following property

[<a href='#annotationType'> annotationType </a>] | 

</div><br>
<div id="Narrative"  style="border-style: solid">

# Defined Term: Narrative

A discourse, monologic or co-constructed, which represents temporally organized events. Types of narratives include historical, traditional, and personal narratives, myths, folktales, fables, and humorous stories.

## Is an expected value for the following property

[<a href='#linguisticGenre'> linguisticGenre </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#text/narrative'> http://www.language-archives.org/REC/type-20020628.html#text/narrative </a>] |


</div><br>
<div id="Transcription"  style="border-style: solid">

# Defined Term: Transcription

The resource contains a transcription, which is a written representation (orthographic or coded) of an audio or visual signal.

## Is an expected value for the following property

[<a href='#annotationType'> annotationType </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#transcription'> http://www.language-archives.org/REC/type-20020628.html#transcription </a>] |


</div><br>
<div id="Translation"  style="border-style: solid">

# Defined Term: Translation

The resource has been translated from one natural language to another.

## Is an expected value for the following property

[<a href='#annotationType'> annotationType </a>] | 

Same as: [<a href='http://www.language-archives.org/REC/type-20020628.html#annotation/translation'> http://www.language-archives.org/REC/type-20020628.html#annotation/translation </a>] |


</div><br>
<div id="Typeset"  style="border-style: solid">

# Defined Term: Typeset

The resource has been formatted for display.

</div><br>
<div id="Typewritten"  style="border-style: solid">

# Defined Term: Typewritten

The resource contains text produced on a tpyewriter (From Nyingarn - TODO check this)

</div><br>
<div id="WrittenLanguage"  style="border-style: solid">

# Defined Term: WrittenLanguage

TThe resource contains data for which the medium of interaction was writing.

## Is an expected value for the following property

[<a href='#modality'> modality </a>] | 

</div><br>
<div id="WhistledLanguage"  style="border-style: solid">

# Defined Term: WhistledLanguage

The resource contains data for which the medium of interaction was whistling.

</div><br>
<div id="annotationOf"  style="border-style: solid">

# Property: annotationOf

This resource contains some kind of description which adds information to the resource it references

## Values expected to be one of these types: 

[<a href='https://purl.archive.org/textcommons/terms#PrimaryText'> https://purl.archive.org/textcommons/terms#PrimaryText </a>] |



## Used on these types: 

 schema:CreativeWork | 





</div><br>
<div id="annotationType"  style="border-style: solid">

# Property: annotationType

The type of annotation for Annotation resources

## Values expected to be one of these types: 





## Used on these types: 

[<a href='#Annotation'> Annotation </a>] | 



## Values expected to be one of these defined terms: 

[<a href='#Phonemic'> Phonemic </a>] | [<a href='#Phonetic'> Phonetic </a>] | [<a href='#Phonological'> Phonological </a>] | [<a href='#Syntactic'> Syntactic </a>] | [<a href='#Translation'> Translation </a>] | [<a href='#Semantic'> Semantic </a>] | [<a href='#Transcription'> Transcription </a>] | [<a href='#TimeAligned'> TimeAligned </a>] | [<a href='#Prosodic'> Prosodic </a>] | 





</div><br>
<div id="annotator"  style="border-style: solid">

# Property: annotator

The participant produced an annotation of this or a related resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#annotator'> http://www.language-archives.org/REC/role.html#annotator </a>] |




</div><br>
<div id="author"  style="border-style: solid">

# Property: author

The participant contributed original writings to the resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#author'> http://www.language-archives.org/REC/role.html#author </a>] |




</div><br>
<div id="channels"  style="border-style: solid">

# Property: channels

Number of audio channels this resource contains (eg 1, 2, 5.1)

## Values expected to be one of these types: 





## Used on these types: 

 schema:CreativeWork | 





</div><br>
<div id="collectionEventType"  style="border-style: solid">

# Property: collectionEventType

An event with a start and end time during which data are gathered from participants, or from other materials

## Values expected to be one of these types: 





## Used on these types: 

[<a href='#CollectionEvent'> CollectionEvent </a>] | 



## Values expected to be one of these defined terms: 

[<a href='#Session'> Session </a>] | 





</div><br>
<div id="collectionProtocolType"  style="border-style: solid">

# Property: collectionProtocolType

A description of the process used to collect or collate data, such as prompts given to participants, or how texts are selected for inclusion in a collection

## Values expected to be one of these types: 





## Used on these types: 

[<a href='#CollectionProtocol'> CollectionProtocol </a>] | 



## Values expected to be one of these defined terms: 

[<a href='#ElicitationTask'> ElicitationTask </a>] | [<a href='#TextSelectionCriteria'> TextSelectionCriteria </a>] | 





</div><br>
<div id="compiler"  style="border-style: solid">

# Property: compiler

The participant is responsible for collecting the sub-parts of the resource together.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#compiler'> http://www.language-archives.org/REC/role.html#compiler </a>] |




</div><br>
<div id="consultant"  style="border-style: solid">

# Property: consultant

The participant contributes expertise to the creation of a work.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#consultant'> http://www.language-archives.org/REC/role.html#consultant </a>] |




</div><br>
<div id="dataInputter"  style="border-style: solid">

# Property: dataInputter

The participant was responsible for entering, re-typing, and/or structuring the data contained in the resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#data_inputter'> http://www.language-archives.org/REC/role.html#data_inputter </a>] |




</div><br>
<div id="depositor"  style="border-style: solid">

# Property: depositor

The participant was responsible for depositing the resource in an archive.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#depositor'> http://www.language-archives.org/REC/role.html#depositor </a>] |




</div><br>
<div id="derivationOf"  style="border-style: solid">

# Property: derivationOf

This resource references another resource that is derived from it such as a downsampled audio or video file, or text extracted from a PDF

## Values expected to be one of these types: 

[<a href='#PrimaryText'> PrimaryText </a>] | [<a href='#Annotation'> Annotation </a>] | 



## Used on these types: 

[<a href='#DerivedResource'> DerivedResource </a>] | 





</div><br>
<div id="developer"  style="border-style: solid">

# Property: developer

The participant developed the methodology or tools that constitute the resource, or that were used to create the resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#developer'> http://www.language-archives.org/REC/role.html#developer </a>] |




</div><br>
<div id="doi"  style="border-style: solid">

# Property: doi

A digital Object Identifier

## Values expected to be one of these types: 





## Used on these types: 

 schema:CreativeWork | 





</div><br>
<div id="editor"  style="border-style: solid">

# Property: editor

The participant reviewed, corrected, and/or tested the resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#editor'> http://www.language-archives.org/REC/role.html#editor </a>] |




</div><br>
<div id="geoJSON"  style="border-style: solid">

# Property: geoJSON

A valid GEOJson feature or feature collection as a string that can be parsed as JSON 

## Values expected to be one of these types: 

 Text | 



## Used on these types: 

 schema:GeoCoordinates |  schema:GeoShape |  schema:Language | 





</div><br>
<div id="hasAnnotation"  style="border-style: solid">

# Property: hasAnnotation

This resource is referenced by another resource that describes it such as a translation, transcription or other analysis 

## Values expected to be one of these types: 

[<a href='"https://purl.archive.org/textcommons/terms#Annnotation"'> "https://purl.archive.org/textcommons/terms#Annnotation" </a>] |



## Used on these types: 

[<a href='https://purl.archive.org/textcommons/terms#PrimaryText'> https://purl.archive.org/textcommons/terms#PrimaryText </a>] |





</div><br>
<div id="hasDerivation"  style="border-style: solid">

# Property: hasDerivation

This resource references another resource that is derived from it such as a downsampled audio or video file, or text extracted from a PDF

## Values expected to be one of these types: 

[<a href='"https://purl.archive.org/textcommons/terms#DerivedText"'> "https://purl.archive.org/textcommons/terms#DerivedText" </a>] |



## Used on these types: 

[<a href='https://purl.archive.org/textcommons/terms#PrimaryText'> https://purl.archive.org/textcommons/terms#PrimaryText </a>] |





</div><br>
<div id="illustrator"  style="border-style: solid">

# Property: illustrator

The participant contributed drawings or other illustrations to the resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#illustrator'> http://www.language-archives.org/REC/role.html#illustrator </a>] |




</div><br>
<div id="indexableText"  style="border-style: solid">

# Property: indexableText

Indicates one or more target File that together contain the full text of an item – each file should indicate its language

## Values expected to be one of these types: 

 schema:File | 



## Used on these types: 

 schema:CreativeWork | 





</div><br>
<div id="interpreter"  style="border-style: solid">

# Property: interpreter

The participant translates in real-time or explains the discourse recorded in the resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#interpreter'> http://www.language-archives.org/REC/role.html#interpreter </a>] |




</div><br>
<div id="interviewee"  style="border-style: solid">

# Property: interviewee

The participant was a respondent in an interview

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 





</div><br>
<div id="interviewer"  style="border-style: solid">

# Property: interviewer

The participant conducted an interview that forms part of the resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#interviewer'> http://www.language-archives.org/REC/role.html#interviewer </a>] |




</div><br>
<div id="licensedOrganization"  style="border-style: solid">

# Property: licensedOrganization

Indicates a group of people who have the rights described in this license

## Values expected to be one of these types: 

 schema:Organization | 



## Used on these types: 

[<a href='#OrganizationBasedLicense'> OrganizationBasedLicense </a>] | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#translator'> http://www.language-archives.org/REC/role.html#translator </a>] |




</div><br>
<div id="linguisticGenre"  style="border-style: solid">

# Property: linguisticGenre

A linguistic classification of the genre of this resource

## Values expected to be one of these types: 





## Used on these types: 

[<a href='https://purl.archive.org/textcommons/terms#PrimaryText'> https://purl.archive.org/textcommons/terms#PrimaryText </a>] |



## Values expected to be one of these defined terms: 

[<a href='#Formulaic'> Formulaic </a>] | [<a href='#Thesaurus'> Thesaurus </a>] | [<a href='#Dialogue'> Dialogue </a>] | [<a href='#Oratory'> Oratory </a>] | [<a href='#Report'> Report </a>] | [<a href='#Ludic'> Ludic </a>] | [<a href='#Procedural'> Procedural </a>] | [<a href='#Narrative'> Narrative </a>] | [<a href='#Interview'> Interview </a>] | [<a href='#Drama'> Drama </a>] | [<a href='#Informational'> Informational </a>] | 





</div><br>
<div id="modality"  style="border-style: solid">

# Property: modality

The mode (spoken, written, signed etc) of this resource. There may be more than one value for this property.

## Values expected to be one of these types: 





## Used on these types: 

 schema:CreativeWork | 



## Values expected to be one of these defined terms: 

[<a href='#SpokenLanguage'> SpokenLanguage </a>] | [<a href='#WrittenLanguage'> WrittenLanguage </a>] | [<a href='#Song'> Song </a>] | [<a href='#Gesture'> Gesture </a>] | [<a href='#SignLanguage'> SignLanguage </a>] | 





</div><br>
<div id="participant"  style="border-style: solid">

# Property: participant

The participant was present during the creation of the resource, but did not contribute substantially to its content.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#participant'> http://www.language-archives.org/REC/role.html#participant </a>] |




</div><br>
<div id="performer"  style="border-style: solid">

# Property: performer

The participant performed some portion of a recorded, filmed, or transcribed resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#performer'> http://www.language-archives.org/REC/role.html#performer </a>] |




</div><br>
<div id="person"  style="border-style: solid">

# Property: person

This property references a Person item which represents the persistent identity of one or more ContributingPerson items.

## Values expected to be one of these types: 

 schema:Person | 



## Used on these types: 

[<a href='#PersonSnapshot'> PersonSnapshot </a>] | 





</div><br>
<div id="photographer"  style="border-style: solid">

# Property: photographer

The participant took the photograph, or shot the film, that appears in or constitutes the resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#photographer'> http://www.language-archives.org/REC/role.html#photographer </a>] |




</div><br>
<div id="recorder"  style="border-style: solid">

# Property: recorder

The participant operated the recording machinery used to create the resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#recorder'> http://www.language-archives.org/REC/role.html#recorder </a>] |




</div><br>
<div id="register"  style="border-style: solid">

# Property: register

Specifies the type of register (any of the varieties of a language that a speaker uses in a particular social context [Merriam-Webster]) of the contents of a language resource.

## Values expected to be one of these types: 





## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://w3id.org/meta-share/meta-share/register'> http://w3id.org/meta-share/meta-share/register </a>] |




</div><br>
<div id="researchParticipant"  style="border-style: solid">

# Property: researchParticipant

The participant acted as a research subject or responded to a questionnaire, the results of which study form the basis of the resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#research_participant'> http://www.language-archives.org/REC/role.html#research_participant </a>] |




</div><br>
<div id="researcher"  style="border-style: solid">

# Property: researcher

The resource was created as part of the participant's research, or the research presents interim or final results from the participant's research.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#researcher'> http://www.language-archives.org/REC/role.html#researcher </a>] |




</div><br>
<div id="responder"  style="border-style: solid">

# Property: responder

The participant was an interlocutor in some sort of discourse event.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#responder'> http://www.language-archives.org/REC/role.html#responder </a>] |




</div><br>
<div id="signer"  style="border-style: solid">

# Property: signer

The participant was a principal signer in a resource that consists of a recording, a film, or a transcription of a recorded resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#signer'> http://www.language-archives.org/REC/role.html#signer </a>] |




</div><br>
<div id="singer"  style="border-style: solid">

# Property: singer

The participant sang, either individually or as part of a group, in a resource that consists of a recording, a film, or a transcription of a recorded resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#singer'> http://www.language-archives.org/REC/role.html#singer </a>] |




</div><br>
<div id="speaker"  style="border-style: solid">

# Property: speaker

The participant was a principal speaker in a resource that consists of a recording, a film, or a transcription of a recorded resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#speaker'> http://www.language-archives.org/REC/role.html#speaker </a>] |




</div><br>
<div id="sponsor"  style="border-style: solid">

# Property: sponsor

The participant contributed financial support to the creation of the resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#sponsor'> http://www.language-archives.org/REC/role.html#sponsor </a>] |




</div><br>
<div id="transcriber"  style="border-style: solid">

# Property: transcriber

The participant produced a transcription of this or a related resource.

## Values expected to be one of these types: 

 schema:Person |  schema:Organization | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#transcriber'> http://www.language-archives.org/REC/role.html#transcriber </a>] |




</div><br>
<div id="translator"  style="border-style: solid">

# Property: translator

The participant produced a translation of this or a related resource.

## Values expected to be one of these types: 

 schema:Organization |  schema:Person | 



## Used on these types: 

 schema:CreativeWork | 



Same as: [<a href='http://www.language-archives.org/REC/role.html#translator'> http://www.language-archives.org/REC/role.html#translator </a>] |




</div><br>
<div id="hasCollectionProtocol"  style="border-style: solid">

# Property: hasCollectionProtocol

This resource  was assembled or collected according to the linked protocol

## Values expected to be one of these types: 

[<a href='#CollectionProtocol'> CollectionProtocol </a>] | 



## Used on these types: 

 schema:CreativeWork | 





</div><br>
<div id="isDeIdentified"  style="border-style: solid">

# Property: isDeIdentified

The data in this item has had identifying information removed, or in the case of a person the name is an alias

## Values expected to be one of these types: 

 schema:Boolean | 



## Used on these types: 

[<a href='[{"@id":"schema:CreativeWork"}, {"@id":"schema:Person"}, https://purl.archive.org/textcommons/terms#PersonSnapshot]'> [{"@id":"schema:CreativeWork"}, {"@id":"schema:Person"}, https://purl.archive.org/textcommons/terms#PersonSnapshot] </a>] |





</div><br>
<div id="WrittenLanguageTypeTerms"  style="border-style: solid">

# Defined Term Set: WrittenLanguageTypeTerms

Set of expected types for WrittenLanguage modality (this set is incomplete - more work needed)

## Has defined terms[<a href='#Handwritten'> Handwritten </a>] | [<a href='#Typewritten'> Typewritten </a>] | [<a href='#Typeset'> Typeset </a>] | 

</div><br>
<div id="LinguisticGenreTerms"  style="border-style: solid">

# Defined Term Set: LinguisticGenreTerms

Set of expected values for linguistic genre of a resource

## Has defined terms[<a href='#Formulaic'> Formulaic </a>] | [<a href='#Thesaurus'> Thesaurus </a>] | [<a href='#Dialogue'> Dialogue </a>] | [<a href='#Oratory'> Oratory </a>] | [<a href='#Report'> Report </a>] | [<a href='#Ludic'> Ludic </a>] | [<a href='#Procedural'> Procedural </a>] | [<a href='#Narrative'> Narrative </a>] | [<a href='#Interview'> Interview </a>] | [<a href='#Drama'> Drama </a>] | [<a href='#Informational'> Informational </a>] | 

</div><br>
