export interface SeriesSummary{
  resourceURI: string;
  name: string;
}

export interface ComicSummary{
  resourceURI: string;
  name: string;
}

export interface ComicDate{
  type: string;
  date: Date;
}

export interface ComicPrice{
  type: string;
  price: number;
}

export interface Image{
  path:string;
  extension:string;
}

export interface CreatorList{
  available:number;
  returned: number;
  collectionURI:string;
  items: CreatorSummary[];
}

export interface CreatorSummary{
  resourceURI: string;
  name: string;
  role: string;
}

export interface CharacterList{
  available: number;
  returned: number;
  collectionURI: string;
  items: CharacterSummary[];
}

export interface CharacterSummary{
  resourceURI: string;
  name: string;
  role: string;
}

export interface StoryList{
  available: string;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}

export interface StorySummary{
  resourceURI: string;
  name: string;
  type: string;
}

export interface EventList{
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
}

export interface EventSummary{
  resourceURI: string;
  name: string;
}

export interface Comic{
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: object[];
  resourceURI: string;
  urls: URL[];
  series: SeriesSummary;
  variants: ComicSummary[];
  collections: ComicSummary
  collectedIssues: ComicSummary[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Image;
  images: Image[];
  creators: CreatorList;
  characters: CharacterList;
  stories: StoryList;
  events: EventList;
}

export interface Herois{
  id: number;
  digitalId: number;
  name: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: object[];
  resourceURI: string;
  urls: URL[];
  series: SeriesSummary;
  variants: ComicSummary[];
  collections: ComicSummary
  collectedIssues: ComicSummary[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Image;
  images: Image[];
  creators: CreatorList;
  characters: CharacterList;
  stories: StoryList;
  events: EventList;
}

export interface Series{
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: Date;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: object[];
  resourceURI: string;
  urls: URL[];
  series: SeriesSummary;
  variants: ComicSummary[];
  collections: ComicSummary
  collectedIssues: ComicSummary[];
  dates: ComicDate[];
  prices: ComicPrice[];
  thumbnail: Image;
  images: Image[];
  creators: CreatorList;
  characters: CharacterList;
  stories: StoryList;
  events: EventList;
}