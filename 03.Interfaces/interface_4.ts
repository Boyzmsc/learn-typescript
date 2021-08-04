// Type alias (vs) Interface

// Function
type EatType = (food: string) => void;

interface IEat {
  (food: string): void;
}

// Array
type PersonList = string[];

interface IPersonList {
  [index: number]: string;
}

// Intersection
interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}
interface ArtistsData {
  artists: { name: string }[];
}

type ArtistsResponseType = ArtistsData & ErrorHandling;

interface IArtistsResponse extends ArtistsData, ErrorHandling {}

// Merging interface
interface MergingInterface {
  a: string;
}
interface MergingInterface {
  b: string;
}

let m: MergingInterface;
// m.a;
// m.b;
