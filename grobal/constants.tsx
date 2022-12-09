export const NOTES = [
  "c3",
  "df3",
  "d3",
  "ef3",
  "e3",
  "f3",
  "gf3",
  "g3",
  "af3",
  "a3",
  "bf3",
  "b3",
];

export interface KEY {
  z: string;
  s: string;
  x: string;
  d: string;
  c: string;
  v: string;
  g: string;
  b: string;
  h: string;
  n: string;
  j: string;
  m: string;
}

export const KEY_TO_NOTE = {
  z: "c3",
  s: "df3",
  x: "d3",
  d: "ef3",
  c: "e3",
  v: "f3",
  g: "gf3",
  b: "g3",
  h: "af3",
  n: "a3",
  j: "bf3",
  m: "b3",
} as KEY;

export interface NOTE {
  c3: string;
  df3: string;
  d3: string;
  ef3: string;
  e3: string;
  f3: string;
  gf3: string;
  g3: string;
  af3: string;
  a3: string;
  bf3: string;
  b3: string;
}

export const NOTE_TO_KEY = {
  c3: "z",
  df3: "s",
  d3: "x",
  ef3: "d",
  e3: "c",
  f3: "v",
  gf3: "g",
  g3: "b",
  af3: "h",
  a3: "n",
  bf3: "j",
  b3: "m",
} as NOTE;

export const VALID_KEYS = [
  "z",
  "s",
  "x",
  "d",
  "c",
  "v",
  "g",
  "b",
  "h",
  "n",
  "j",
  "m",
];
