export interface Personaje {
  name?: string,
  species?: string,
  gender?: string,
  house?: string,
  dateOfBirth?: string,
  yearOfBirth?: number,
  ancestry?: string,
  eyeColour?: string,
  hairColour?: string,
  wand: Varita,
  patronus?: string,
  hogwartsStudent?: boolean,
  hogwartsStaff?: boolean,
  actor?: string,
  alive?: boolean,
  image?: string
}

export interface Varita{
  wood?: string,
  core?: string,
  length?: number
}
